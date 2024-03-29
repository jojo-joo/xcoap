<template>
    <div>
        <el-input class="input" v-model="input" type="file" placeholder="Please input" />
        <el-button class="button" type="primary">文件处理</el-button>
        <el-button type="primary" :icon="Edit" />
    </div>
</template>

<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import { ElButton, ElInput } from 'element-plus'
</script>

<style scoped>
.input {
    display: inline;
    margin: 20px 30px;
}

.button {
    width: 90px;
}
</style> 