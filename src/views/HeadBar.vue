<template>
    <div class="header_toolbars">
             <el-icon  class="closeMenu left" :size="16" 
             @click="$emit('updateNarBar')"><Fold /></el-icon>
             <span class="welcome left" >All-in-One Coap Client</span>
             <!-- <el-icon  class="setting right"
         ><setting/></el-icon> -->
     </div>
    
</template>

<script setup>
import { Fold } from '@element-plus/icons-vue'


</script>


<style scoped>
.welcome{
   display: inline-block;
   color: rgb(166,153,153);
   font-size: 18px;
}
.left{
   text-align: left;
}
.right{
   text-align: right;
}
.header_toolbars{
   line-height: 64px;
   height: 64px;
}
.toolbar_left{
   text-align: left;
}
.toolbar_right{
   text-align: right;
}
.setting:hover{
   background-color: rgb(246,246,246);
   cursor: pointer;
}
.tabs > .el-tabs__content {
   padding: 32px;
   color: #6b778c;
   font-size: 32px;
   font-weight: 600;
}
 .closeMenu{
   cursor: pointer;
   margin-right: 10px;
   height: 64px;
   width: 50px;
 }
 .closeMenu:hover
 {
   background-color: rgb(242,242,242);
 }
</style>