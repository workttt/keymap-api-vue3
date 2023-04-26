// 加载多个文件
const modules = import.meta.globEager('./json/**/*.js')
const API_JSON_LIST = []
console.log(modules)
for (const path in modules) {
  API_JSON_LIST.push(modules[path].default)
  // modules[path]().then((mod) => {
  //   API_JSON_LIST.push(mod)
  //   console.log(path, mod)
  // })
}

export default API_JSON_LIST
