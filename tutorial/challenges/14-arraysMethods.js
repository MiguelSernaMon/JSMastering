//have access to students from data.js

const updatedStudents = students.map((student) => {
  student.role = 'student';
  return student;
});

console.log('updated', updatedStudents);

const highScores = students.filter((student) => {
  return student.score >= 80;
});

console.log(highScores);

const specificId = students.find((banana) => {
  return banana.id === 1;
});

const fruits = ['banana', 'orange'];

const random = fruits.find((fruit) => {
  return fruit === 'orange';
});
console.log(random);
console.log(specificId);

const averageScore =
  students.reduce((acc, student) => {
    // console.log(student);
    // console.log(acc);
    acc += student.score;
    return acc;
  }, 0) / students.length;

console.log(averageScore);

const survey = students.reduce((acc, student) => {
  // console.log(student.favoriteSubject);
  const favSubject = student.favoriteSubject;
  if (acc[favSubject]) {
    acc[favSubject] += 1;
  } else {
    acc[favSubject] = 1;
  }
  return acc;
}, {});

console.log(survey);
