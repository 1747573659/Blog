<script setup lang="ts">
import MyHeader from '@/components/Header/Header.vue';
</script>

<template>
  <my-header class="header-sticky"></my-header>
  <router-view></router-view>
</template>

<style scoped>
.header-sticky {
  position: sticky;
  position: -webkit-sticky;
  z-index: 2000;
  top: 0px
}
</style>
