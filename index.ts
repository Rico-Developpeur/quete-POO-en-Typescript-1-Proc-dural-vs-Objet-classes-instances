// classe Person avec deux attributs name et age
class Person {
  private name: string;
  private age: number;

  // constructeur de Person
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //deux methodes tellMyName et tellMyAge
  tellMyName(): void {
    console.log(`I am ${this.name}`);
  }

  tellMyAge(): void {
    console.log(`I am ${this.age} years old`);
  }
}

//deux personnes pour tester la classe
const person1 = new Person("John", 40);
const person2 = new Person("Mary", 35);

//les methodes sont appelées
person1.tellMyName();
person1.tellMyAge();
person2.tellMyName();
person2.tellMyAge();

// En lançant node index.js cela affiche dans la console
// I am John
// I am 40 years old
// I am Mary
// I am 35 years old
