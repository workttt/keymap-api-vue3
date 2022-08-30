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
    child: ['Array', 'String', 'Object', 'Set', 'Map', 'Number', 'Math', 'Promise', 'Location']
  },
  // {
  //   name: 'CSS',
  //   showDetail: true,
  //   ico: cssIcon,
  //   child: ['animation', 'selectors'],
  // },
  {
    id: 'CSS',
    name: 'CSS',
    showDetail: false,
    ico: cssIcon,
    child: ['selectors']
  },
  // {
  //   name: 'HTTP',
  //   showDetail: false,
  //   ico: httpIcon,
  //   child: ['HTTP_STATUS_CODE'],
  //   urlFn: true,
  // },
  {
    id: 'operator',
    name: '运算符-operator',
    showDetail: false,
    ico: operator,
    child: ['operator']
  },

]
