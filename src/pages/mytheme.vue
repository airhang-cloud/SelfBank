<template>
  <PaneBox>
    <t-form>
      <t-form-item label="开启夜间模式">
        <!-- 夜间-->
        <t-switch size="large" v-model="checked" @change="onChange"></t-switch>
      </t-form-item>

      <t-form-item label="主题色配置">
        <!-- 自定义按钮色-->
        <t-color-picker-panel
            v-model="color"
        />
      </t-form-item>
    </t-form>
  </PaneBox>
</template>

<script>
import {ref, watch} from "vue"
import store from "../store";
import PaneBox from "../components/PaneBox.vue"

export default {
  name: "mytheme",
  components: {PaneBox},
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
