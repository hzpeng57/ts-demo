// 类中的泛型
interface Item {
  name: string;
}

class DataManager<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name;
  }
}

const data = new DataManager([
  {
    name: 'hzp',
  },
]);

/* =============================== */

class DataManager1<T extends number | string> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}

const data1 = new DataManager1<number>([1]);
const data2 = new DataManager1<string>(['1']);

/* =============================== */

// 使用泛型当做具体的类型注解
function hello<T>(params: T) {
  return params;
}

const func: <T>(param: T) => T = hello;
