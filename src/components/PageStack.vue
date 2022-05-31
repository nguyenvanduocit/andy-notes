<template>
  <div :class="$style.container">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="stylus" module>
.container
  display flex
  overflow-x: auto;
  overflow-y: hidden;
  flex-grow 1
  background #fafafa
</style>
