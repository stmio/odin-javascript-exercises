const findTheOldest = function (people) {
  return people.reduce(
    (previous, current) => {
      if (!current.yearOfDeath) {
        current.age = new Date().getFullYear() - current.yearOfBirth;
      } else current.age = current.yearOfDeath - current.yearOfBirth;

      if (previous.age < current.age) {
        return current;
      } else return previous;
    },
    { age: 0 }
  );
};

// Do not edit below this line
module.exports = findTheOldest;
