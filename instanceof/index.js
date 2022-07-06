function compatInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  const finalProto = right.prototype;

  while (true) {
    if (!proto) {
      return false;
    }

    if (proto === finalProto) {
      return true;
    }

    proto = Object.getPrototypeOf(proto);
  }
}

function compateInstanceOf(left, right) {
  if (typeof left !== "object") {
    return false;
  }

  let prototype = Object.getPrototypeOf(left);
  const finalProtoType = right.prototype;

  while (prototype) {
    if (prototype === finalProtoType) {
      return true;
    }

    prototype = Object.getPrototypeOf(prototype);
  }

  return false;
}
console.log(compateInstanceOf([], Array));

console.log(compateInstanceOf(2, Number));
console.log(compateInstanceOf([], Number));
console.log(compateInstanceOf(2, Number));
