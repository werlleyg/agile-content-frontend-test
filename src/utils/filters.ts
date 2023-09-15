/**
 * Determines whether a specified value exists in the text
 * @param {string} value - The value to search for within the text
 * @param {string} text - The text in which to search for the value
 * @returns {boolean} - true if the value is found in the text, otherwise false
 */

export function findValueInText(value: string, text: string): boolean {
  return text.toLowerCase().indexOf(value.toLowerCase()) !== -1;
}
