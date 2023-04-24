/* Sanna Bah */
export default function cleanSet(set, startString) {
  let text = '';
  const sb = [];

  if (startString && typeof startString === 'string') {
    for (const element of set) {
      if (element && element.startsWith(startString)) {
        sb.push(element.slice(startString.length));
      }
    }
    text = sb.join('-');
  }
  return text;
}
