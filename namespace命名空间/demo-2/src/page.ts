// 使用 namespace（命名空间）只暴露一个全局变量
// 下面一行 说明命名空间相互之间的引用关系
///<reference path='./components.ts'/>
namespace Home {
  // 需要导出的使用 export 导出
  export class Page {
    user: Components.User = {
      name: 'hzp',
    };
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
  }
}
