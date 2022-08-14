function accAdd(arg1, arg2) {
  var r1, r2, m, c;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  c = Math.abs(r1 - r2);
  m = Math.pow(10, Math.max(r1, r2));
  if (c > 0) {
    var cm = Math.pow(10, c);
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace(".", ""));
      arg2 = Number(arg2.toString().replace(".", "")) * cm;
    } else {
      arg1 = Number(arg1.toString().replace(".", "")) * cm;
      arg2 = Number(arg2.toString().replace(".", ""));
    }
  } else {
    arg1 = Number(arg1.toString().replace(".", ""));
    arg2 = Number(arg2.toString().replace(".", ""));
  }
  return (arg1 + arg2) / m;
}

// console.log(accAdd(1.01, 4.2))


function getDecimalLength(num) {
  if (Number.isInteger(num)) {
    return 0;
  }

  const [_, decimal] = num.toString().split('.');

  return decimal ? decimal.length : 0;
}


function toInteger(num) {
  return  Number(num.toString().replace('.', ''));
}


function add(n1, n2) {
  const l1 = getDecimalLength(n1);
  const l2 = getDecimalLength(n2);

  if (l1 === 0 && l2 === 0) {
    return n1 + n2;
  }

  // 小数位数的绝对差值
  const diffValue = Math.abs(l1 - l2);
  // 数字应该放大的倍数
  const mulriple = Math.pow(10, Math.max(l1, l2));


  // 同样的倍数
  if (diffValue === 0) {
    // 放大至整数
    n1 = toInteger(n1);
    n2 = toInteger(n2)
  } else {
    // 说明 n1 的小数位比 n2 多，这个时候转为字符串后相当于 n1 比 n2 扩大了 l1 - l2 倍
    // 需要将 n2 同比扩大
    const val = Math.pow(10, diffValue);

    if (l1 > l2) {
      n1 = toInteger(n1);
      n2 = toInteger(n2) * val;
    } else {
      n1 = toInteger(n1) * val;
      n2 = toInteger(n2)
    }
  }

  // 相乘后缩小至原来的倍数
  return (n1 + n2) / mulriple;
}

// console.log(add(0.1, 0.2));
// console.log(add(1, 2));
// console.log(add(0.01, 0.1));
// console.log(add(0.01, 1));


function sub(n1, n2) {
  const l1 = getDecimalLength(n1);
  const l2 = getDecimalLength(n2);

  if (l1 === 0 && l2 === 0) {
    return n1 - n2;
  }

  // 数字应该放大的倍数
  const mulriple = Math.pow(10, Math.max(l1, l2));

  // 相乘后缩小至原来的倍数
  return ((n1 * mulriple - n2 * mulriple) / mulriple).toFixed(Math.max(l1, l2));
}

// console.log(sub(0.3, 0.1))
// console.log(sub(1, 3))
// console.log(sub(3, 0.5))
// console.log(sub(3, 0.05))


function mul(n1, n2) {
  const l1 = getDecimalLength(n1);
  const l2 = getDecimalLength(n2);

  if (l1 === 0 && l2 === 0) {
    return n1 * n2;
  }


  return (toInteger(n1) * toInteger(n2)) / Math.pow(10, l1 + l2);
}


function div(n1, n2) {
  const l1 = getDecimalLength(n1);
  const l2 = getDecimalLength(n2);

  if (l1 === 0 && l2 === 0) {
    return n1 / n2;
  }


  return (toInteger(n1) / toInteger(n2)) * Math.pow(10, l2 - l1);
}

console.log(div(1, 2))
console.log(div(0.1, 0.2))