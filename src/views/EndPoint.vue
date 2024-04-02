<template>
  <el-container>
    <el-aside width="200px">
      <List />
    </el-aside>
    <Message />
  </el-container>
</template>

<script setup>
import List from '@/components/list';
import Message from '@/components/message';
</script>
