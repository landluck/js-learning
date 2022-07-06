const data = {
  a_b_c: {
    a_b: "1212",
    b_c: [1, 2, { a_f: 121 }],
  },
  c_d_f: [1, { a_f: 121 }],
  a_o: 1212,
};

function camelCase(data) {
  const string = JSON.stringify(data);

  const final = string.replace(/_(\w)/g, (str, letter) => letter.toUpperCase());

  return JSON.parse(final);
}

function camelCaseKey(key) {
  return key.replace(/_(\w)/g, (str, letter) => letter.toUpperCase());
}

function camelCaseKey2(key) {
  const [first, ...others] = key.split('_');
  
  return [first, ...others.map(v => v.toUpperCase())].join('');
}

function isReference(value) {
  return Array.isArray(value) || Object.prototype.toString.call(value) === "[object Object]";
}

function camelCase2(data) {
  const isArray = Array.isArray(data);

  if (!isReference(data)) {
    return data;
  }

  if (isArray) {
    return data.map(value => camelCase2(value));
  }

  return Object.keys(data).reduce((final, key) => {
    final[camelCaseKey2(key)] = camelCase2(data[key])
    return final;
  }, {})
}

console.time('test')
// console.log(camelCase2(data))
for (let index = 0; index < 100000; index++) {
  camelCase2(data)
}
console.timeEnd('test')
