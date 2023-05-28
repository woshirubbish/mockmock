/** 解析完key后返回的值的生成规则 */
export interface KeyRule {
  /** 键名 */
  keyName: string;
  /** 确切的生成数，'name|1' */
  count?: number;
}
