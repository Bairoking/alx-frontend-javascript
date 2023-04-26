/* Sanna Bah */
export default function getStudentIdsSum(sb) {
  return sb.reduce((counter, currentObj) => counter + currentObj.id, 0);
}
