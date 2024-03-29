<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
  <el-menu-item index="1" class="titleName">
        <el-icon><Management /></el-icon>
        <template #title>XCOAP</template>
  </el-menu-item>

    <el-sub-menu index="2" class="menu">
      <template #title>
        <el-icon><Management /></el-icon>
        <span>Endpoint</span>
      </template>
        <el-menu-item index="1-1" class="menu" @click="$emit('addTab','LibrarySortEnter','图书分类录入')">test</el-menu-item>
        <el-menu-item index="1-2" class="menu" @click="$emit('addTab','StorePositionEnter','存放位置录入')">test</el-menu-item>
        <el-menu-item index="1-3" class="menu">test</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="3" class="menu">
      <template #title>
        <el-icon><Management /></el-icon>
        <span>About</span>
      </template>
        <el-menu-item index="2-1" class="menu">test</el-menu-item>
    </el-sub-menu>
    
    <el-sub-menu index="4" class="menu">
      <template #title>
        <el-icon><Management /></el-icon>
        <span>Settings</span>
      </template>
        <el-menu-item index="3-1" class="menu">test</el-menu-item>
        <el-menu-item index="3-2" class="menu">test</el-menu-item>
        <el-menu-item index="3-3" class="menu">test</el-menu-item>
    </el-sub-menu>



  </el-menu>
</template>

<script setup>
import { ref,defineExpose } from 'vue'
import { Management } from '@element-plus/icons-vue'

 const isCollapse = ref(false)

 const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
 const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
}

defineExpose({
  isCollapse,
})
</script>

<style scoped>
.el-menu-vertical,.el-menu-vertical:not(.el-menu--collapse){
  height: 100vh;
}
.titleName{
  font-size: 24px;
  font-weight: 600;
}
.menu{
font-size: 14px;

}
</style>