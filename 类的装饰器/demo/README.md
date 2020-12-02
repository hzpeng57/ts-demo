# 装饰器

### 一、首先初始化代码如下

```typescript
const userInfo: any = undefined;

class Test {
  getName() {
    console.log(userInfo.name);
  }
  getAge() {
    console.log(userInfo.age);
  }
}

let test = new Test();
test.getName();
test.getAge();
```

很简单，我们定义一个类，里面有两个方法，分别获取 `userInfo.name` 和 `userInfo.age` ，但是最上面我们定义的 `userInfo` 的值是 `undefined` ，所以这两个方法在最下面执行的时候，是会报错的，name遇到这种情况要怎么办呢？

### 二、解决方法

#### 1、使用 `try...catch` 语法

```typescript
const userInfo: any = undefined;

class Test {
  getName() {
    try {
      console.log(userInfo.name);
    } catch (e) {
      console.log('userInfo.name 出错')
    }
  }
  getAge() {
      try {
      console.log(userInfo.age);
    } catch (e) {
      console.log('userInfo.age 出错')
    }
  }
}

let test = new Test();
test.getName();
test.getAge();
```

这样出错的时候我们就可以捕获到错误，然后会打印错对应的错误信息
```
userInfo.name 出错
userInfo.age 出错
```

但是这样就有另一个问题，如果方法很多，我们岂不是要在每一个方法中都写一遍 `try...catch` 有没有更好的办法呢，答案是有的，下面说第二种办法

#### 2、装饰器（主角登场）

直接看代码

```typescript
const userInfo: any = undefined;

/**
 *
 * @param target 使用到该装饰器的类
 * @param name 使用该装饰器的函数名称
 * @param descriptor 使用该装饰器的方法的属性描述符
 */
function catchErr(target: any, name: string, descriptor: PropertyDescriptor) {
  const fn = descriptor.value;
  descriptor.value = function () {
    try {
      fn();
    } catch (e) {
      console.log('userInfo 有问题');
    }
  };
}

class Test {
  @catchErr
  getName() {
    console.log(userInfo.name);
  }
  @catchErr
  getAge() {
    console.log(userInfo.age);
  }
}

let test = new Test();
test.getName();
test.getAge();
```

我们写了一个 `catchErr` 函数，就是我们要说的装饰器（装饰器本身就是一个函数）。

1、 `catchErr` 接收三个参数分别表示：使用到装饰器的类的名称、使用该装饰器的方法的名称、使用该装饰器的方法的属性描述符。

我们修改一下代码：
```typescript
function catchErr(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('target: ', target);
  console.log('name: ', name);
  console.log('descriptor: ', descriptor);
}
```
会看到如下打印信息：
```
target:  Test { getName: [Function], getAge: [Function] }
name:  getName
descriptor:  {
  value: [Function],
  writable: true,
  enumerable: true,
  configurable: true
}
```
让我们把代码再改回去。

这样写是会方便很多，不用在每个方法中都写一遍 `try...catch` ，只需要在方法定义的地方使用一下装饰器就好了（`@catchErr`），但是这样就没有问题了吗？肯定还是有的，可以看到装饰器中打印的错误信息，都是一样的，有没有办法修改一下呢，比如我们可以把错误信息当做参数传递进去？

#### 3、使用工厂模式

还是先看代码

```typescript
const userInfo: any = undefined;

function catchErr(msg: string) {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function () {
      try {
        fn();
      } catch (e) {
        console.log(`${msg} 有问题`);
      }
    };
  };
}

class Test {
  @catchErr('userInfo.name')
  getName() {
    console.log(userInfo.name);
  }
  @catchErr('userInfo.age')
  getAge() {
    console.log(userInfo.age);
  }
}

let test = new Test();
test.getName();
test.getAge();
```

可以看到，我们把 `catchErr` 改造了一下，它接收一个参数，就是要打印的错误信息，然后返回的才是真是的装饰器。

然后使用的时候也要修改一下，`@catchErr('userInfo.age')` 要通过执行 `catchErr` 函数来得到装饰器本身，错误信息就传递进去了。