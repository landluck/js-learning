### instanceof

#### 解释：instanceof 的原理是被检查目标的原型链上是否出现检查目标的构造函数
#### 适用场景：检查引用数据类型 Array、Object 等


```javascript

  function compateInstanceOf(left, right) {
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

```