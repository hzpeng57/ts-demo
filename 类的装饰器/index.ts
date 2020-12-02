// 放在namespace中，防止全局变量冲突，可忽略
namespace a {
  function testDecortor() {
    return function <T extends new (...args: any[]) => any>(constructor: T) {
      return class extends constructor {
        name = 'zhenpeng';
        getName() {
          return this.name;
        }
      };
    };
  }
  
  const Test = testDecortor()(
    class Test {
      name: string;
      constructor(name: string) {
        this.name = name;
      }
    }
  );
  
  const test = new Test('huang');
  console.log(test.getName()); // zhenpeng
}