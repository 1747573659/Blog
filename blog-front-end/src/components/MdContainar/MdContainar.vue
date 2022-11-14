<script setup lang="ts">
import { html } from '../../pages/Blogs/first.md'
import { ref } from 'vue'

const mdHtml = ref(html)
console.log(mdHtml.value)
</script>

<template>
  <div class="md-wrap" v-html="mdHtml"></div>
</template>

<style lang="scss">
.md-wrap {
  line-height: 1.75;
  letter-spacing: 2px;
  background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, transparent 0), linear-gradient(1turn, rgba(50, 0, 0, 0.05) 3%, transparent 0);
  background-size: 20px 20px;
  background-position: 50%;
  word-break: break-word;
  font-weight: 400;
  font-size: 15px;
  overflow-x: hidden;
  color: #333;
  h1 {
    font-size: 23px;
    margin-bottom: 5px;
    font-weight: 700;
    padding-left: 10px;
    border-left: 5px solid #773098;
    margin: 0.67em 0;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    display: block;
  }
  h2 {
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 19px;
    font-weight: 700;
    padding-left: 10px;
    border-left: 5px solid #916dd5;
  }
  h3 {
    font-size: 14px;
    margin: 22px 0 16px;
  }
  h4 {
    font-size: 13px;
    margin: 20px 0 16px;
  }
  h5 {
    font-size: 12px;
    margin: 16px 0 16px;
    font-weight: 700;
  }
  p {
    line-height: inherit;
    margin-top: 22px;
    margin-bottom: 22px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  tr {
    background-color: #f5f5f5;
  }
  code {
    padding: 0.2em 0.5em;
    font-weight: 700;
    font-family: -apple-system-font, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif;
    font-size: 1em;
    color: #916dd5;
    word-break: break-word;
    overflow-x: auto;
    background-color: none;
    border-radius: 2px;
  }
  pre {
    display: block;
    white-space: pre;
    margin: 1em 0px;
    font-size: 1em;
    overflow: auto;
    line-height: 1.75;
    position: relative;
    background: #fff;
    color: #333;
    code {
      display: block;
      font-family: -apple-system-font, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif;
      font-weight: 400;
      font-size: 0.9em;
      padding: 16px 12px;
      margin: 0;
      color: #333;
      word-break: normal;
      overflow-x: auto;
      background: #f8f8f8;
      scroll-behavior: smooth;
    }
  }
  ul,
  ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    padding-left: 28px;
    list-style-type: circle;
  }
  li {
    margin-bottom: 0;
    list-style: inherit;
    padding-left: 6px;
  }
  blockquote {
    border-color: #48b6e2;
  }
  table {
    display: table;
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
  strong {
    color: #916dd5;
    font-weight: 700;
  }
  strong:before {
    content: '「';
  }
  strong:after {
    content: '」';
  }
}
</style>
