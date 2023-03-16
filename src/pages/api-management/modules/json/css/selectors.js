export default {
  subtitle: 'Selectors',
  desc: '  css选择器',
  types: [
    {
      title: '* 关系选择符',
      list: [
        {
          key: 'E F',
          caption: [`包含选择符(Descendant combinator) . 选择所有被E元素包含的F元素。`, `选择符用“空格”连接`],
        },
        {
          key: 'E>F',
          caption: [`子选择符(Child combinator) . 选择所有作为E元素的子元素F。`, `选择符用“>”连接`],
        },
        {
          key: '* E+F',
          caption: [`相邻选择符(Adjacent sibling combinator) . 选择紧贴在E元素之后F元素。`, `选择符用“+”连接`],
        },
        {
          key: '* E~F',
          caption: [`兄弟选择符(General sibling combinator) . 选择E元素所有兄弟元素F。 CSS3`, `选择符用“~”连接`],
        },
      ],
    },
    {
      title: '* 属性选择符',
      list: [
        {
          key: '[attribute]',
          caption: [`用于选取带有指定属性的元素。`, 'div[class] {  }'],
        },
        {
          key: '[attribute=value]',
          caption: [`用于选取指定属性且为指定值的元素。`, 'attribute属性为value的元素', 'div[class="test"] { ... }'],
        },
        {
          key: '* [attribute~=value]',
          caption: [`用于选取属性值中包含指定词汇的元素。`, '不能切分 - _ 符号，不是子串匹配'],
        },
        {
          key: '[attribute|=value]',
          caption: [`用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。`, '单个单词'],
        },
        {
          key: '[attribute*=value]',
          caption: [`匹配属性值中<span class='hight'>包含指定值</span>的每个元素。`],
        },
        {
          key: '[attribute^=value]',
          caption: [`匹配属性值以指定值开头的每个元素。`, `<span class='hight'>匹配都是子串</span>`],
        },
        {
          key: '[attribute$=value]',
          caption: [`匹配属性值以指定值<span class='hight'>结尾</span>的每个元素。`],
        },
      ],
    },
    {
      title: '伪类选择符 CSS3',
      list: [
        {
          key: `链接伪类`,
          caption: [],
        },
        {
          key: `鼠标伪类`,
          caption: [],
        },
        {
          key: `元素父子关系`,
          caption: [],
        },
        {
          key: `元素状态`,
          caption: [
            `E:checked	匹配用户界面上处于选中状态的元素E。(用于input type为radio与checkbox时)`,
            'E:enabled	匹配用户界面上处于可用状态的元素E。',
            'E:disabled	匹配用户界面上处于禁用状态的元素E。',
          ],
        },
        {
          key: '其他。。。',
          caption: [],
        },
      ],
    },
    {
      title: '伪元素 (伪对象选择符)',
      subtitle: ' —— 新版本支持的标准,双冒号CSS3语法',
      list: [
        {
          key: `* ::before / ::after`,
          caption: [`::before 选择器向选定的元素前插入内容。`, `使用content 属性来指定要插入的内容。`, '这个虚拟元素默认是行内元素。'],
        },
        {
          key: ':first-letter',
          caption: [`用来指定元素第一个字母的样式。`],
        },
        {
          key: ':first-line',
          caption: [`用来指定选择器第一行的样式。`],
        },
        {
          key: '::placeholder',
          caption: [
            `设置对象文字占位符的样式`,
            `::-webkit-input-placeholder`,
            `:-ms-input-placeholder`,
            `:-moz-placeholder`,
            `::-moz-placeholder`,
          ],
        },
        {
          key: '::selection',
          caption: [`匹配元素中被用户选中或处于高亮状态的部分`],
        },
        {
          key: '::slotted()、::cue (:cue)',
          caption: '',
        },
      ],
    },
    {
      title: '元素选择器',
      list: [
        {
          key: ' * 通配选择符(Universal Selector)',
          caption: [`所有元素对象`, '案例： * {  }'],
        },
        {
          key: 'E ',
          caption: ['h1 {  }', '类型选择符(Type Selector)', `以文档语言对象类型作为选择符。`, 'div、span、p、table'],
        },
        {
          key: '#id',
          caption: ['id选择符(ID Selector)', `以唯一标识符id属性等于myid的E对象作为选择符。`],
        },
        {
          key: '.class',
          caption: ['class选择符(Class Selector)', `以class属性包含myclass的E对象作为选择符。`],
        },
      ],
    },
  ],
}
