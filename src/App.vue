<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="side" width="collapse">
        <SideBar />
      </el-aside>
      <el-container>
        <el-header>
          <HeaderBar/>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import SideBar from '@/views/SideBar.vue';
import HeaderBar from '@/views/HeaderBar.vue';
</script>

<style lang="scss">
@import './assets/font/iconfont.css';
</style>