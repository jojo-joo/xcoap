<template>
  <div>
    <h1>About</h1>
    <div class="btns">
            <el-button class="link-btn" type="primary" @click="goToLink('https://github.com/emqx/MQTTX')">
              <i class="iconfont icon-github"></i>
              GitHub →
            </el-button>
            <el-button class="link-btn" type="primary" @click="goToLink(mqttxWebsite)">
              <i class="iconfont icon-website"></i>
              About
            </el-button>
            <el-button class="link-btn" type="primary" @click="goToLink(faqLink)">
              <i class="iconfont icon-faq"></i>
              FAQ →
            </el-button>
          </div>
  </div>
</template>

<script lang="ts">

</script>

<style scoped>
/* Your component styles go here */
</style>
