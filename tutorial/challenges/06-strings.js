// const fullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`.toUpperCase();
// };
const fullName = ({ firstName, lastName }) => {
  return `${firstName} ${lastName}`.toUpperCase();
};

console.log(fullName({ lastName: 'Jordan', firstName: 'Peter' }));
