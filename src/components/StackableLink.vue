<template>
  <div :class="$style.container" @click.prevent="pageStack.navigate(stackIndex, props.pageId)">
    <slot/>
    <span v-text="pageStack.count"></span>
  </div>
</template>

<script lang="ts" setup>
  import {useStackStore} from "../hooks/stackablePage";
  import {inject} from "vue";

  const pageStack = useStackStore();
  const stackIndex = inject("stackIndex", 0);
  const props = defineProps({
    pageId: {
      default: () => {
        return ""
      }
    }
  })
</script>

<style lang="stylus" module>
.container
  cursor pointer
  display inline-block
  text-decoration underline
  color #0971c0
  &:hover
    color #38a1f5
</style>
