function f(){
    i = 1;         // Noncompliant; i is global
  
    for (j = 0; j < array.length; j++) {  // Noncompliant; j is global now too
      // ...
    }
  }


  class Dog extends Animal {
    constructor(name) {
      super();
      this.name = name;
      super();         // Noncompliant
      super.doSomething();
    }
  }
  