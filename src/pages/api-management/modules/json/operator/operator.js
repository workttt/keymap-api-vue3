export default {
  subtitle: 'operator',
  desc: '运算符',
  types: [
    {
      title: '算术运算符',
      list: [
        {
          key: '+',
          caption: '相加',
        },
        {
          key: '-',
          caption: '相减',
        },
        {
          key: '*',
          caption: '相乘',
        },
        {
          key: '/',
          caption: '相除',
        },
        {
          key: '%',
          caption: '求余',
        },
        {
          key: '++',
          caption: '自增',
        },
        {
          key: '--',
          caption: '自减',
        },

        {
          key: '**',
          caption: '幂运算，JavaScript',
        },
      ],
    },
    {
      title: '关系运算符  - 假定 A 值为 10，B 值为 20',
      list: [
        {
          key: '==',
          caption: '检查两个值是否相等，如果相等返回 True 否则返回 False。  A == B 为 False',
        },
        {
          key: '!=',
          caption: '检查两个值是否不相等，如果不相等返回 True 否则返回 False。',
        },
        {
          key: '>',
          caption: '',
        },
        {
          key: '<',
          caption: '',
        },
        {
          key: '>=',
          caption: '',
        },
        {
          key: '<=',
          caption: '',
        },
        {
          key: '===',
          caption: 'JavaScript的全等 判断两个值，类型和value，是否都相等',
        },
      ],
    },
    {
      title: '逻辑运算符  - 假定 A 值为 True，B 值为 False。',
      list: [
        {
          key: '&&',
          caption: '逻辑 AND 运算符。 如果两边的操作数都是 True，则条件 True，否则为 False。',
        },
        {
          key: '||',
          caption: '逻辑 OR 运算符。 如果两边的操作数有一个 True，则条件 True，否则为 False。',
        },
        {
          key: '!',
          caption: '逻辑 NOT 运算符。 如果条件为 True，则逻辑 NOT 条件 False，否则为 True。  !(A && B) 为 True',
        },
      ],
    },
    {
      title: '位运算符    -  p   q   (p & q)   (p | q)   (p ^ q)',
      list: [
        {
          key: '假定 A = 60; B = 13',
          caption: '其二进制数转换为：A = 0011 1100    B = 0000 1101',
        },
        {
          key: '&',
          caption: '与 <br> A&B = 0000 1100',
        },
        {
          key: '| ',
          caption: 'OR  或 <br> A|B = 0011 1101',
        },
        {
          key: '^  ',
          caption: 'XOR  异或<br>（不同=1，相同=0） <br> A^B = 0011 0001',
        },
        {
          key: '~ ',
          caption: 'NOT  非<br>反转被操作数的位',
        },
        {
          key: '<<',
          caption: [
            '左移n位就是乘以2的n次方。',
            'A << 2 表示 60 = 11 1100 左移2位后 1111 0000 <br> 等价于 60 * (2^2) = 240 = 1111 0000',
            '低位（右边）补0，各二进制位全部左移N位',
          ]
        },
        {
          key: '>>',
          caption: [
            '右移n位相当于除以2的n次方',
            '将一个数的各二进制位右移N位，移到右端的低位被舍弃，对于无符号数， 高位补0'
          ],
        },
        {
          key: '>>>',
          caption: '无符号右移， JavaScript出现',
        },
      ],
    },
    {
      title: '赋值',
      list: [
        {
          key: '=',
          caption: '',
        },
        {
          key: '+=，-=，%=，/=，......',
          caption: '所有的一元运算都可以简写',
        },
      ],
    },
    {
      title: '其他运算符',
      list: [
        {
          key: '&',
          caption: '返回变量存储地址 <br> &a; 将给出变量的实际地址。',
        },
        {
          key: '*',
          caption: '指针变量。 <br> *a; 是一个指针变量',
        },
      ],
    },
    {
      title: '优先级',
      list: [
        {
          key: '5',
          caption: '* ， / ， % ， << ， >> ，& ，&^ ',
        },
        {
          key: '4',
          caption: '+ ，- ，| ，^',
        },
        {
          key: '3',
          caption: '== ，!= ，< ，<= ，> ，>=',
        },
        {
          key: '2',
          caption: '&&',
        },
        {
          key: '1',
          caption: '||',
        },
      ],
    },
  ],
}
