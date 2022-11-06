<script setup lang="ts">
import { useRouter } from 'vue-router'

// 路由跳转
const router = useRouter()
const linkTo = (path: string) => {
  router.push({
    path
  })
}

const headerItems = [
  { title: '首页', linkTo: '/home' },
  { title: '分类', linkTo: '/category' },
  { title: '个人主页', linkTo: '/profile' }
]
</script>

<template>
  <header class="header">
    <h2 class="blog-name">法外狂徒亚索</h2>
    <div class="item-list">
      <div class="item active" v-for="item in headerItems" :key="item.linkTo" @click="linkTo(item.linkTo)">{{ item.title }}</div>
    </div>
    <div class="user-info active">登出</div>
  </header>
</template>

<style scoped lang="scss">
.header {
  // width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 40px -8px rgb(0 0 0 / 50%);
  background-color: rgba(255, 255, 255, 0.95);
  .blog-name {
    width: 300px;
    text-align: center;
  }
  .item-list {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .item {
      padding: 0 30px;
      cursor: pointer;
      height: 100%;
      line-height: 80px;
    }
  }
  .user-info {
    width: 300px;
    text-align: right;
    padding: 20px;
  }
  .active:hover {
    color: #fe9600;
  }
}
</style>
