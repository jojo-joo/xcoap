<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="side" width="collapse">
        <SideBar ref="narbar" />
      </el-aside>
      <el-container>
        <el-header height="125px">
          <HeaderBar ref="headerContent" @updateNarBar="updateNarBar" />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import SideBar from './views/SideBar.vue';
import HeaderBar from './views/HeaderBar.vue';
import { ref } from 'vue';
const narbar = ref(null);

const updateNarBar = () => {
  narbar.value.isCollapse = !narbar.value.isCollapse;
}

</script>

<style lang="scss">
@import './assets/font/iconfont.css';
</style>