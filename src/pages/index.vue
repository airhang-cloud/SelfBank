<template>
  <t-layout class="honnr-box">
    <t-layout>
      <t-aside>
        <NavBar/>
      </t-aside>
      <t-content>
        <t-switch size="large" v-model="checked" @change="onChange"></t-switch>
      </t-content>
    </t-layout>
  </t-layout>
</template>

<script setup>
//切换主题
// document.body.setAttribute('class', 'theme-light')
import NavBar from "../components/NavBar.vue"
import {ref} from "vue"
import store from "../store";

const checked = ref(false)

function onChange() {
  if (checked.value) store.commit("CHANETHEME", 'dark')
  else store.commit("CHANETHEME", 'light')
}
</script>


<style scoped>
.honnr-box {
  width: 100%;
  background-color: yellow;
  height: 100%
}
</style>
