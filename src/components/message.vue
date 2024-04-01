<template>
  <div class="message" v-scroll-bottom="$store.state.sessions.messages">
    <input v-model="currentSessionId"/>
    <ul v-if="session">
      <li v-for="item in session.messages">
        <p class="time">
          <span>{{ item.date | time }}</span>
        </p>
        <div class="main self">
          <div class="text">{{ item.content }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'; 
import { useStore } from 'vuex';

const store = useStore();
const sessions = ref(store.state.sessions);
const currentSessionId = ref(store.state.currentSessionId);
let session = ref(sessions.value.find(s => s.id === currentSessionId.value));

watch(() => store.state.currentSessionId, (newValue) => {
  currentSessionId.value = newValue;
  session.value = sessions.value.find(s => s.id === currentSessionId.value);
});
//const session = computed(() => sessions.find(session => session.id === currentSessionId));
// console.log(session);
// filters: {
//     // 将日期过滤为 hour:minutes
//     time (date) {
//         if (typeof date === 'string') {
//             date = new Date(date);
//         }
//         return date.getHours() + ':' + date.getMinutes();
//     }
// },
// directives: {
//     // 发送消息后滚动到底部
//     'scroll-bottom' () {
//         this.vm.$nextTick(() => {
//             this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight;
//         });
//     }
// }
</script>

<style lang="less" scoped>
.message {
  padding: 10px 15px;
  overflow-y: scroll;

  li {
    margin-bottom: 15px;
  }

  .time {
    margin: 7px 0;
    text-align: center;

    >span {
      display: inline-block;
      padding: 0 18px;
      font-size: 12px;
      color: #fff;
      border-radius: 2px;
      background-color: #dcdcdc;
    }
  }

  .avatar {
    float: left;
    margin: 0 10px 0 0;
    border-radius: 3px;
  }

  .text {
    display: inline-block;
    position: relative;
    padding: 0 10px;
    max-width: ~'calc(100% - 40px)';
    min-height: 30px;
    line-height: 2.5;
    font-size: 12px;
    text-align: left;
    word-break: break-all;
    background-color: #fafafa;
    border-radius: 4px;

    &:before {
      content: " ";
      position: absolute;
      top: 9px;
      right: 100%;
      border: 6px solid transparent;
      border-right-color: #fafafa;
    }
  }

  .self {
    text-align: right;

    .avatar {
      float: right;
      margin: 0 0 0 10px;
    }

    .text {
      background-color: #b2e281;

      &:before {
        right: inherit;
        left: 100%;
        border-right-color: transparent;
        border-left-color: #b2e281;
      }
    }
  }
}
</style>