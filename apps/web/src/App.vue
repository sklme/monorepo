<template>
  <div class="app">
    <div class="title">点击跳到不同的页面</div>
    <div class="routes">
      <router-link class="router-link" to="/">PageOne</router-link>
      <router-link class="router-link" to="/page-2">PageTwo</router-link>
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.app {
  text-align: center;
}

.routes {
  margin-top: 16px;
}

.router-link {
  padding: 4px 8px;
  background-color: #ccc;
  border-radius: 4px;
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
}
</style>
