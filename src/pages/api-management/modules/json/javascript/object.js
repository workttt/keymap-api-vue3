export default {
  subtitle: 'Object',
  types: [
    {
      title: '属性和静态方法',
      list: [
        {
          key: '*Object.assign()',
          caption: '通过复制一个或多个对象来创建一个新的对象。',
        },
        {
          key: '*Object.keys()',
          caption: '返回一个包含所有给定对象自身可枚举属性名称的数组。',
        },
        {
          key: 'Object.create()',
          caption: '使用指定的原型对象和属性创建一个新对象。',
        },
        {
          key: '*Object.defineProperty()',
          caption: ['给对象添加一个属性并指定该属性的配置。', `vue2的双向绑定原理`],
        },
        {
          key: 'Object.freeze()',
          caption: '冻结对象：其他代码不能删除或更改任何属性。',
        },
        {
          key: 'Object.entries()',
          caption: [
            `const object1 = { a: 'aa', b: 42 };`,
            `for (const [key, value] of Object.entries(object1))`,
            `类似for-in, 但是for-in循环还会枚举原型链中的属性`,
          ]
        },
        {
          key: 'Object.getOwnPropertyDescriptor()',
          caption: '返回对象指定的属性配置。',
        },
        {
          key: 'Object.getOwnPropertyNames()',
          caption: '返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。',
        },
        {
          key: '',
          caption: [``],
        },
      ],
    },
    {
      title: 'Object.prototype.xxx  实例属性',
      list: [
        {
          key: 'Object.prototype.constructor',
          caption: '指定创建对象原型的函数。',
        },
        {
          key: 'Object.prototype.__proto__',
          caption: [
            `指向在实例化对象时用作原型的对象。`,
            `部分浏览器是[[proto]]`,
          ]
        },
      ],
    },
    {
      title: 'Object.prototype.xxx  实例的方法',
      list: [
        {
          key: '* hasOwnProperty() ',
          caption: [
            '方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）',
            '建议用法：Object.prototype.hasOwnProperty.call(res.data, "shareButton")',
            'https://eslint.bootcss.com/docs/rules/no-prototype-builtins'
          ],
        },
        {
          key: 'isPrototypeOf()',
          caption: '返回一个布尔值，指示调用此方法的对象是否在指定对象的原型链中。',
        },
        {
          key: '',
          caption: [``],
        },
      ],
    },
  ],
}
