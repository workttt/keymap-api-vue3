export default {
  subtitle: 'Number',
  types: [
    {
      title: '属性和静态方法',
      list: [
        {
          key: 'Number()',
          caption: 'new Number( [str] )',
        },
        {
          key: 'Number.parseFloat( flag )',
          caption: '可以把一个字符串解析成浮点数。该方法与全局的 parseFloat() 函数相同。',
        },
        {
          key: 'Number.parseInt( string[, radix] )',
          caption: '方法依据指定基数 [ 参数 radix 的值]，把参数 string 解析成整数。radix默认是10',
        },
        {
          key: 'Number.isInteger( flag )',
          caption: '判断flag是不是整数。',
        },
        {
          key: 'Number.isSafeInteger( flag )',
          caption: '判断 安全整数 js的整数取值范围。',
        },
        {
          key: 'Number.isNaN()',
          caption: '确定传递的值是否是 NaN。',
        },
        {
          key: 'Number.isFinite()',
          caption: '确定传递的值类型及本身是否是有限数。',
        },
      ],
    },
    {
      title: 'Number.prototype.xxx  实例的方法',
      list: [
        {
          key: 'toFixed( digits )',
          caption: [
            '方法使用定点表示法来格式化一个数值。返回的是字符串。',
            '小数点后数字的个数；介于 0 到 20 （包括）之间，实现环境可能支持更大范围。如果忽略该参数，则默认为 0。',
            '四舍六入五看情况',
          ],
        },
        {
          key: 'toPrecision( digits )',
          caption: '方法以指定的精度返回该数值对象的字符串表示。',
        },
        {
          key: '...',
          caption: '...',
        },
      ],
    },
  ],
}
