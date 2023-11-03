/**
 * This function calculates the median value for an array of numbers.
 * 
 * @function
 * @param {number[]} array List of numbers
 * @returns {number} The median value
 */
export function median(array) {
    if (array.reduce((a, b) => a + b, 0) === 0) {
        return 0;
    }

    const isOdd = ((array.length % 2) === 1);

    array.sort((a, b) => a - b);
    
    if (isOdd) {
        return array[(array.length + 1) / 2];
    } 
    
    return (array[(array.length / 2) - 1] + array[array.length / 2]) / 2
}
