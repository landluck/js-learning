const obj = {
  name: 'LiLei'
}

function sayMoney(num, unit) {
  const out = 'i‘am ' + this.name + ', i have ' + num  + ' ' + unit;
  // console.log(out)
  return out;
}

function _bind(func) {
  if (typeof func !== 'function') {
    throw new TypeError('_call first arguments must be function');
  }

  return function (ctx, ...args) {
    const safeCtx = !ctx || typeof ctx !== 'object' ? globalThis : ctx; 

    return function bindFunction (...bindArgs) {
      const symbolKey = Symbol.for('key');

      safeCtx[symbolKey] = func;

      const result = safeCtx[symbolKey](...args.concat(bindArgs));

      delete safeCtx.__tempFunc;

      return result;
    };
  }
}


// console.log(_apply(sayMoney)(1, ['元']) === sayMoney.apply(1, ['元']))
// console.log(_apply(sayMoney)(obj, [1, '元']) === sayMoney.apply(obj, [1, '元']))


const test = sayMoney.bind(obj, 1);
const _test = _bind(sayMoney)(obj, 1)
const test2 = sayMoney.bind(obj);
const _test2 = _bind(sayMoney)(obj)

console.log(test(2, '元') === _test(2, '元'))
console.log(test2(2, '元') === _test2(2, '元'))
// console.log(test2(2))