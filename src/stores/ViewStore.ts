import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'

export const useViewStore = defineStore('counter', () => {
    const mainNavVisible: Ref<boolean> = ref(true)

    return { mainNavVisible }
})
