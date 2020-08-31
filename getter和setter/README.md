### getter 和 setter

```
class Person {
  constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}

const person = new Person('Hzp');
console.log(person.name);
person.name = 'Huangzhenpeng';
console.log(person.name);

```

### 单例模式实现

```
class Person {
  private constructor(public name: string) {}

  private static instance = Person ;
  static getInstance(name: string) {    // static挂载类上的属性，而不是类的实例上
    if (!this.instance) {
      this.instance = new Person(name);
    }
    return this.instance;
  }
}

const person1 = Person.getInstance('Huang');
const person2 = Person.getInstance('Hzp');
console.log(person1.name);  // Huang
console.log(person2.name);  // Huang
```
