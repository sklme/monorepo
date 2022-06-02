<template>
  <h2 p="t-2 b-1" font="serif">这是第一个页面</h2>
  <p>使用的是sfc编写</p>
  <div>
    <p>第{{ x }}次点击</p>
    <button @click="clickX">点击我</button>
  </div>
  <div class="vuex">
    从vuex渲染
    <div>{{ testText }}</div>
    <button @click="modifyTest">trigger commit</button>
  </div>
  <div>
    <TestEvent @testEvent="testEvent" />
    <div>
      {{ renderText }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';
import { service } from '@/service';
const store = useStore<{
  test: string;
}>();

const x = ref(0);
function clickX() {
  x.value++;
}

const testText = computed(() => `xxxx ${store.state.test} xxxx`);
const modifyTest = () => {
  store.commit('modifyTest');
};

// 处理子组件的事件
const childEventText = ref('');
function testEvent(text: string) {
  childEventText.value = text;
}
const renderText = computed(() => {
  return childEventText.value ? `收到事件：${childEventText.value}` : '';
});

onMounted(async () => {
  // 请求
  const result = await service.request({
    method: 'GET',
    url: service.getApiUrl('server1'),
    params: {
      a: 1,
    },
    data: {
      b: 2,
    },
  });
  console.log(result);
});
</script>

<style lang="less" scoped>
.vuex {
  background-color: #eee;
}
</style>
