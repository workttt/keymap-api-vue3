export default {
  subtitle: 'Promise',
  types: [
    {
      title: 'Promise 对象用于表示一个异步操作的最终完成 (或失败), 及其结果值.',
      list: [
        {
          key: 'new Promise( (resolve, reject) => { ... } )',
          caption: '实例属性, 返回或设置一个数组中的元素个数。直接改变长度可以扩展/截断数组',
        },
      ],
    },
    {
      title: '',
      list: [
        {
          key: 'Promise.all( 一个可迭代对象-数组,字符串 )',
          caption: '它通常在启动多个异步任务并发运行并为其结果创建承诺之后使用，以便人们可以等待所有任务完成。',
        },
        {
          key: 'Promise.resolve( 一个可迭代对象-数组,字符串 )',
          caption: '它通常在启动多个异步任务并发运行并为其结果创建承诺之后使用，以便人们可以等待所有任务完成。',
        },
        {
          key: 'promise.catch( err => { ... } )',
          caption: '',
        },
        {
          key: 'promise.finally()',
          caption: '',
        },
        {
          key: 'Promise.any(iterable)',
          caption: '接收一个Promise对象的集合，当其中的一个 promise 成功，就返回那个成功的promise的值。',
        },
        {
          key: 'Promise.race(iterable)',
          caption: [
            `当iterable参数里的任意一个子promise被成功或失败后，`,
            `父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。`,
            ``,
          ]
        },
        {
          key: 'Promise.reject(reason)',
          caption: '返回一个状态为失败的Promise对象，并将给定的失败信息传递给对应的处理方法',
        },
        {
          key: 'Promise.resolve(value)',
          caption: [
            `返回一个状态由给定value决定的Promise对象。`,
            `如果该值是thenable(即，带有then方法的对象)，返回的Promise对象的最终状态由then方法执行决定；`,
            `否则的话(该value为空，基本类型或者不带then方法的对象),返回的Promise对象状态为fulfilled，并且将该value传递给对应的then方法。`,
            `通常而言，如果您不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,这样就能将该value以Promise对象形式使用。`,
          ],
        },
        {
          key: '',
          caption: '',
        },
      ],
    },
  ],
}
