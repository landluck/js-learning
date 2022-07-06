function Person (age) {
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log('hello')
}

function isReference(value) {
  if (!value) {
    return false;
  }

  const types = ['number', 'string', 'function', 'symbol'];
  const type = typeof value;

  return types.indexOf(type) === -1;
}


function _new(Ctor) {
  return function _new() {
    // const instance = {
    //   __proto__: Ctor.prototype,
    // }

    // const instance = Object.create(Ctor.prototype);


    const instance =  Object.setPrototypeOf({}, Ctor.prototype)

    const result = Ctor.apply(instance, arguments);

    return isReference(result) ? result : instance;
  }
}

const man = _new(Person)(12);

console.log(man)
man.sayHello();
// const old = new Person(3);

// console.log(old)