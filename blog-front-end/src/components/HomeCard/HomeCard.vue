<script setup lang="ts">
import { toRefs } from 'vue'
import { HomeCardType } from './HomeCardTypes'

// article使文章栏目的数据
// flexDireIsRow是每个卡片的图片左右布局的控制位
const props = defineProps<{
  article: HomeCardType
  flexDireIsRow: boolean
}>()
const { article } = toRefs(props)
</script>

<template>
  <article class="wrap card-show" :class="{ 'flex-dire-is-row': flexDireIsRow }">
    <div class="content">
      <div class="title">
        <h3>{{ article.title }}</h3>
      </div>
      <div class="abstract">
        <p>{{ article.abstract }}</p>
      </div>
    </div>
    <div class="pic-wrap">
      <img class="pic" :src="article.picUrl" alt="" />
    </div>
  </article>
</template>

<style>
.card-show {
  transition: background 1s;
  animation: card-show 0.5s;
  opacity: 1;
}
</style>

<style scoped lang="scss">
.wrap:hover {
  box-shadow: 0 5px 10px 5px rgb(110 110 110 / 40%);
  .pic {
    transform: scale(1.15);
  }
  h3 {
    color: #fe9600;
  }
}
.wrap {
  width: 50vw;
  display: flex;
  height: 300px;
  justify-content: space-between;
  border-radius: 10px;
  margin: 20px 0px 40px;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0 1px 20px -6px rgb(0 0 0 / 50%);
  .content {
    padding: 20px 40px;
    flex: 1; // 充满剩余空间
    .title {
      h3 {
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        word-wrap: break-word;
      }
    }
    .abstract {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      height: 67.5px;
      overflow: hidden;
    }
  }
  .pic-wrap {
    width: 50%;
    height: 300px;
    overflow: hidden;
    border-radius: 0 10px 10px 0;
    .pic {
      width: 100%;
      height: 100%;
      transition: all 0.35s ease-in-out;
    }
  }
}
.flex-dire-is-row {
    flex-direction: row-reverse;
  .pic-wrap {
    border-radius: 10px 0 0 10px;
  }
}
</style>
