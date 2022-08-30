export default {
  subtitle: 'Location',
  desc: '表示其链接到的对象的位置（URL）。通过 Document.location和Window.location访问。',
  types: [
    {
      title: '属性和静态方法',
      list: [
        {
          key: 'href、host、hostname、port、search、……',
          caption: [`整个URL、域名+端口、URL域名、端口号、头有一个“?”`, ``],
        },
      ],
    },
    {
      title: '方法',
      list: [
        {
          key: 'location.assign( url )',
          caption: '跳转到某个url',
        },
        {
          key: 'location.replace()',
          caption: '用给定的URL替换掉当前的资源。',
        },
        {
          key: 'location.reload()',
          caption: '重新加载来自当前 URL的资源。',
        },
      ],
    },
  ],
}
