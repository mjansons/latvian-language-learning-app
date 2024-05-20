import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'

const useViewStore = defineStore('view', () => {
    const mainNavVisible: Ref<boolean> = ref(true)
    const hintsVisible: Ref<boolean> = ref(true)
    return { mainNavVisible, hintsVisible }
})

export default useViewStore
