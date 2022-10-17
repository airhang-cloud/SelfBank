<template>
  <div class="box">
    <t-menu
        v-model:expanded="expanded"
        :theme="store.state.theme"
        default-value="3-2"
        expand-mutex
        height="550px"
        :collapsed="collapsed"
    >
      <t-submenu value="3">
        <template #icon>
          <t-icon name="mail"/>
        </template>
        <template #title>
          <span>消息区</span>
        </template>
        <t-submenu value="3-1" title="二级菜单">
          <t-menu-item value="3-1-1"> 三级菜单内容</t-menu-item>
          <t-menu-item value="3-1-2"> 三级菜单内容</t-menu-item>
          <t-menu-item value="3-1-3"> 三级菜单内容</t-menu-item>
        </t-submenu>
        <t-submenu value="3-5" title="二级菜单">
          <t-menu-item value="3-5-1"> 三级菜单内容</t-menu-item>
          <t-menu-item value="3-5-2"> 三级菜单内容</t-menu-item>
          <t-menu-item value="3-5-3"> 三级菜单内容</t-menu-item>
        </t-submenu>
        <t-menu-item value="3-2"> 二级菜单内容</t-menu-item>
        <t-menu-item value="3-3"> 二级菜单内容</t-menu-item>
        <t-menu-item value="3-4"> 二级菜单内容</t-menu-item>
      </t-submenu>
      <t-menu-item value="user-circle">
        <template #icon>
          <t-icon name="user-circle"/>
        </template>
        个人中心
      </t-menu-item>
      <t-submenu value="4">
        <template #icon>
          <t-icon name="play-circle"/>
        </template>
        <template #title>
          <span>视频区</span>
        </template>
        <t-menu-item value="4-1"> 二级菜单内容</t-menu-item>
        <t-menu-item value="4-2"> 二级菜单内容</t-menu-item>
        <t-menu-item value="4-3"> 二级菜单内容</t-menu-item>
      </t-submenu>
      <t-menu-item value="edit1">
        <template #icon>
          <t-icon name="edit-1"/>
        </template>
        资源编辑
      </t-menu-item>
      <template #operations>
        <t-icon class="t-menu__operations-icon" name="view-list" @click="changeCollapsed"/>
      </template>
    </t-menu>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import store from "../store";
const collapsed = ref(false);
const collapsed2 = ref(false);

const changeCollapsed = () => {
  collapsed.value = !collapsed.value;
};

const changeCollapsed2 = () => {
  collapsed2.value = !collapsed2.value;
};

const expanded = ref(['2', '3']);
const expanded2 = ref(['2']);

</script>
