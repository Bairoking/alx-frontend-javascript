/* Sanna Bah */
export default function getStudentsByLocation(sb, city) {
  return sb.filter((obj) => obj.location === city);
}
