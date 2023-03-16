export default {
  subtitle: 'Proxy',
  desc: '',
  types: [
    {
      title: '语法',
      list: [
        {
          key: 'keykeykey',
          caption: [`const p = new Proxy(target, handler)            `],
        },
        {
          key: 'target',
          caption: '要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）',
        },
        {
          key: 'handler',
          caption: '一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为',
        },
        {
          key: 'Array.length',
          caption: [
            `
          const handler = {
              get: function(obj, prop) {
                  return prop in obj ? obj[prop] : 37;
              }
          };
          
          const p = new Proxy({}, handler);
          p.a = 1;
          p.b = undefined;
          
          console.log(p.a, p.b);      // 1, undefined
          console.log('c' in p, p.c); // false, 37
        
          `,
          ],
        },
      ],
    },
  ],
}
