export default {
  subtitle: 'Array',
  desc: '',
  types: [
    {
      title: '属性和静态方法',
      list: [
        {
          key: 'Array.length',
          caption: '实例属性, 返回或设置一个数组中的元素个数。直接改变长度可以扩展/截断数组',
        },
        {
          key: 'Array.from()',
          caption: [
            '静态方法, 从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。',
            '参数: arrayLike[, mapFn[, thisArg]] ',
            'Map，Set类型转成Array',
          ],
        },
        {
          key: 'Array.isArray(obj)',
          caption: '静态方法, ',
        },
        {
          key: 'Array.of(element0[, elementN])',
          caption: '静态方法, 创建一个具有可变数量参数的新数组实例。',
        },
      ],
    },
    {
      title: '改变原数组 CURD ',
      list: [
        {
          key: 'shift()',
          caption: '头删, 从数组中删除第一个元素，并返回该元素的值。',
        },
        {
          key: 'unshift( i, ...)',
          caption: '头加, 将一个或多个元素添加到数组的开头，并返回该数组的新长度',
        },
        {
          key: 'pop()',
          caption: '尾删, 从数组中删除最后一个元素，并返回该元素的值。更改数组的长度',
        },
        {
          key: 'push( i, ...)',
          caption: '尾加, 将一个或多个元素添加到数组的末尾，并返回该数组的新长度',
        },
        {
          key: 'reverse()',
          caption: '将数组中元素的位置颠倒, 并返回该数组。',
        },
        {
          key: 'fill( value, start=0, end )',
          caption: '方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。',
        },
        {
          key: '* splice( index, num, item...)',
          caption: [
            '删除、替换、添加-修改了原数组, 并以数组形式返回被修改的内容(index开始的内容)。',
            `<span class='hight'>从下标index开始删除num个再替换成item</span>`,
          ],
        },
        {
          key: '',
          caption: '',
        },
      ],
    },
    {
      title: '不改变原数组 CURD ',
      list: [
        {
          key: '* slice( begin, end )',
          caption: ["返回浅copy数组，[begin, end)，截取<span class='hight'>从begin开始至end之前</span>。", '按照条件查找出其中的部分元素'],
        },
        {
          key: '* concat( any... )',
          caption: ['合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。', ' 使用拓展操作符(...)简化   [...arr, ...any] '],
        },
        {
          key: '* join( str )',
          caption: "返回 由数组的所有元素连接成的字符串。分隔符str不填默认','",
        },
        {
          key: 'copyWithin(target[, start[, end]])',
          caption: [
            '浅复制数组的一部分到同一数组中的另一个位置( [start, end) 不包含end )，并返回它，不会改变原数组的长度。',
            'target目标下标位置',
          ],
        },
        {
          key: 'keys()',
          caption: '大部分时候返回的是下标组成的数组',
        },
        {
          key: 'values()',
          caption: '大部分时候返回的是每个值组成的数组',
        },
      ],
    },
    {
      title: '* 查找',
      list: [
        {
          key: '* includes( value, fromIndex )',
          caption: '用来判断一个数组是否包含一个指定的值，如果包含则返回 true，否则返回false。',
        },
        {
          key: '* indexOf(key, 查询始位)',
          caption: '方法返回在数组中第一个值为key的索引，不存在返回-1。适用于基本类型组成的数组',
        },
        {
          key: 'lastIndexOf(key)',
          caption: '方法返回在数组中最后一个值为key的索引，不存在返回-1。',
        },
        {
          key: '* find( el => el > 10 )',
          caption:
            "方法返回数组中满足提供的<span class='hight'>测试函数</span>的第一个<span class='hight'>元素的值</span>。否则返回 undefine",
        },
        {
          key: '* findIndex(callback( element, index, array ) [, thisArg])',
          caption: "方法返回数组中满足提供的测试函数的第一个<span class='hight'>元素的索引</span>。若没有找到对应元素则返回-1。",
        },
        {
          key: 'at( index )',
          caption: '实验性方法, 返回数组对应下标的值.',
        },
        {
          key: '',
          caption: [``],
        },
      ],
    },
    {
      title: '迭代方法',
      list: [
        {
          key: 'forEach( fn(), thisArg )',
          caption: '对数组的每个元素执行一次提供的函数',
        },
        {
          key: '* sort( [ function ( firstEl, secondEl ) ] )',
          caption: '用原地算法对数组的元素进行排序，并返回数组。默认是元素按照转换为的字符串的各个字符的Unicode位点进行排序',
        },
        {
          key: 'every( fn(), thisArg )',
          caption: [
            `对数组中的每一项运行给定函数, 如果该数组中每一项都返回true, 则返回true`,
            `参数：function(item, idx, array) [, thisArg]`,
          ],
        },
        {
          key: 'some( fn(i, idx, arr), thisArg )',
          caption: '测试是否至少有一个元素可以通过被提供的函数方法。该方法返回一个Boolean类型的值。',
        },
        {
          key: 'reduce( fn(previousValue, currentValue, idx, array) [, initialValue] )',
          caption: [
            `方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。`,
            `若有initialValue (初始值), previousValue则为 initialValue, currentValue 则取数组中的第一个值, idx === 0`,
            `若无initialValue， previousValue === array[0], currentValue === array[1], idx === 1`,
            `<span class='hight'>previousValue</span>（前一次调用 callbackfn 得到的返回值）`,
            `currentIndex：数组中正在处理的元素的索引。`,
            `idx: Current Index(当前索引); array: Source Array(源数组);`,
            `求和; 计算数组中每个元素出现的次数; 将二维数组转化为一维; 按属性对 object 分类; 替换 .filter().map()`,
            `按顺序运行 Promise ;使用函数组合实现管道()`
          ],
        },
        {
          key: 'reduceRight( callback(accumulator, currentValue[, index[, array]])  [, initialValue] )',
          caption: [
            `和reduce遍历顺序相反, 从右往左, idx从大到小`,
            `reduceRight 为数组中每个元素调用一次 callback 回调函数，但是数组中被删除的索引或从未被赋值的索引会跳过。`,
            `callback ( 累加器(初始值/最后一个元素/上次调用回调的返回值）, 当前元素值, 当前索引, 以及调用迭代的当前数组。`,
            `initialValue可选`,
          ],
        },
      ],
    },
    {
      title: '迭代方法 - 返回新数组',
      list: [
        {
          key: '* map( fn(item, idx, arr), thisArg )',
          caption: '创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。',
        },
        {
          key: '* filter( fn(), thisArg )',
          caption: '创建一个新数组, 其包含通过所提供函数实现的测试的所有元素, 没有则返回[]',
        },
        {
          key: 'flat( depth = 1 )',
          caption: '扁平化嵌套, 去掉空元素, 返回一个新数组',
        },
        {
          key: 'flatMap()',
          caption: '方法首先使用映射函数 映射每个元素，然后将结果压缩成一个新数组。',
        },
        {
          key: 'entries() ',
          caption: [
            '方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。',
            `iterator1.next().value 和 iterator1.next()`,
            `{ value: undefined / [index, value]/ {}, done: true }`,
          ],
        },
      ],
    },
  ],
}
