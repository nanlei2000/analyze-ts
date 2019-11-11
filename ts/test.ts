// import { FontRate } from './script';
export function getMaxLength(arr: string[], fontRate: any): number {
  return arr.reduce((length, item) => {
    if (item) {
      const str = item.toString();
      // 汉字
      const char = str.match(/[\u2E80-\u9FFF]/g);
      const charLength = char ? char.length : 0;
      // 数字
      const num = str.match(/\d|\./g);
      const numLength = num ? num.length : 0;
      // 其他
      const otherLength = str.length - charLength - numLength;
      let newLength = charLength * fontRate.CHAR_RATE +
        numLength * fontRate.NUM_RATE +
        otherLength * fontRate.OTHER_RATE;
      if (str.includes('\n')) {
        newLength = getMaxLength(str.split('\n'), fontRate);
      }
      if (length < newLength) {
        length = newLength;
      }
    }
    return length;
  }, 0);
}
