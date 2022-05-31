<template>
  <div :class="$style.container">
    <PageStackContent :page-id="props.pageId" :stack-index="props.stackIndex"/>
  </div>
</template>

<script lang="ts" setup>
import PageStackContent from "./PageStackContent.vue";
import { provide } from 'vue'
const props = defineProps({
  pageId: {
    default: () => {
      return 'a'
    }
  },
  stackIndex: {
    default: () => {
      return 0
    }
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
</style>
