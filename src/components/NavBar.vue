<!--marks: op版代码最简化-->
<template>
  <div class="box">
    <t-menu
        v-model:expanded="expanded"
        :theme="store.state.theme"
        :default-value="navValue"
        expand-mutex
        height="550px"
        :collapsed="collapsed"
        @change="triggerChange"
    >
<!--      <template #logo>-->
<!--        <img width="200" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo"/>-->
<!--      </template>-->
      <div v-for="nav in pathConfigs" :key="nav.path">
        <t-menu-item v-if="!nav.subArr.length" :value="nav.path">
          <template #icon>
            <t-icon :name="nav.icon"/>
          </template>
          {{ nav.label }}
        </t-menu-item>
        <t-submenu v-else :value="nav.path">
          <template #icon>
            <t-icon :name="nav.icon"/>
          </template>
          <template #title>
          <span>
            {{ nav.label }}}
          </span>
          </template>
          <t-menu-item v-for="item in nav.subArr" :key="item.path" :value="item.path">
            {{ item.label }}
          </t-menu-item>
        </t-submenu>
      </div>
    </t-menu>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {router} from "../router";
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

const pathConfigs = [
  {
    path: '/usua-site',
    label: '常用网站',
    icon: 'internet',
    subArr: []
  },
  {
    path: '/have-fish',
    label: '摸鱼网站',
    icon: 'dashboard',
    subArr: []
  },
  {
    path: '/my-works',
    label: '我的作品',
    icon: 'tips',
    subArr: []
  },
  {
    path: '/my-theme',
    label: '个性化配置',
    icon: 'edit',
    subArr: []
  },
  {
    path: '/knowledge',
    label: '知识',
    icon: 'unfold-less',
    subArr: []
  }
]
const navValue = ref("/usua-site")
const triggerChange = function (val) {
  router.push(val)
  // console.log("navValue", val)
}
</script>
