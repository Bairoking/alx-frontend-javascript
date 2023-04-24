/* Saanna Bah */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((stud) => stud.location === city).map((stud) => ({ ...stud, grade: newGrades.filter((s) => s.studentId === stud.id).map((s) => s.grade)[0] || 'N/A' }));
}
