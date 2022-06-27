<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import PageStack from "./components/PageStack.vue";
import PageStackItem from "./components/PageStackItem.vue";
import {useStackStore} from "./hooks/stackablePage";

const { pageStack: pages } = useStackStore();

</script>

<template>
  <div :class="$style.container">
    <AppHeader/>
    <PageStack>
      <PageStackItem v-for="(pageId, index) in pages" :key="pageId" :stack-index="index" :page-id="pageId"/>
    </PageStack>
  </div>
</template>

<style lang="stylus" module>
.container
  height 100vh
  display flex
  flex-direction column
</style>
