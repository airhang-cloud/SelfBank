<template>
  <div>
    <h1>{{name}}</h1>
    <p>reactive定义出来的 对象, 本身具有响应式, <b>不过</b>被解构赋值出来就不具备响应,所以vue3提供了 toRefs()重而让解构出来的属性依旧具备响应</p>
    <t-button @click="changeName">调整名字</t-button>
    <t-alert style="margin: 30px" v-for="(li,idx) in list" :key="idx" @click="toogleSelect(idx)" :theme="li.check?'success':'info'" :message="li.label" />
  </div>
</template>

<script>
import {reactive,toRefs} from "vue"
export default {
  name: "knowledges",
  setup(){
    const data = reactive({
      name: 'hhm',
      like: 'dance'
    })
    const list = reactive([
      {
        label: "aaa",
        check: true
      },
      {
        label: "bbb",
        check: false
      },
      {
        label: "ccc",
        check: false
      }
    ])
    const changeName = () => {
      data.name = "hmh"
    }
    const toogleSelect = (idx) => {
      list.forEach(el => {el.check = false})
      list[idx].check = true
    }
    return {
      ...toRefs(data),
      changeName,
      toogleSelect,
      list
    }
  }
}
</script>

<style scoped>

</style>
