function inherit (obj) {
  if (obj === 'null') throw new TypeError()
  if (Object.create) return Object.create(obj)
  if (typeof obj !== 'object' || typeof obj !== 'function') throw new TypeError()
  function F() {}
  F.prototype = obj
  return new F()
}