class Person {
  constructor(age) {
    this.age = age;
  }
}

class Man extends Person {
  constructor(age) {
    super(age);
    this.sex = 1;
  }
}

const man = new Man(10);


function Man2 () {}


// 1. 首先，Man 函数是一个构建函数，其具有 prototype 做为其实例的原型对象
// 2. Man 做为一个函数，其是函数 Function 的实例对象， 其也具有 __proto__ 指向其原型对象，即 Function.prototype

// so

// console.log(man.__proto__ === Man.prototype);
// console.log(man.constructor === Man.prototype.constructor);
// // console.log(Man.__proto__ === Person.prototype);
// console.log(Man2.__proto__ === Function.prototype);
// console.log(Function.__proto__ === Function.prototype)

console.log(Man.__proto__ === Person)
console.log(Man.prototype.__proto__ === Person.prototype)


// 1. 什么是构造函数。构建函数是用来创建具有共性能力对象的普通函数
function A(age) {
  this.age = age
}

// 2. 如何用来创建对象，可以通过 new 关键字，那么 new 做了什么事情，后面在讲
const a = new A();

// 3. 那么函数和对象有什么区别吗，在 JS 中一切皆对象，函数也是对象，为什么这么说呢，构建是用来创建对象（实例）的模版，所以对象应该具有构建函数，函数是否也具有构建函数呢？答案是有的，所以函数也是对象，也具有构造函数
// 示例
function A () {};
const b = new A();
b.constructor === A;
A.constructor === Function;
Function.constructor === Function;

// 总结，在 js 中，一切皆对象，普通函数的构建函数是 Function，Function 的构建函数是自己，普通函数和Function 函数都是对象


// 4. 继续来讲 constructor 的关系如下，a.constructor === A ---> A.constructor === Function ---> Function.constructor === Function;
// 那么问题来了，构造函数可以用来创建 N 个对象，问 N 个对象上都固定有一个属性叫 constructor 指向其构造函数吗，那是否会造成内存浪费，因为 constructor 所有的内容都一样，我们做个测试

const b1 = new A(2);
const b2 = new A();

// 这里预期是 true
b1.constructor === b2.constructor;

// 所以所有对象的 constructor 是同一个，是一个引用对象，我们尝试修改一下 b1.constructor = function B() {}, 发现变了，所以b1丢掉了其真正的构造函数吗？

// 5. prototype 属性，是 构造函数用来保存其公用属性、逻辑的对象，供每个实例动向，解决上面内存问题及可能被修改问题，所以 prototype 只有构造函数拥有，对象是没有的

A.prototype.constructor === A;
A.prototype.test = function () {};

// 6. 上面构造函数引入了新的key prototype 用来保存实例共享的构造函数以及属性，在 constructor 可以被修改时，对象应该如何找到自己的构造函数的 prototype ？如何找到自己的 constructor
// 引入了新的 key ，__proto__，用来关联实例和构造函数

a.__proto__ === A.prototype;
a.__proto__.constructor === A;
a.__proto__.constructor === A.prototype.constructor;

// 7. 所以，在这种情况下，就形成了多条链

a.__proto__  === A.prototype;
A.__proto__ === Function.prototype;
Function.__proto__ === Function.prototype;

// 而 prototype 属性其实也是一个普通对象，其也具有 __proto 属性，所以有如下关系

a.__proto__ === A.prototype;
// 这里讲 prototype 是一个普通对象，所以其构造函数式 Object
A.prototype.__proto__ === Object.prototype;
// Object.prototype 按理来说也是一个普通对象，其构建函式应该时 Object, 所以其指向应该是
Object.prototype.__proto__ === Object.prototype;
// 但这种情况就死循环了，所以为了中断跳转所以 Object.prototype.__proto__ 为 null;
// 注意：这里就行了了一条链，如下

a.__proto__ === A.prototype; A.prototype.__proto__ === Object.prototype; Object.prototype.__proto__ === null;

// 然后，当去 a 上面找一个方法 test 时。有如下步骤
// 1. a 说我没有，你去我的原型对象 A.prototype 上找
// 2. A.prototype 说我也没有，你去我的原型对象上找, 即 Object.prototype
// 3. Object.prototype 说我也没有，我自己是 null，那就给你返回 undefined;


// 8. 所以我再来看，new 关键字应该做了什么事情
// 1. 创建一个空对象
// 2. 把给对象一个 __proto 属性指向构造函数的 prototype 属性
// 3. 执行构造函数 （传入 new 时的参数），把构造函数的初始属性进行初始化，同时绑定 this


function _new (Ctor) {
  if (typeof Ctor !== 'function' || !Ctor.prototype) {
    throw TypeError('new function first argument must be normal function')
  }
  
  return function _innerNew() {
    const instance = {
      __proto__: Ctor.prototype,
    }

    const result =  Ctor.apply(instance, arguments);

    if (!result || typeof result !== 'object') {
      return instance;
    }

    _new.target === Ctor;

    return result;
  }
}


const aa = _new(A)(10);
console.log(aa)