/* Sanna Bah */
export default function getListStudentIds(sb) {
  if (Array.isArray(sb)) {
    return sb.map((obj) => obj.id);
  }

  return [];
}
