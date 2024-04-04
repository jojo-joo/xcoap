<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical"
  >
    <router-link to="/endpoint/message" class="router-link-no-underline titleName">
      <el-menu-item index="1">
        <el-icon><ElementPlus /></el-icon>
        <span>XCOAP</span>
      </el-menu-item>
    </router-link>

    <router-link to="/endpoint/message" class="router-link-no-underline menu">
      <el-menu-item index="2">
        <el-icon><Connection /></el-icon>
        <span>Endpoints</span>
      </el-menu-item>
    </router-link>
    
    <router-link to="/endpoint/add" class="router-link-no-underline menu">
      <el-menu-item index="23">
        <el-icon><Plus /></el-icon>
        <span>Add</span>
      </el-menu-item>
    </router-link>

    <router-link to="/endpoint/discovery" class="router-link-no-underline menu">
      <el-menu-item index="3">
        <el-icon><Search /></el-icon>
        <span>Discovery</span>
      </el-menu-item>
    </router-link>

    <router-link to="/log" class="router-link-no-underline menu">
      <el-menu-item index="4">
        <el-icon><Document /></el-icon>
        <span>Log</span>
      </el-menu-item>
    </router-link>
    
    <router-link to="/settings" class="router-link-no-underline menu">
      <el-menu-item index="5">
        <el-icon><Setting /></el-icon>
        <span>Settings</span>
      </el-menu-item>
    </router-link>

    <router-link to="/about" class="router-link-no-underline menu">
      <el-menu-item index="6">
        <el-icon><Warning /></el-icon>
        <span>About</span>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script setup>
import { Connection, ElementPlus, Setting, Warning } from '@element-plus/icons-vue';
import { ref,defineExpose } from 'vue'

 const isCollapse = ref(false)

defineExpose({
  isCollapse,
})
</script>

<style scoped>
.el-menu-vertical,.el-menu-vertical:not(.el-menu--collapse){
  height: 98vh;
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