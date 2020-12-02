const userInfo: any = undefined;

function catchErr(msg: string) {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function () {
      try {
        fn();
      } catch (e) {
        console.log(`${msg} 有问题`);
      }
    };
  };
}

class Test {
  @catchErr('userInfo.name')
  getName() {
    console.log(userInfo.name);
  }
  @catchErr('userInfo.age')
  getAge() {
    console.log(userInfo.age);
  }
}

let test = new Test();
test.getName();
test.getAge();
