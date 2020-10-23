const pi = "yes, please";
pi = 3.14;  // Noncompliant

class Dog extends Animal {
    constructor(name) {
      super();
      this.name = name;
      super();         // Noncompliant
      super.doSomething();
    }
  }