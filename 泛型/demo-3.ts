interface Person {
  name: string;
  age: number;
  gender: string;
}

class Teacher {
  constructor(private info: Person) {}
  // 相当于循环 Person T 只能是 Person 包含的（name、age、gender）
  // 返回结果也是 Person 对应的键的值
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}

const teacher = new Teacher({
  name: 'hzp',
  age: 18,
  gender: 'male',
});

const test = teacher.getInfo('name');
console.log(test);
