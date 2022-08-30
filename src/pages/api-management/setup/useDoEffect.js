// ref 基本值类型
// reactive 引用值类型
import { reactive } from 'vue'

export function useDoEffect() {
  const apiList = reactive(API_LIST)
  let doing = false
  const showApiDetail = (apiItem) => {
    if (doing) return
    doing = true
    apiItem.showDetail = !apiItem.showDetail
    setTimeout(() => {
      doing = false
    }, 300)
  }
  return {
    apiList,
    showApiDetail,
  }
}
