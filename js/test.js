"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { FontRate } from './script';
function getMaxLength(arr, fontRate) {
    return arr.reduce(function (length, item) {
        if (item) {
            var str = item.toString();
            // 汉字
            var char = str.match(/[\u2E80-\u9FFF]/g);
            var charLength = char ? char.length : 0;
            // 数字
            var num = str.match(/\d|\./g);
            var numLength = num ? num.length : 0;
            // 其他
            var otherLength = str.length - charLength - numLength;
            var newLength = charLength * fontRate.CHAR_RATE +
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
exports.getMaxLength = getMaxLength;
