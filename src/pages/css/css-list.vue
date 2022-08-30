<template>
  <h3>{{ pageTitle }}</h3>

  <div class="weui-panel">
    
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  setup(props, context) {
    const pageTitle = ref('前端速查表')

    return {
      pageTitle,
    }
  },
}
</script>

<style lang="scss">
/*  */
.manual-dl {
  width: 1200px;
  height: 100%;
}
.menu-child-list {
  display: inline-block;
}
.menu-child-list a {
  font-size: 14px;
  font-family: 'Courier New', Courier, monospace;
  color: red;
}
</style>
