<template>
  <h3>我是PageTwo的子组件</h3>
  <button @click="testEvent">点击触发事件</button>
</template>

<script setup lang="ts">
// 定义事件
const emit = defineEmits<{
  (e: 'testEvent', s: string): void;
}>();
// const emit = defineEmits(['testEvent']);
// 触发事件的函数
function testEvent() {
  emit('testEvent', '从未来传来的声音');
}
</script>

<style lang="less" scoped>
//
</style>
