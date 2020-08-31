> 假设一个场景，我们需要定义很多的类，而且这些类都有相同的地方，如果一个一个定义，会重复定是很多属性和方法，太过繁琐，这就需要用到抽象类了。

### 1、定义一个抽象类

```
abstract class Geom {
  // 定义一个抽象类，
  width: number;    // 可以定义普通的属性和方法
  getType() {
    return 'Geom';
  }

  // 在抽象类中定义一个抽象方法，子类需要实现该方法
  abstract getArea(): number;
}
```

### 2、定义子类来继承

> Tip: 抽象类是不允许使用 new 关键字来实例化的，只能被继承

```
class Circel extends Geom {
  // getArea方法是抽象类内部的抽象方法，需要子类实现，不写会报错
  getArea() {
    return 100;
  }
}

class Square extends Geom {
  getArea() {
    return 200;
  }
}

class Triangle extends Geom{
  getArea() {
    return 300;
  }
}

...
```
