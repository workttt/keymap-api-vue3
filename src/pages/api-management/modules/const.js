import jsIcon from '../../../assets/images/javascript.ico'
import cssIcon from '../../../assets/images/css.png'
import httpIcon from '../../../assets/images/http.png'
import vueIcon from '../../../assets/images/vue.png'
import operator from '../../../assets/images/运算符.png'
import vscodeIcon from '../../../assets/images/vscode.ico'
import codeIcon from '../../../assets/images/code_favicon.ico'

export const API_LIST = [
  {
    id: '',
    name: 'JavaScript',
    showDetail: true,
    ico: jsIcon,
    child: ['Array', 'String', 'Object', 'Set', 'Map', 'Number','Function', 'Math', 'Promise', 'Location', 'Proxy','Blob','File']
  },
  {
    name: 'CSS',
    showDetail: true,
    ico: cssIcon,
    child: ['animation', 'selectors'],
  },
  {
    name: 'VUE',
    showDetail: false,
    ico: vueIcon,
    child: ['响应性API'],
    urlFn: 'page/vue/vue3.html',
  },
  {
    name: 'HTTP',
    showDetail: false,
    ico: httpIcon,
    child: ['HTTP_STATUS_CODE'],
    urlFn: true,
  },
  {
    id: 'operator',
    name: '运算符-operator',
    showDetail: false,
    ico: operator,
    child: ['operator']
  },
  {
    name: 'Editor keymap',
    showDetail: false,
    ico: vscodeIcon,
    child: ['vscode'],
    urlFn: 'page/编辑器/vscode.html',
  },
  {
    name: '语言对比',
    showDetail: false,
    ico: codeIcon,
    child: ['java javascript'],
    urlFn: 'page/base/datatype.html',
  },
]
