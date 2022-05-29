import router from '@/router/router';
import store from '@/store';
import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:windi.css';

const app = createApp(App);

// 路由
app.use(router);
// 状态管理
app.use(store);

app.mount('#app');
