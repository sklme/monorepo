<template>
  <h3>展示一些静态资源</h3>
  <img src="./win.apng.png" alt="胜利" />
  <img src="/src/components/TestComp/win.apng.png" alt="胜利" />
  <img src="@/components/TestComp/win.apng.png" alt="胜利" />
  <TestTSX />
</template>

<script lang="ts" setup>
import TestTSX from '@/components/TestComp/TestTSX';
</script>

<style lang="less" scoped></style>
