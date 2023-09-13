export function findValueInText(value: string, text: string): boolean {
  return text.toLowerCase().indexOf(value.toLowerCase()) !== -1;
}
