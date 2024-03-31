<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical"
  >
    <router-link to="/" class="router-link-no-underline titleName">
      <el-menu-item index="1">
        <el-icon><Management /></el-icon>
        <span>XCOAP</span>
      </el-menu-item>
    </router-link>

    <router-link to="/endpoint" class="router-link-no-underline menu">
      <el-menu-item index="2">
        <el-icon class="iconfont icon-connections"/>
        <span>Endpoint</span>
      </el-menu-item>
    </router-link>
    
    <router-link to="/discovery" class="router-link-no-underline menu">
      <el-menu-item index="3">
        <el-icon class="iconfont icon-search"/>
        <span>Discovery</span>
      </el-menu-item>
    </router-link>

    <router-link to="/log" class="router-link-no-underline menu">
      <el-menu-item index="4">
        <el-icon class="iconfont icon-log"/>
        <span>Log</span>
      </el-menu-item>
    </router-link>
    
    <router-link to="/settings" class="router-link-no-underline menu">
      <el-menu-item index="5">
        <el-icon class="iconfont icon-settings"/>
        <span>Settings</span>
      </el-menu-item>
    </router-link>

    <router-link to="/about" class="router-link-no-underline menu">
      <el-menu-item index="6">
        <el-icon class="iconfont icon-about"/>
        <span>About</span>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script setup>
import { ref,defineExpose } from 'vue'

 const isCollapse = ref(false)

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