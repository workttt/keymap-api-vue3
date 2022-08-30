<template>
  <section class="keyboard-shortcuts" :style="'font-size: ' + fontSize">
    <header class="shortcuts-header default-img">
      <p class="subtitle">
        <span>{{ pageType || '' }}-快速记忆表</span>
        <a id="mdnUrl" :href="`https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/${apiName}`">MDN文档</a>
        <router-link :to="'/'">首页</router-link>
      </p>
      <!-- <h1 class="title">{{ apiName }}</h1> -->
      <div class="tools-bar">
        <select v-if="docObj" class="tool-item" v-model="apiName">
          <option v-for="(item, index) of docObj.child" :key="index">{{ item }}</option>
        </select>
        <select class="tool-item" v-model="fontSize">
          <option v-for="(item, index) of fontSizeArr" :value="item" :key="index">{{ item }}</option>
        </select>
        <div class="tool-item inline-block">
          <label for="fontBold">粗体</label>
          <input type="checkbox" id="fontBold" v-model="fontBold" />
        </div>
      </div>
      <p class="subtitle">{{ dataDict.desc }}</p>
    </header>
    
    <ul v-for="type of dataDict?.types" class="shortcuts-list" :key="type.title">
      <li class="shortcuts-title" :class="{ bold: fontBold }" v-if="type.title.startsWith('*')">
        <span class="hight">* </span>{{ type.title.slice(1) }}
      </li>
      <li class="shortcuts-title" :class="{ bold: fontBold }" v-else>{{ type.title }}</li>
      <li v-if="type?.subtitle" style="margin-bottom: 10px; color: blue">{{ type.subtitle }}</li>
      <li v-for="short of type.list" class="shortcuts-item" :key="short.key">
        <span v-if="short.key.startsWith('*')" class="shortcuts-name" :class="{ bold: fontBold }"
          ><span class="hight">* </span>{{ short.key.slice(1) }}</span
        >
        <span v-else class="shortcuts-name" :class="{ bold: fontBold }">{{ short.key }}</span>
        <span
          v-if="short.caption"
          class="shortcuts-desc"
          v-html="typeof short.caption === 'string' ? short.caption : short.caption.join('<br>')"
        ></span>
      </li>
    </ul>
  </section>
</template>

<script>
import { ref, reactive, onMounted, watch, watchEffect, computed } from 'vue'
import { useRouter } from 'vue-router'
import { API_LIST } from './modules/const.js'
import '../../style/api-detail.scss'

// import API_JSON_LIST from './modules/index'
// 加载多个文件
const modules = import.meta.globEager('./modules/json/**/*.js')
const API_JSON_LIST = []
for (const path in modules) {
  API_JSON_LIST.push(modules[path].default)
  // modules[path]().then((mod) => {
  //   API_JSON_LIST.push(mod)
  //   // console.log(path, mod)
  // })
}

export default {
  setup(props, context) {
    const route = useRouter()
    let apiName = ref('')
    // 字体粗细 字重
    const fontBold = ref(true)
    const fontSize = ref('14px')
    console.log(API_JSON_LIST)
    const apiJsonList = reactive(API_JSON_LIST)
    // const apiJsonList = API_JSON_LIST
    let dataDict = reactive(apiJsonList.length > 0 && apiJsonList[0])
    // console.log(props, route)
    onMounted(() => {
      // _____
      // fullPath: "/api/detail/Set"
      // hash: ""
      // href: "#/api/detail/Set"
      // matched: [{…}]
      // meta: {}
      // name: "ApiDetail"
      // params: {type: 'Set'}
      // path: "/api/detail/Set"
      // query: {}
      // redirectedFrom
      console.log('路由入参：', route.currentRoute.value)
      // xxx.value 的语法来改变ref声明的值
      apiName.value = route.currentRoute.value.params?.type || route.currentRoute.value.query.type
    })

    watch(apiName, (count, prevCount) => {
      // console.log('监听apiname的变化', count, prevCount)
      route.currentRoute.value.query.type = apiName
      Object.assign(
        dataDict,
        API_JSON_LIST.find((el) => el.subtitle.startsWith(apiName.value))
      )
    })

    // computed(() => apiJsonList.find(el => el.subtitle === apiName.value))

    return {
      apiName,
      pageType: route.currentRoute.value.query.pageType,
      docObj: API_LIST.find((el) => el.name === route.currentRoute.value.query.pageType),
      fontBold,
      fontSize,
      fontSizeArr: ['12px', '14px', '16px', '20px'],
      dataDict
    }
  },
}
</script>

<style lang="scss" scoped></style>
