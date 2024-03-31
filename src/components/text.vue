<template>
  <div class="text">
    <textarea placeholder="按 Ctrl + Enter 发送" v-model="content" @keyup="onKeyup"></textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const content = ref('hello world');
const store = useStore();

const onKeyup = (event) => {
  if (event.key === 'Enter' && event.ctrlKey) {
    store.commit('SEND_MESSAGE', content.value);
  }
};
</script>

<style lang="less" scoped>
.text {
  height: 160px;
  border-top: solid 1px #ddd;

  textarea {
    padding: 10px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-family: "Micrsofot Yahei";
    resize: none;
  }
}
</style>