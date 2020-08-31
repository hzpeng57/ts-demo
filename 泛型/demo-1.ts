// 泛型 generic 泛指的类型

// 参数 first 和 second 类型必须为 T（type） 类型，但是不确定是什么类型，需要在调用时确定
// 但是 first 和 second 的类型是相同的，比如，都为 string 或者都为 number 等
function join<T>(first: T, second: T) {
  return `${first}${second}`;
}

// 这里规定T为 string 类型，所以 join 的两个参数都必须传 string
join<string>('1', '1');

// or

join<number>(1, 1);

// ========================================================

// 参数要求是 类型为 T 组成的数组 T[]
function map<T>(params: Array<T>) {
  return params;
}

// 这里定义 T 为 string
// 所以这里要传string组成的数组
map<string>(['a', 'b', 'c']);

// ========================================================

// 可以定义多个泛型
function joinSecond<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

joinSecond<number, string>(1, '1');

// or
// 不定义类型，typescript可以自动推断出参数类型
joinSecond(1, '1');

// ========================================================

// 泛型也能用于函数返回结果
function joinThird<T, P>(first: T, second: P): T {
  return first;
}
