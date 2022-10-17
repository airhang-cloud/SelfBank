<!--marks: op版代码最简化-->
<template>
  <div class="box">
    <t-menu
        v-model:expanded="expanded"
        :theme="store.state.theme"
        default-value="dash"
        expand-mutex
        height="550px"
        :collapsed="collapsed"
    >
      <template #logo>
        <img width="200" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo"/>
      </template>
      <t-menu-item value="dash">
        <template #icon>
          <t-icon name="app"/>
        </template>
        面板中心
      </t-menu-item>
      <t-submenu value="paymanager">
        <template #icon>
          <t-icon name="layers"/>
        </template>
        <template #title>
          <span>账单管理</span>
        </template>
        <t-menu-item value="3-1-1"> 我的账本</t-menu-item>
      </t-submenu>
      <t-menu-item value="analysis">
        <template #icon>
          <t-icon name="cloud"/>
        </template>
        账单分析
      </t-menu-item>
      <t-menu-item value="personalized">
        <template #icon>
          <t-icon name="tools"/>
        </template>
        个性化配置
      </t-menu-item>
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
