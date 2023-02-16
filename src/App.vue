<script setup>
import {getInfos} from "./api/basicController";
import {onMounted} from "vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

function handlerEvents(response) {
  console.log(response)
}
onMounted(()=>{
  getInfos().then(res => {
    console.log(res)
  })
})
</script>

<template>
  <router-view/>
</template>

<style scoped>

</style>
