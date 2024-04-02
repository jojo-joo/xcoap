<!-- <template>
  <div class="list">
    <ul>
      <li v-for="item in sessions" :class="{ active: item.id === currentId }" @click="selectSession(item.id)">
        <img class="avatar" width="30" height="30" :alt="item.user.name" :src="item.user.img">
        <p class="name">{{ item.user.name }}</p>
      </li>
    </ul>
  </div>
</template> -->

<template>
  <el-input v-model="filterText" style="width: 100%; padding: 5px;" placeholder="Filter keyword" />
  <el-tree 
  style="max-width: 600px" 
  :data="sessions" 
  show-checkbox 
  node-key="id" 
  default-expand-all
  :expand-on-click-node="false" 
  @current-change="handleCurrentChange"/>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';

const store = useStore();
const sessions = store.state.sessions;
const currentId = store.state.currentSessionId;

const selectSession = (id: number) => {
  store.commit('SELECT_SESSION', id);
}

const handleCurrentChange = (node: any,) => {
  console.log('Current node changed:', node.id);
  selectSession(node.id);
}
</script>

<style></style>