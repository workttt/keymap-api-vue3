export default {
  subtitle: 'JSON',
  desc: '',
  types: [
    {
      title: '静态方法',
      list: [
        {
          key: 'JSON.parse(text[, reviver])',
          caption: [
            `解析 JSON 字符串并返回对应的值，可以额外传入一个转换函数，用来将生成的值和其属性，在返回之前进行某些修改。`,
            `reviver(key, value) 函数  
            如果指定了 reviver 函数，则解析出的 JavaScript 值（解析值）会经过一次转换后才将被最终返回（返回值）`,
            `
            function (k, v) {
              console.log(k);     // 输出text中对应的属性名
              return v * 2;   // 键值 每个变原来两倍
            }
            `
          ],
        },
        {
          key: 'JSON.stringify(value[, replacer [, space]])',
          caption: [
            `返回与指定值对应的 JSON 字符串，可以通过额外的参数，控制仅包含某些属性，或者以自定义方法来替换某些 key 对应的属性值。`,
            `replacer 函数
            在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理
            `,
            `space 指定缩进用的空白字符串. 
            
            如果参数是个数字，它代表有多少的空格；上限为 10。该值若小于 1，则意味着没有空格；如果该参数为字符串（当字符串长度超过 10 个字母，取其前 10 个字母），该字符串将被作为空格；如果该参数没有提供（或者为 null），将没有空格。`
          ],
        }
      ]
    }
  ],
}
