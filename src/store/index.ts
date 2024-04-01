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
        label: '192.168.0.2',
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

store.watch(
  (state) => state.sessions,
  (val) => {
      console.log('CHANGE: ', val);
      localStorage.setItem('vue-chat-session', JSON.stringify(val));
  },
  {
      deep: true
  }
);

export default store;
export const actions = {
  initData: ({ dispatch }: { dispatch: Function }) => dispatch('INIT_DATA'),
  sendMessage: ({ dispatch }: { dispatch: Function }, content: string) => dispatch('SEND_MESSAGE', content),
  selectSession: ({ dispatch }: { dispatch: Function }, id: number) => dispatch('SELECT_SESSION', id),
  search: ({ dispatch }: { dispatch: Function }, value: string) => dispatch('SET_FILTER_KEY', value)
};
