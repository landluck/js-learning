const obj = {
  name: 'LiLei'
}

function sayMoney(num, unit) {
  const out = 'hello I‘am is ' + this.age + ' years old';
  // console.log(out)
  return out;
}

function _apply(func) {
  if (typeof func !== 'function') {
    throw new TypeError('_call first arguments must be function');
  }

  return function (ctx, args) {
    const safeCtx = !ctx || typeof ctx !== 'object' ? globalThis : ctx; 

    const symbolKey = Symbol.for('key');

    safeCtx[symbolKey] = func;

    const result = safeCtx[symbolKey](...args);

    delete safeCtx.__tempFunc;

    return result;
  }
}


// console.log(_call(Person.prototype.sayAge)(boy));
// console.log(_call(Person.prototype.sayAge)(null));

console.log(_apply(sayMoney)(1, ['元']) === sayMoney.apply(1, ['元']))
console.log(_apply(sayMoney)(obj, [1, '元']) === sayMoney.apply(obj, [1, '元']))
