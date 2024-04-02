<template>
  <div id="EndPoint">
    <div class="sidebar">
        <list></list>
    </div>
    <div class="main">
      <text></text>
        <!-- <message></message> -->
        
    </div>
  </div>
</template>

<script setup>
import List from '@/components/list';
import Text from '@/components/text';
import Message from '@/components/message';
</script>

<style lang="less" scoped>
#EndPoint {
  .sidebar {
    height: 100%;
    float: left;
    width: 200px;
  }

  .main {
    height: 100%;
    position: relative;
    overflow: hidden;
    background-color: #eee;
  }

  .text {
    position: absolute;
    width: 100%;
    height: 160px;
  }

  .message {
    height: 500px;
  }
}
</style>