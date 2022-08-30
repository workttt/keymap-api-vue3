<template>
  <h3>{{ pageTitle }}</h3>

  <div class="weui-panel" v-for="apiItem of apiList" :key="apiItem.name">
    <div class="weui-panel__hd" @click="showApiDetail(apiItem)">{{ apiItem.name }}</div>
    <div class="weui-panel__bd">
      <div class="weui-media-box weui-media-box_small-appmsg" :style="apiItem.showDetail || apiItem?.child?.length < 2 ? '' : 'height: 0;'">
        <div class="weui-cells" v-cloak>
          <div
            v-for="(item, index) in apiItem.child"
            :key="index"
            class="weui-cell weui-cell_access weui-cell_example"
            @click="getLinkUrl(item, apiItem.id || apiItem.name, apiItem.urlFn)"
          >
            <div class="weui-cell__hd">
              <img :src="apiItem.ico" alt="" class="ico-img" />
            </div>
            <div class="weui-cell__bd weui-cell_primary">
              <p>{{ item }}</p>
            </div>
            <span class="weui-cell__ft"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ref 基本值类型
// reactive 引用值类型
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { API_LIST } from './modules/const.js'

// 只能箭头函数, fn的话useRouter用不了
const UrlEffect = () => {
  const router = useRouter()
  const getLinkUrl = (item, name, urlFn) => {
    if(urlFn && typeof urlFn === 'function') {
      
    }
    // router.push({
    //   //传递参数使用query的话，指定path或者name都行，但使用params的话，只能使用name指定
    //   path: '/api/detail',
    //   query: {
    //     type: item,
    //     pageType: name,
    //   },
    //   //
    //   // name: 'ApiDetail',
    //   // params: {
    //   //   type: item,
    //   // },
    // })
    router.push(`/api/detail?type=${item}&pageType=${name}`)
  }
  return {
    getLinkUrl,
  }
}

const doEffect = () => {
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

export default {
  setup(props, context) {
    // console.log(router)
    const pageTitle = ref('前端速查表')
    const { apiList, showApiDetail } = doEffect()
    const { getLinkUrl } = UrlEffect()

    return {
      pageTitle,
      apiList,
      showApiDetail,
      getLinkUrl,
    }
  },
}
</script>

<style lang="scss" scoped>
h3 {
  padding-left: 50px;
  line-height: 70px;
  // background-color: #ccc;
}

.weui-panel {
  margin-top: 30px;
}

.ico-img {
  width: 20px;
  margin-right: 16px;
  display: block;
}
</style>
