import { createStore } from 'vuex';

const now = new Date();

interface Tree {
  id: number
  label: string
  children?: Tree[]
  messages?: any
}

interface SessionState {
  currentSessionId: number;
  filterKey: string;
  sessions?: Tree[];
}

const store = createStore<SessionState>({
  state: {
    currentSessionId:  1,
    filterKey:  '',
    sessions: [
      {
        id: 1,
        label: '192.168.111.222',
        messages: [
          {
            content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
            date: now
          }, {
            content: '项目地址: https://github.com/coffcer/vue-chat',
            date: now
          }
        ]
      },
      {
        id: 2,
        label: '192.168.0.99',
        messages: []
      }
    ]
  },

  mutations: {
    INIT_DATA (state) {
        let data = localStorage.getItem('vue-chat-session');
        if (data) {
            state.sessions = JSON.parse(data);
        }
    },
    // 发送消息
    SEND_MESSAGE (state, content) {
        let session = state.sessions?.find(item => item.id === state.currentSessionId);
        session?.messages.push({
            content: content,
            date: new Date(),
            self: true
        });
    },
    // 选择会话
    SELECT_SESSION (state, id) {
        state.currentSessionId = id;
        console.log('state.currentSessionId:', state.currentSessionId);
    } ,
    // 搜索
    SET_FILTER_KEY (state, value) {
        state.filterKey = value;
    }
  }
});

export default store;
