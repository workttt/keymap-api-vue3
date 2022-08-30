import { useRouter } from 'vue-router'

// 只能箭头函数, fn的话useRouter用不了
export function useUrlEffect() {
  const router = useRouter()
  const getLinkUrl = (item, name, urlFn) => {
    if (urlFn && typeof urlFn === 'function') {
    }
    router.push(`/api/detail?type=${item}&pageType=${name}`)
  }
  return {
    getLinkUrl,
  }
}

/* router.push({
      //传递参数使用query的话，指定path或者name都行，但使用params的话，只能使用name指定
      path: '/api/detail',
      query: {
        type: item,
        pageType: name,
      },
      //
      // name: 'ApiDetail',
      // params: {
      //   type: item,
      // },
    }) */
