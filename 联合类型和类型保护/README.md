### 类型保护

**1、类型断言的方式**

```
interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}


// 类型断言的方式
function trainAnial(animal: Bird | Dog) {   // 使用 | 就是联合类型
  if (animal.fly) {
    // animal.sing();           // 错误 因为typescript不知道animal是否有sing方法
    (animal as Bird).sing();    // 正确 使用类型断言
  } else {
    (animal as Dog).bark();
  }
}

```

**2、in 语法做类型保护**

```
interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}


function trainAnialSecond(animal: Bird | Dog) {
  if ('sing' in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}

```

**3、typeof 方式**

```
function add(first: string | number, second: string | number) {
    return first + second;  // 错误 string不能使用 + 操作符
}

// 正确
function add(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`;
  }
  return first + second;
}

```

**4、instanceof 方式**

```
class NumberObj {
  count: number;
}


// 错误
function addSecond(first: object | NumberObj, second: object | NumberObj) {
 return first.count + second.count; // count不一定存在，因为first和second可能是NumberObj或者其他对象
}

// 正确
function addSecond(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}

```
