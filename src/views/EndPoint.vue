<template>
  <el-container>
    <el-aside width="300px">
      <EndPointList />
    </el-aside>
    
    <el-main>
      <div style="padding: 20px;">右边内容</div>
    </el-main>
  </el-container>
</template>

<script setup>
import EndPointList from '@/views/EndPointList.vue';
</script>

<style>
</style>
