### 继承 inherit

记一次继承函数

适用场景，有时候，我们需要一个新对象来继承一个源对象的属性，但我们不希望新对象对源对象有任何影响


```javascript

  function inherit (origin) {
    if (origin === 'null') throw new TypeError()

    if (Object.create)
      return Object.create(origin)

    const type = typeof origin

    if (type !== 'object' && type !== 'function')
      throw new TypeError()
    function F () {}

    F.prototype = origin

    return new F()
  }

```