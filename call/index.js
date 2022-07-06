
function Person () {
  this.age = 10;
}

Person.prototype.sayAge = function say () {
  console.log('hello I‘am is ' + this.age + ' years old')
}

function Boy (age) {
  this.age = age;
}


const boy = new Boy(2);


const girl = {
  name: 'lilei'
}

function sayMoney(num, unit) {
  console.log('i‘am ' + this.name + ', i have ' + num  + ' ' + unit);
}

function _call(func) {
  if (typeof func !== 'function') {
    throw new TypeError('_call first arguments must be function');
  }

  return function (...args) {
    const [ctx, ...others] = args;

    const safeCtx = !ctx || typeof ctx !== 'object' ? globalThis : ctx; 

    const symbolKey = Symbol.for('key');

    safeCtx[symbolKey] = func;

    const result = safeCtx[symbolKey](...others);

    delete safeCtx.__tempFunc;

    return result;
  }
}


// console.log(_call(Person.prototype.sayAge)(boy));
// console.log(_call(Person.prototype.sayAge)(null));

console.log(_call(sayMoney)(1, '元'))

sayMoney.call(Symbol.for('121'), '元')