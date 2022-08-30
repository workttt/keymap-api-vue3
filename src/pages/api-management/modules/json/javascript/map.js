export default {
  subtitle: 'Map',
  desc: '—— Objects 和 Maps 类似, 过去我们一直都把对象当成 Maps 使用。<br>—— Array.from()转换成数组。JSON 直接支持 Object，但不支持 Map',
  types: [
    {
      title: '属性和静态方法',
      list: [
        {
          key: '.size',
          caption: '返回条目数量.   xxx.size',
        },
        {
          key: 'Map()',
          caption: '创建一个新的 Map 对象。 new Map()',
        },
      ],
    },
    {
      title: 'Map.prototype.xxx  实例的方法',
      list: [
        {
          key: '* set( key, value )',
          caption: '在Map对象尾部添加一个元素。返回该Map对象。',
        },
        {
          key: 'get( value )',
          caption: '返回键对应的值，如果不存在，则返回undefined。',
        },
        {
          key: 'clear()',
          caption: '移除Map对象内的所有元素。',
        },
        {
          key: 'delete( value )',
          caption:
            '如果 Map 对象中存在该元素，则移除它并返回 true；否则如果该元素不存在则返回 false。随后调用 Map.prototype.has(key) 将返回 false 。',
        },
        {
          key: '* has(value)',
          caption: '返回一个布尔值，表示Map实例是否包含键对应的值。',
        },
        {
          key: 'entries()',
          caption:
            '返回一个新的迭代器对象，该对象包含Map对象中的按插入顺序排列的所有元素的值的[value, value]数组。为了使这个方法和Map对象保持相似， 每个值的键和值相等。',
        },
        {
          key: '* forEach( callbackFn [, thisArg] ) <br>    callbackFn( value, key, map )',
          caption: '按插入顺序，为 Map对象里的每一键值对调用一次callbackFn函数。如果为forEach提供了thisArg，它将在每次回调中作为this值。',
        },
        {
          key: 'keys()',
          caption: '与values()方法相同，返回一个新的迭代器对象，该对象包含Map对象中的按插入顺序排列的所有元素的值。',
        },
        {
          key: 'values()',
          caption: '返回一个新的迭代器对象，该对象包含Map对象中的按插入顺序排列的所有元素的值。',
        },
        {
          key: '',
          caption: [``],
        },
      ],
    },
  ],
}
