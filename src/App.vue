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
import EndPoint from '@/views/EndPoint.vue';
import HeaderBar from '@/views/HeaderBar.vue';
import Card from '@/components/card';
import List from '@/components/list';
import Text from '@/components/text';
import Message from '@/components/message';
</script>

<style lang="scss">
@import './assets/font/iconfont.css';
</style>