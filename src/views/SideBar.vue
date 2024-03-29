<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <router-link to="/" class="router-link-no-underline titleName">
      <el-menu-item index="1">
        <el-icon><Management /></el-icon>
        <span>XCOAP</span>
      </el-menu-item>
    </router-link>

    <router-link to="/endpoint" class="router-link-no-underline menu">
      <el-menu-item index="2">
        <el-icon><Connection /></el-icon>
        <span>Endpoint</span>
      </el-menu-item>
    </router-link>

    <router-link to="/about" class="router-link-no-underline menu">
      <el-menu-item index="3">
        <el-icon><Management /></el-icon>
        <span>About</span>
      </el-menu-item>
    </router-link>
    
    <router-link to="/settings" class="router-link-no-underline menu">
      <el-menu-item index="4">
        <el-icon><Setting /></el-icon>
        <span>Settings</span>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script setup>
import { ref,defineExpose } from 'vue'
import { Management, Setting,Connection } from '@element-plus/icons-vue'

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
.router-link-no-underline {
  text-decoration: none;
}
</style>