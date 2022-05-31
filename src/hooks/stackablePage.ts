import {ref} from "vue";
import { defineStore } from 'pinia'

export const useStackStore = defineStore('stack', () =>{
  const pageStack = ref<string[]>([
    '/index.md'
  ])
  function navigate(index: number, a: string) {
    if (index < pageStack.value.length - 1) {
      pageStack.value.splice(index + 1)
    }
    // find index of a in pageStack
    const i = pageStack.value.indexOf(a)
    if (i > -1) {
      pageStack.value.splice(i + 1)
    } else {
      pageStack.value.push(a)
    }
  }

  return { pageStack, navigate }
})
