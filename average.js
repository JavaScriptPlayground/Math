/**
 * @function
 * @param {number[]} array List of numbers
 * @returns number, the average amount from the number array
 */
export function average(array) {
    return array.reduce((last, current) => last + current, 0) / array.length || 0;
}
