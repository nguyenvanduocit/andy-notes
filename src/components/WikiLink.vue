<template>
  <a @click.prevent="navigate(pageId)" :href="pageId">
    <slot/>
  </a>
</template>

<script lang="ts" setup>
import {inject} from "vue";
import {useStackStore} from "../hooks/stackablePage";
const pageStack = useStackStore();

const props = defineProps({
  pageId: {
    type: String,
    required: true
  }
})

const stackIndex = inject<number>("stackIndex")

const navigate = (pageId: string) => {
  pageStack.navigate(stackIndex ?? 0, pageId)
}

</script>

<style lang="stylus" module>
</style>
