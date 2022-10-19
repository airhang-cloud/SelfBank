<template>
  <t-layout class="honnr-box">
    <t-layout>
      <t-aside>
        <NavBar/>
      </t-aside>
      <t-content>
        <!--        &lt;!&ndash; 夜间&ndash;&gt;-->
        <!--        <t-switch size="large" v-model="checked" @change="onChange"></t-switch>-->
        <!--        &lt;!&ndash; 自定义按钮色&ndash;&gt;-->
        <!--        <t-color-picker-panel-->
        <!--            v-model="color"-->
        <!--            @change="handleChange"-->
        <!--            @palette-bar-change="handlePaletteChange"-->
        <!--            @recent-colors-change="handleRecentColorsChange"-->
        <!--        />-->
        <router-view/>
      </t-content>
    </t-layout>
  </t-layout>
</template>

<script setup>
//切换主题
// document.body.setAttribute('class', 'theme-light')
import NavBar from "../components/NavBar.vue"
import {ref, watch} from "vue"
import store from "../store";

const checked = ref(false)
const color = ref("#0052d9")

function onChange() {
  if (checked.value) store.commit("CHANETHEME", 'dark')
  else store.commit("CHANETHEME", 'light')
}

function handleChange(value, context) {
}

function handlePaletteChange(context) {
}

function handleRecentColorsChange(value) {
}

watch(color, (val) => {
  console.log(val)
  store.commit("CHANGECOLORPICK", val)
})
</script>


<style scoped>
.honnr-box {
  width: 100%;
  /*background-color: yellow;*/
  height: 100%
}
</style>
