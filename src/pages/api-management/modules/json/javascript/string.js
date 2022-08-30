// <span class='hight'></span>
export default {
  subtitle: 'String',
  desc: '',
  types: [
    {
      title: '属性和静态方法',
      list: [
        {
          key: '.length',
          caption: '实例属性, 返回或设置一个数组中的元素个数。直接改变长度可以扩展/截断数组',
        },
      ],
    },
    {
      title: 'String.prototype.xxx  实例的方法',
      list: [
        {
          key: 'concat( any... )',
          caption: ['合并多个字符串, 形成一个新的字符串并返回', '实际应用：移动端项目列表页面拼接拿到的每一页分页数据'],
        },
        {
          key: '* split( 分隔符 )',
          caption: '返回数组, 按分隔符(子字符串) <span class=\'hight\'>分割String成数组</span> ',
        },
        {
          key: '* substring( indexStart [,indexEnd] )',
          caption: ['返回一个字符串, 开始索引 到 结束索引 之间 的一个子集', '或从开始索引直到字符串的末尾的一个子集。', '传入的参数，哪个大方向就从小的往大的那边走', '如果 indexStart 等于 indexEnd，substring 返回一个空字符串', '如果省略 indexEnd，substring 提取字符一直到字符串末尾', '如果任一参数小于 0 或为 NaN，则被当作 0', '如果任一参数大于 stringName.length，则被当作 stringName.length'],
        },
        {
          key: '* slice( beginIndex [,endIndex] )',
          caption: [
            '提取某个字符串的一部分，并<span class=\'hight\'>返回新的字符串</span>，且不会改动原字符串。',
            '如果省略endIndex参数，slice() 会一直提取到字符串末尾。',
          ],
        },
        {
          key: '* replace()',
          caption: '替换字符串内容, 返回一个替换后的字符串',
        },
        {
          key: 'startsWith()',
          caption: '',
        },
        {
          key: 'endsWith()',
          caption: '判断当前字符串是否是以另外一个给定的子字符串“结尾”的，返回 true 或 false。',
        },
        {
          key: 'search()',
          caption: '对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标。',
        },
        {
          key: '* includes(str)',
          caption: '判断是否包含字符串str，返回 true 或 false。',
        },
        {
          key: 'indexOf(str, 查询始位)',
          caption: 'str第一次出现的指定值的索引',
        },
        {
          key: 'lastIndexOf(str, 查询始位)',
          caption: 'str最后出现的指定值的索引',
        },
        {
          key: 'repeat( count )',
          caption: '表示在新构造的字符串中重复了 count 遍 原字符串, 返回重复数次后的字符串',
        },
        {
          key: 'padStart()  padEnd()',
          caption: '在当前字符串头部/尾部填充指定的字符串，直到达到指定的长度。 返回新的字符串',
        },
        {
          key: '大小写转换',
          caption: 'toLocaleUpperCase(),  toLocaleLowerCase(),  toLowerCase()  大写,  小写,  小写',
        },
        {
          key: 'trim(), trimRight(), trimStart()',
          caption: '去掉空格',
        },
        {
          key: '',
          caption: [``],
        },
      ],
    },
  ],
}
