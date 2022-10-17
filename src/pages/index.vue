<template>
  <t-layout class="honnr-box">
    <t-layout>
      <t-aside>
        <NavBar/>
      </t-aside>
      <t-content>Content</t-content>
    </t-layout>
  </t-layout>
</template>

<script setup>
import NavBar from "../components/NavBar.vue"
</script>


<style scoped>
.honnr-box {
  width: 100%;
}
</style>
