<template>
  <div :class="$style.container">
    <PageStackContent :page-id="props.pageId"/>
  </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
const props = defineProps({
  pageId: {
    required: true
  },
  stackIndex: {
    default: 0
  }
})
provide("stackIndex", props.stackIndex)
</script>

<style lang="stylus" module>
.container
  flex-shrink: 0;
  width: 625px;
  max-width: 625px;
  position: sticky;
  flex-grow: 1;
  overflow-y: auto;
  border-left: 1px solid rgba(0,0,0,0.05);
  transition: box-shadow 100ms linear,opacity 75ms linear,transform 200ms
  background #ffffff
  padding: 30px
</style>
