// 1. 原型链继承
// function Person() {
//   this.box = [1, 2];
// }

// Person.prototype.say = function() {
//   console.log(this.box.toString());
// }

// function Man () {
//   this.sex = 1;
// }

// Man.prototype = new Person();

// var man1 = new Man();
// var man2 = new Man();

// man1.box.push(3);

// man1.say();
// man2.say();

// man.__proto === Man.prototype === new Person().age;

// console.log(man.sex);
// console.log(man.age)
// console.log(man.say())

// 缺点：继承来的引用属性实例间会影响

// 2. 构造函数继承

// function Person() {
//   this.box = [1, 2];
// }

// Person.prototype.say = function() {
//   console.log(this.box.toString());
// }

// function Man() {
//   Person.call(this)
// }

// var man1 = new Man();
// var man2 = new Man();

// man1.box.push(3);

// console.log(man1.box)
// console.log(man2.box)
// man2.say();

// 缺点：1. 只能继承属性和方法，原型方法和属性无法继承 2. 父类实例在每一个子类里都存在一个副本，影响影响较大

// 3. 组合继承

// function Person() {
//   this.box = [1, 2];
// }

// Person.prototype.say = function() {
//   console.log(this.box.toString());
// }

// function Man() {
//   Person.call(this)
// }

// Man.prototype = new Person();

// var man1 = new Man();
// var man2 = new Man();

// man1.box.push(3);

// console.log(man1.box)
// console.log(man2.box)
// man2.say();

// 缺点：继承时其实首先将父类的属性和方法复制一份给子类，然后在给子类的原型上复制一份，有2次创建 父类，同时子类的原型上存在 2 份同样的属性方法

// 4. 寄生组合继承
// function Person() {
//   this.box = [1, 2];
// }

// Person.prototype.say = function() {
//   console.log(this.box.toString());
// }

// function Man() {
//   Person.call(this)
// }

// Man.prototype = Object.create(Person.prototype, {
//    constructor: {
//     value: Man,
//    }
// })

// var man1 = new Man();
// var man2 = new Man();

// man1.box.push(3);

// console.log(man1.box)
// console.log(man2.box)
// man2.say();

// 5. class es6 编译 es5

// class Person {
//   constructor(sex, age) {
//     this.age = age;
//     this.sex = sex;
//   }

//   say()  {
//     console.log(this.age, this.sex)
//   }
// }

// class Man extends Person {
//   constructor(age) {
//     super(1, age);
//   }
// }

// function createClass(Ctor) {

// }

function createClass(Constructor, prototypeProps = {}, staticProps = {}) {
  Object.defineProperties(Constructor, "prototype", { writable: true });

  for (const key in prototypeProps) {
    Object.defineProperties(Constructor.prototype, key, {
      value: prototypeProps[key],
      enumerable: false,
    });
  }

  for (const key in staticProps) {
    Object.defineProperties(Constructor, key, {
      value: staticProps[key],
      enumerable: false,
    });
  }

  return Constructor;
}

function extendClass(subClass, superClass) {
  
  
}

const Person = createClass(
  function Person(sex, age) {
    this.age = age;
    this.sex = sex;
  },
  {
    say() {
      console.log(this.age, this.sex);
    },
  }
);

const Man = (function (_Person) {

  function Man(age) {
    _Person.call(this, 1, age);
  }

  extendClass(Man, _Person);

  return createClass(Man);
})(Person);

function Person(sex, age) {
  this.age = age;
  this.sex = sex;
}

Person.prototype.say = function say() {
  console.log(this.age, this.sex);
};

function Man(age) {
  Person.call(this, 1, age);
}

// const desc = Object.getOwnPropertyDescriptor({}, 'a');

// desc.configurable

Man.prototype = Object.create(Person.prototype, {
  constructor: {
    value: Man,
    writable: true,
    enumerable: false,
    configurable: true,
  },
});

const man = new Man(10);
console.log(man.age);
console.log(man.sex);
man.say();
