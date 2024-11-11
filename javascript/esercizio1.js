class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    }
  }
}

const user1 = new User("Alessandro", "Coretti", 22, "Roma");
const user2 = new User("Paolo", "Verdi", 30, "Modena");

console.log(user1.compareAge(user2));
console.log(user2.compareAge(user1));
