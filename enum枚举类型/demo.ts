enum Status {
  OFFLINE,
  ONLINE,
  DELETED,
}

function getResult(status: string | number) {
  if (status === Status.OFFLINE) {
    return 'offline';
  } else if (status === Status.ONLINE) {
    return 'online';
  } else if (status === Status.DELETED) {
    return 'deleted';
  }
  return 'error';
}

console.log(getResult(1)); // online
console.log(getResult(0)); // offline

// console.log(Status);
// {
//   '0': 'OFFLINE',
//   '1': 'ONLINE',
//   '2': 'DELETED',
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2
// }

/** // enum枚举类型默认从0开始，也能手动设置初始值，如下  **/
enum StatusSecond {
  OFFLINE,
  ONLINE = 3,
  DELETED,
}
// console.log(StatusSecond);
// {
//   '0': 'OFFLINE',
//   '3': 'ONLINE',
//   '4': 'DELETED',
//   OFFLINE: 0,
//   ONLINE: 3,
//   DELETED: 4
// }
