/**
 * @function
 * @param {number} value The number to map
 * @param {number} fromMin The lower bound of the value’s current range
 * @param {number} fromMax The upper bound of the value’s current range
 * @param {number} toMin The lower bound of the value’s target range
 * @param {number} toMax The upper bound of the value’s target range
 * @returns {number} The mapped value
 */
export function map(value, fromMin, fromMax, toMin, toMax) {
    return (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
}
