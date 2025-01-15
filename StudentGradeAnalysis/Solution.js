const students = [
  { name: "Alice", grades: [85, 90, 92], attendance: 90 },
  { name: "Bob", grades: [75, 80, 85], attendance: 75 },
  { name: "Charlie", grades: [95, 88, 91], attendance: 85 },
  { name: "David", grades: [88, 89, 87], attendance: 95 },
  { name: "Eve", grades: [92, 93, 90], attendance: 88 },
];

const highAttendance = students.filter((student) => student.attendance >= 80);

const studentSummaries = highAttendance.map((student) => {
  const average =
    student.grades.reduce((sum, grade) => sum + grade, 0) /
    student.grades.length;

  return {
    name: student.name,
    average: Number(average.toFixed(2)),
  };
});

const sortedSummaries = studentSummaries.sort((a, b) => b.average - a.average);

console.log(sortedSummaries);
