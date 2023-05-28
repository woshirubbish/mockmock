import type { KeyRule } from './type';

import { isUndefined } from 'lodash-es';
import { NUM_RANGE_REG } from 'src/const/reg';
import { number } from 'src/mockData';

export function parserKey(key?: string | number): KeyRule {
  key = isUndefined(key) ? '' : key.toString();
  const parts = key.split('|');

  if (parts.length < 2) {
    return { keyName: key };
  }

  const lastPart = parts.pop()!;
  const rangeMatch = lastPart.match(NUM_RANGE_REG);

  if (!rangeMatch) {
    return { keyName: key };
  }
  const keyName = parts[0];

  const [min, max] = [parseInt(rangeMatch[1], 10), parseInt(rangeMatch[2], 10)];

  const count = !isNaN(min) && !isNaN(max) ? number(min, max) : !isNaN(min) ? min : undefined;

  return {
    keyName,
    count,
  };
}
