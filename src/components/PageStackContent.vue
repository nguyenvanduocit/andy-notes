<template>
  <div :class="$style.container" ref="contentEl">
    <component :is="contentComponent"/>
  </div>
</template>

<script lang="ts" setup>
import { shallowRef, onMounted, onUnmounted, ref, inject} from 'vue'
import {useStackStore} from "../hooks/stackablePage";

const props = defineProps({
  pageId: {
    required: true
  }
})

// inject stackIndex to the content component
const stackIndex = inject<number>("stackIndex")

const contentComponent = shallowRef()

import("../content/" + props.pageId).then(md => {
  contentComponent.value = md.default
})

const contentEl = ref<HTMLElement | undefined>(undefined)
const pageStack = useStackStore();

const onElementClicked = (e: Event) => {
  const element = e.target! as HTMLAnchorElement
  if (element?.tagName !== "A"){
    return
  }

  const pageId = element.href.replace(document.location.host, "").replace(document.location.protocol, "").replace("//", "")
  if (!pageId.endsWith(".md")){
    return
  }

  pageStack.navigate(stackIndex ?? 0, decodeURIComponent(pageId))
  e.preventDefault()
}

onMounted(() => {
  contentEl.value?.addEventListener("click", onElementClicked);
});

onUnmounted(() => {
  contentEl.value?.removeEventListener("click", onElementClicked);
});

</script>

<style lang="stylus" module>
.container
  color: #333;
  font-size: 17px;
  line-height: 24px;
  max-width 100%
  :global
    p
      margin-top: 0;
      margin-bottom: 1em;
    h1
      font-size: 28px;
      line-height: 40px;
      letter-spacing: 0.011%;
      font-weight: 600;
      margin-top: 0;
      margin-bottom: 16px;
      color: inherit;
</style>
