export default {
  subtitle: 'Math',
  desc: '  ——数学常数属性和数学函数方法。只有静态属性和方法',
  types: [
    {
      title: '属性和静态方法 Math.xxx',
      list: [
        {
          key: '* abs(x)',
          caption: '返回一个数的绝对值。',
        },
        {
          key: 'max(a, b, c ...)',
          caption: [
            `返回一组数中的最大值。  Math.max(-1, -3, -2); `,
            `Math.max.apply(null, numArray)`,
            `Math.max.call(this, numArray)`,
            `Math.max(...numArray)`,
          ],
        },
        {
          key: 'min()',
          caption: '返回零到多个数值中最小值。',
        },
        {
          key: '* random()',
          caption: '返回一个 0 到 1 之间的伪随机数。',
        },
        {
          key: 'round()',
          caption: '返回四舍五入后的整数。',
        },
        {
          key: 'trunc()',
          caption: '方法会将数字的小数部分去掉，只保留整数部分。',
        },
        {
          key: '* floor()',
          caption: [`返回小于或等于一个给定数字的最大整数。! 向下取整`, `Math.floor( 45.95); => 45`, `Math.floor(-45.05); => -46`],
        },
        {
          key: 'sign()',
          caption: '返回一个数的符号，得知一个数是正数、负数还是 0。',
        },
        {
          key: 'pow(base, exponent)',
          caption: ['函数返回基数（base）的指数（exponent）次幂，即 base **  exponent', '2 ** 7 === 128', 'Math.pow(2, 7) === 128'],
        },
        {
          key: '...',
        },
      ],
    },
  ],
}
