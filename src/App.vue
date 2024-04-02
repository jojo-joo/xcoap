<template>
  <div class="common-layout" style="height: 100vh;">
    <el-container style="height: 100%;">
      <el-aside width="160px"><SideBar/></el-aside>
      <el-container style="height: 100%;">
        <el-aside width="200px"><List/></el-aside>
        <el-container style="height: 100%;">
          <el-main >
            <Message style="height: 600px"/>
            <Text style="height: 160px"/>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>u
</template>


<script setup>
import SideBar from '@/views/SideBar.vue';
import List from '@/components/list';
import Text from '@/components/text';
import Message from '@/components/message';
</script>

<style lang="scss">
@import './assets/font/iconfont.css';
</style>
