import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'

const useViewStore = defineStore('counter', () => {
    const mainNavVisible: Ref<boolean> = ref(true)
    const value = 2;
    return { mainNavVisible, value }
})

export default useViewStore