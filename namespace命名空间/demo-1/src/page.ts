// 使用 namespace（命名空间）只暴露一个全局变量
namespace Home {
  class Header {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'This is Header';
      document.body.appendChild(elem);
    }
  }

  class Content {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'This is Content';
      document.body.appendChild(elem);
    }
  }

  class Footer {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'This is Footer';
      document.body.appendChild(elem);
    }
  }

  // 需要导出的使用 export 导出
  export class Page {
    constructor() {
      new Header();
      new Content();
      new Footer();
    }
  }
}
