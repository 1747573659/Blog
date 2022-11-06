<script setup lang="ts">
import HomeCard from '@/components/HomeCard/HomeCard.vue'
import { HomeCardType } from '@/components/HomeCard/HomeCardTypes'
const articleList:HomeCardType[] = [
  { title: '一文弄懂redux', abstract: 'redux是一个非常好的库啊，有多好呢我也不知道啊', picUrl: 'src/assets/seraphine.jpg' },
  { title: 'react你看完这个你就懂了啊', abstract: 'redux是一个非常好的库啊，有多好呢我也不知道啊', picUrl: 'src/assets/seraphine.jpg' },
  { title: 'vuex的原理原来是这么简单！？', abstract: 'redux是一个非常好的库啊，有多好呢我也不知道啊', picUrl: 'src/assets/seraphine.jpg' },
  { title: '老夫敲代码就是一把梭之Vue的核心魅力', abstract: 'redux是一个非常好的库啊，有多好呢我也不知道啊', picUrl: 'src/assets/seraphine.jpg' }
]
</script>

<template>
  <div class="card-list">
    <home-card v-for="(article, index) in articleList" :key="article.title" :flex-dire-is-row="!!(index % 2)" :article="article"></home-card>
  </div>
</template>

<style scoped lang="scss">
.card-list {
  max-width: 50vw;
  margin: 0 auto;
}
</style>
