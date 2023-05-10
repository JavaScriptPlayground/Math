/**
 * @function
 * @param {number[]} list List of numbers
 * @returns number, the average amount from the number array
 */
export function average(list) {
    return list.reduce((last, current) => last + current, 0) / list.length || 0;
}
