##### 1、 `interface`和`type`类似，区别：`interface`定义对象形式，不可以定义变量形式，`type`可以，能用`interface`尽量用`interface`。

##### 2、 `interface`定义

```typescript
interface Person {
    // readonly name: string;   // 只读
    name: string;
    age?: number;               // 可以为空
    [propName: string]: any;    // 其他属性
    say(): string;              // 函数 返回string
}
```

##### 3、 `interface`可以继承别的`interface`，继承接口拥有被继承接口的全部属性

```typescript
interface Teacher extends Person {
    teach(): string;
}
```

##### 4、 `interface`可以直接定义方法

```typescript
interface SayHi {
    (word: string): string;   // 接受word(string类型)参数，返回string
}

// 使用
const say: SayHi = (word: string) => {
  return word;
};
```

##### 5、 类`class`可以直接应用接口

```typescript
class User implements Person {
    name = 'dell';
    say() {
        return 'hello';
    }
}
```

##### 6、传参

```typescript
interface Person {
    name: string;
}

const outPutPerson = (person: Person) => {
  return person.name;
};

// 这样传参会报错，interface里面没有age属性
outPutPerson({
    name: 'Tom',
    age: 30
});

const teacher = {
    name: 'Tom',
    age: 30
}

outPutPerson(teacher); // 这样是正确的
```
