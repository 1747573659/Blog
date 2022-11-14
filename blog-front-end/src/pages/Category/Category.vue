<script setup lang="ts">

import MdContainar from '@/components/MdContainar/MdContainar.vue'

</script>

<template>
  <div class="category-container">
    <div class="article-area">
      <div class="article">
        <MdContainar></MdContainar>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.category-container {
  max-width: 1140px;
  position: relative;
  margin: 0 auto;
  width: 100%;
  margin-top: 1.767rem;
  .article-area {
    position: relative;
    width: 820px;
    max-width: 100%;
    box-sizing: border-box;
    .article {
      border-radius: 4px 4px 0 0;
    }
  }
}
</style>
