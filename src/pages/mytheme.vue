<template>
  <!-- 夜间-->
  <t-switch size="large" v-model="checked" @change="onChange"></t-switch>
  <!-- 自定义按钮色-->
  <t-color-picker-panel
      v-model="color"
  />
</template>

<script>
import {ref, watch} from "vue"
import store from "../store";

export default {
  name: "mytheme",
  setup() {
    const checked = ref(false)
    const color = ref("#0052d9")
    watch(color, (val) => {
      console.log(val)
      store.commit("CHANGECOLORPICK", val)
    })

    function onChange() {
      if (checked.value) store.commit("CHANETHEME", 'dark')
      else store.commit("CHANETHEME", 'light')
    }

    return {
      checked,
      color,
      onChange
    }
  }
}
</script>

<style scoped>

</style>
