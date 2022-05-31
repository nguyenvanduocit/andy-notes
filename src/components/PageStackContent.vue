<template>
  <div :class="$style.container" ref="contentEl">
    <Markdown :source="content" class="content"></Markdown>
  </div>
</template>

<script lang="ts" setup>
import StackableLink from "./StackableLink.vue";
import {defineProps, onMounted, onUnmounted, ref} from 'vue'
import Markdown from "vue3-markdown-it"
import {useStackStore} from "../hooks/stackablePage";

const props = defineProps({
  stackIndex: {
    default: () => {
      return 0
    }
  },
  pageId: {
    default: () => {
      return "a.md"
    }
  }
})

const content = ref("")
import("../assets/" + props.pageId + "?raw").then(md => {
  content.value = md.default
})

const contentEl = ref<HTMLElement | undefined>(undefined)
const pageStack = useStackStore();

const onElementClicked = (e: Event) => {
  if (e.target?.tagName !== "A"){
    return
  }
  const pageId = (e.target as HTMLAnchorElement).href.replace(document.location.host, "").replace(document.location.protocol, "").replace("//", "")
  if (!pageId.endsWith(".md")){
    return
  }

  pageStack.navigate(props.stackIndex, pageId)
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
  padding: 32px
  color: #333;
  font-size: 17px;
  line-height: 24px;
  max-width 100%
  :global(p)
    margin-top: 0;
    margin-bottom: 1em;
.title
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.011%;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 16px;
  color: inherit;

</style>
