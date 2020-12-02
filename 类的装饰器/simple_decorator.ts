// 类的装饰器
// 装饰器本身是一个函数
// 类装饰器接收的参数是构造函数
// 装饰器通过 @ 符号来使用
// 装饰器只在创建类之后，执行一次

// function testDecortor(flag: boolean) {
//   if (flag) {
//     return function (constructor: any) {
//       constructor.prototype.getName = () => {
//         console.log('dell');
//       };
//       console.log('decortor');
//     };
//   } else {
//     return function (constructor: any) {};
//   }
// }

// @testDecortor(false)
// class Test {}

// const test = new Test();
// (test as any).getName();
