export default {
  subtitle: 'Set',
  desc: ' —— Array.from()转换成数组',
  types: [
    {
      title: '属性和静态方法',
      list: [
        {
          key: '.size',
          caption: '重点----返回 Set 对象中的值的个数.   xxx.size',
        },
        {
          key: 'Set()',
          caption: '创建一个新的Set对象。 new Set()',
        },
        {
          key: 'get Set',
          caption: '构造函数用来创建派生对象. -- 暂时用不到',
        },
      ],
    },
    {
      title: 'Set.prototype.xxx  实例的方法',
      list: [
        {
          key: 'add( value )',
          caption: '在Set对象尾部添加一个元素。返回该Set对象。',
        },
        {
          key: 'clear()',
          caption: '移除Set对象内的所有元素。',
        },
        {
          key: 'delete( value )',
          caption: '移除Set中与这个值相等的元素，返回Set.prototype.has(value)在这个操作前会返回的值（即如果该元素存在，返回true，否则返回false）。Set.prototype.has(value)在此后会返回false。',
        },
        {
          key: 'has(value)',
          caption: '返回一个布尔值，表示该值在Set中存在与否。',
        },
        {
          key: 'entries()',
          caption: '返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值的[value, value]数组。为了使这个方法和Map对象保持相似， 每个值的键和值相等。',
        },
        {
          key: 'forEach( callbackFn [, thisArg] )',
          caption: '按照插入顺序，为Set对象中的每一个值调用一次callBackFn。如果提供了thisArg参数，回调中的this会是这个参数。',
        },

        {
          key: 'keys()',
          caption: '与values()方法相同，返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。',
        },
        {
          key: 'values()',
          caption: '返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。',
        },

        {
          key: '',
          caption: '',
        },
      ],
    },
  ],
}
