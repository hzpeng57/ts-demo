### 1、访问类型 private protected public

- public 允许在类的内外被调用

```
class Person {
  name: string; // 默认为 public
  syaHi() {
    console.log(this.name);
  }
}

const person = new Person();
person.name = 'hzp';    // 类的外部可以调用
person.syaHi();         // 类的外部可以调用
```

- private 只允许在类的内部调用

```
class Person {
  private name: string; // private 类型
  syaHi() {
    console.log(this.name);
  }
}

const person = new Person();
person.name = 'hzp';    // 不被允许，因为name在类内定义为private类型
person.syaHi();
```

```
class Person {
  firstName: string;            // public类型
  private lastName = 'Huang';   // private类型
  syaHi() {
    console.log(this.firstName + this.lastName);
  }
}

const person = new Person();
person.firstName = 'Zhenpeng';  // 可以赋值,因为firstName是public类型
person.syaHi(); // ZhenpengHuang
```

- protected 允许在类内及继承的子类中使用

```
class Person {
  protected name: string;
  public syaHi() {
    this.name;          // 可以调用,protected允许在内部和子类调用
    console.log('hi');
  }
}

class Teacher extends Person {
  public sayBye() {
    this.name;          // 可以调用，protected允许在内部子类调用
  }
}

const person = new Person();
person.name = 'Zhenpeng';   // 不可以在类外部调用
person.syaHi();
```

### 2、constructor

`constructor`在类被实例化的时候被调用，可以接收参数

```
// 传统写法
class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person('Hzp');
console.log(person.name);   // Hzp
```

上面的写法和下面这一种是一样的，简写：

```
// 简化写法
class Person {
  constructor(public name: string) {}
}

const person = new Person('Hzp');
console.log(person.name);   // Hzp
```

---

```
class Person {
  constructor(public name: string) {}
}

class Teacher extends Person {
  sayHi() {
    console.log(this.name);
  }
}
const teacher = new Teacher('hzp');
teacher.sayHi();    // hzp

```

错误写法：

```
class Person {
  constructor(public name: string) {}
}

class Teacher extends Person {
  constructor(age: number) {    // 报错，因为继承了父类，父类的构造器需要参数

  }
}
const teacher = new Teacher(28);

```

正确写法：

```
class Person {
  constructor(public name: string) {}
}

class Teacher extends Person {
  constructor(public age: number) {
    super('Hzp');
  }
}
const teacher = new Teacher(25);
console.log(teacher.age);   // 25
console.log(teacher.name);  // Hzp
```

> 当继承时，如果子类有`contructor`构造器的话，就算父类没有`contructor`构造器，也需要在子类`contructor`构造器中调用`super()`，如果父类构造器有参数的话，要在 super 方法中传递进去。

```
class Person {

}

class Teacher extends Person {
  constructor(public age: number) {
    super();    // super也要被调用，不然会报错
  }
}
```

### 3、readonly 只读属性

```
class Person {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person('Hzp');
console.log(person.name);
person.name = 'Huang';  // Cannot assign to 'name' because it is a read-only property.name为只读属性，不能修改
```
