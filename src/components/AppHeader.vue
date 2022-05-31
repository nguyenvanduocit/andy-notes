<template>
  <div :class="$style.container">
    <h1 :class="$style.title">Andy Note</h1>
  </div>
</template>

<script lang="ts" setup>
import StackableLink from "./StackableLink.vue";
</script>

<style lang="stylus" module>
.container
  width: 100%;
  min-height: 44px;
  z-index: 5;
  padding 10px
  background-color: white;
  border-bottom: 1px solid #dadada;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
.title
  padding 0
  margin 0
  font-size 17px
  font-weight: 500
</style>
