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
