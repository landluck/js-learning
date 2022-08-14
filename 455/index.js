/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  if (!s.length) {
    return 0;
  }

  // 孩子
  g = g.sort((a, b) => b - a);
  // 饼干
  s = s.sort((a, b) => b - a);

  let res = 0;

  // 有饼干 和 小孩的情况
  while (s.length && g.length) {
    // 目前来说最大的饼干
    const bigS = s[0];

    // 目前来说最大的孩子
    const bigG = g.shift();

    // 最大的饼干满足最大的孩子，那就分配给他，满足他
    if (bigG <= bigS) {
      s.shift();
      res++;
    }
  }

//   console.log(res);

  return res;
};

// findContentChildren([1,2,3], [1,1])
findContentChildren([1, 2], [1, 2, 3]);
