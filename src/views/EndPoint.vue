<template>
  <el-container>
    <el-aside width="300px">
      <EndPointList />
    </el-aside>
    
    <el-main>
      <ChatList />
    </el-main>
  </el-container>
</template>

<script setup>
import EndPointList from '@/views/EndPointList.vue';
import ChatList from '@/views/ChatList.vue';
</script>

<style>
</style>
