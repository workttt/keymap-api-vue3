import { ref, reactive, computed } from 'vue'

// 按照惯例，组合式函数名以“use”开头
export function useApiName() {
  const route = useRouter()
  // 被组合式函数封装和管理的状态
  const apiName = ref('')

  // 组合式函数可以随时更改其状态。
  function update(name) {
    apiName.value = name
  }

  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // 来启动和卸载副作用
  onMounted(() => {
    apiName.value = route.currentRoute.value.params?.type || route.currentRoute.value.query.type
  })

  // 通过返回值暴露所管理的状态
  return { apiName }
}

