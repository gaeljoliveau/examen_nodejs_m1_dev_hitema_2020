const fs = require('fs');
const notFound = -1;
const empty = 0;

module.exports = class PeopleService {
  constructor() {
    this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
  }

  updatePeople(id, people) {
    // To be implemented!

    const myId = parseInt(id, 10);
    const peopleFiltered = this.peoples.findIndex((p) => p.id === myId);

    if (peopleFiltered !== notFound) {

      this.peoples[peopleFiltered] = people;

      return this.peoples[peopleFiltered];
    }
  }
  
  getPeople(filters) {
    // To be implemented!
    if (Object.keys(filters).length === empty) {
      return this.peoples;

    }


    const key = Object.keys(filters)[0];
    const value = Object.values(filters)[0];
    const peopleFiltered = this.peoples.filter(
      (people) => people[key] === value
    );
    return peopleFiltered; 
  }
  
}
