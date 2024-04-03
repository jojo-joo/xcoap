<template>
  <el-container style="background-color: #eee;">
  <el-main style="padding: 0px;">
    <el-scrollbar wrap-class="scrollbar-wrap" ref="scrollbarRef">
      <div class="message">
        <ul v-if="session">
          <li v-for="item in session.messages">
            <div>
              <p class="time"><span>{{ timeFilter(item.date) }}</span></p>
              <div class="text">{{ item.content }}</div>
            </div>
            <div class="self">
              <p class="time"><span>{{ timeFilter(item.date) }}</span></p>
              <div class="text">{{ item.content }}</div>
            </div>
          </li>
        </ul>
      </div>
    </el-scrollbar>
  </el-main>
  <el-footer height="160px" style="padding: 0px;">
    <div class="text">
      <textarea placeholder="Ctrl + Enter To Send" v-model="content" @keyup="onKeyup"></textarea>
    </div>
  </el-footer>
</el-container>
</template>

<script setup>
import { ref, watch, computed, nextTick, onMounted } from 'vue';
import { useStore } from 'vuex';
import { ElScrollbar } from 'element-plus';

const content = ref('');

const onKeyup = (event) => {
  if (event.key === 'Enter' && event.ctrlKey) {
    store.commit('SEND_MESSAGE', content.value);
    nextTick(() => {
      scrollToBottom();
    });
  }
};

const store = useStore();
const sessions = ref(store.state.sessions);
const currentSessionId = ref(store.state.currentSessionId);
let session = ref(sessions.value.find(s => s.id === currentSessionId.value));

const scrollbarRef = ref(null);

const scrollToBottom = () => {
  if (scrollbarRef.value) {
    const containerEl = scrollbarRef.value.$el.querySelector('.el-scrollbar__wrap');
    const bottomPosition = containerEl.scrollHeight - containerEl.clientHeight;
    scrollbarRef.value.setScrollTop(bottomPosition);
    console.log("scrollToBottom");
  }
};

onMounted(() => {
  scrollToBottom();
});

watch(() => store.state.sessions, (newValue) => {
  scrollToBottom();
});

watch(() => store.state.currentSessionId, (newValue) => {
  currentSessionId.value = newValue;
  session.value = sessions.value.find(s => s.id === currentSessionId.value);
});

const timeFilter = computed(() => {
  return (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };
});

</script>

<style lang="less" scoped>
.text {
  height: 100%;
  display: flex;

  textarea {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    outline: none;
    resize: none;
    overflow: hidden;
  }
}
.message {
  padding: 10px 15px;
  overflow-y: none;
  background-color: #eee;
  font-size: 12px;

  ul {
    padding: 0;
  }

  li {
    margin-bottom: 15px;
    list-style-type: none;
  }

  .time {
    margin: 7px 0;
    text-align: left;

    >span {
      display: inline-block;
      padding: 0 18px;
      color: #fff;
      border-radius: 2px;
      background-color: #dcdcdc;
    }
  }

  .text {
    display: inline-block;
    position: relative;
    padding: 0 10px;
    max-width: ~'calc(100% - 40px)';
    min-height: 30px;
    line-height: 2.5;
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
    .time {
      text-align: right;
    }

    text-align: right;

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