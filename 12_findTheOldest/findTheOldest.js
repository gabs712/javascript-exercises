const findTheOldest = function(people) {
  return people.reduce((acc, person) => {
    const year = new Date().getFullYear()
    if (Object.keys(acc).length === 0) acc = person

    let personAge = (person.yearOfDeath || year) - person.yearOfBirth
    let accAge = (acc.yearOfDeath || year) - acc.yearOfBirth

    if (personAge > accAge) acc = person
    return acc
  }, {})
};

// Do not edit below this line
module.exports = findTheOldest;
