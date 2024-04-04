<template>
  <el-container >
    <el-aside width="200px">
      <List />
    </el-aside>
    <div v-if="showMessage"><Message/></div>
    <div v-if="showAdd"><Add/></div>
    <div v-if="showDiscovery"><Discovery/></div>
  </el-container>
</template>

<script setup>
import { ref, watch } from 'vue';
import List from '@/components/list';
import Message from '@/components/message';
import Add from '@/components/add';
import Discovery from '@/components/discovery';
import { useRoute } from 'vue-router';

const route = useRoute();
const showMessage = ref(route.params.func === 'message');
const showAdd = ref(route.params.func === 'add');
const showDiscovery = ref(route.params.func === 'discovery');
watch(() => route.params.func, (newId, oldId) => {
  showMessage.value = newId === 'message';
  showAdd.value = newId === 'add';
  showDiscovery.value = newId === 'discovery';
})
</script>
