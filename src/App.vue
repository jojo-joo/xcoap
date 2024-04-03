<template>
  <div class="common-layout">
    <el-container style="height: 98vh;">
      <el-aside width="160px"><SideBar/></el-aside>
      <router-View></router-View>
    </el-container>
  </div>
</template>

<script setup>
import SideBar from '@/views/SideBar.vue';
</script>
