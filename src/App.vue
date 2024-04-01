<template>
  <el-container>
    <el-aside width="140px">
      <SideBar />
    </el-aside>
    <el-container>
      <RouterView />
    </el-container>
  </el-container>
</template>

<script setup>
import SideBar from '@/views/SideBar.vue';
</script>

<style lang="scss">
@import './assets/font/iconfont.css';
</style>