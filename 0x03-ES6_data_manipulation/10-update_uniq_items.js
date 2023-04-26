/* Sanna Bah */
export default function updateUniqueItems(sb) {
  if (sb instanceof Map) {
    for (const [key, value] of sb) {
      if (value === 1) {
        sb.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return sb;
}
