/* Sanna Bah */
export default function hasValuesFromArray(set, sb) {
  return sb.reduce((previous, current) => previous && set.has(current), true);
}
