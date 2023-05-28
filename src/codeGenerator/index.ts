import type { KeyRule } from './../templateParser/type';

import { isEmpty, isUndefined } from 'lodash-es';
import { parserKey } from 'src/templateParser';
import { getType } from 'src/util/typeof';

/**
 * 将模板转换成最终代码
 * @param template 传入的模板
 * @param key 键名
 * @returns 最终生成的代码
 */
export function generateData(template: any, key?: string | number): any {
  key = isUndefined(key) ? '' : key.toString();

  const keyRule = parserKey(key);
  const templateType = getType(template);

  switch (templateType) {
    case 'object':
      return genObject(template, keyRule);

    case 'array':
      return genArray(template, keyRule);

    case 'number':
      return genNumber(template, keyRule);

    default:
      return template;
  }
}

/**
 * 对象类型的模板转换器
 * @param template 传入的模板
 * @param rule 生成规则
 * @returns 转化后的生成的对象
 */
function genObject(template: Record<string | number, any>, rule: KeyRule) {
  const res: Record<string, any> = {};
  const { count } = rule;
  const keys = Object.keys(template);
  const randomSelectKeys = isUndefined(count) ? keys : keys.slice(0, count);
  randomSelectKeys.forEach(key => {
    const { keyName } = parserKey(key);
    const generatedVal = generateData(template[key], key);
    res[keyName] = generatedVal;
  });
  return res;
}

/**
 * 数组类型的模板转换器
 * @param template 传入的模板
 * @param rule 生成规则
 * @returns 转化后的生成的数组
 */
function genArray(template: any[], rule: KeyRule) {
  const res: any[] = [];

  if (isEmpty(template)) return res;

  const { count } = rule;
  if (isUndefined(count)) {
    template.forEach((item, i) => {
      res.push(generateData(item, i));
    });
  } else {
    for (let i = 0; i < count; i++) {
      template.forEach(item => res.push(generateData(item, res.length)));
    }
  }

  return res;
}

/**
 * 数字类型的模板转换器
 * @param template 传入的模板
 * @param rule 生成规则
 * @returns 数字后的生成的数组
 */
function genNumber(template: number, rule: KeyRule) {
  return isUndefined(rule.count) ? template : rule.count;
}

console.log(
  generateData({
    'list|1-10': [
      {
        'id|2': 5,
        email: '@EMAIL',
        'number|1000-11': 1,
      },
      {
        id: 3,
        email: '@EMAIL',
        'number|1000-11': 1,
      },
    ],
  }),
);
