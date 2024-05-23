<script setup lang="ts">
import useViewStore from '@/stores/ViewStore'
import { ref } from 'vue'
import type { Ref } from 'vue'

interface Props {
    headerName: string
    totalParts: number
}
const props = defineProps<Props>()

const currentPart: Ref<number> = ref(1)

const progress: Ref<number> = ref(100 / props.totalParts)

const viewStore = useViewStore()

const incrementProgress = () => {
    const increment = 100 / props.totalParts
    if (progress.value + increment <= 100) {
        currentPart.value += 1
        progress.value += increment
    } else {
        progress.value = 100
    }
}

const decrementProgress = () => {
    const increment = 100 / props.totalParts
    if (progress.value - increment >= 0) {
        progress.value -= increment
        currentPart.value -= 1
    } else {
        progress.value = 0
    }
}

defineExpose({
    incrementProgress,
    decrementProgress,
    currentPart
})
</script>
<template>
    <header :style="{ '--progress-width': `${progress}%` }">
        <RouterLink :to="{ name: 'module-1' }" @click="viewStore.mainNavVisible = true">
            <img src="@/assets/icons/x.svg" alt="exit button" />
        </RouterLink>
        <h1>{{ props.headerName }}</h1>
        <RouterLink :to="{ name: 'settings' }" @click="viewStore.mainNavVisible = true">
            <img src="@/assets/icons/sprocket-1.svg" alt="settings" />
        </RouterLink>
    </header>
</template>

<style scoped>
header {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
header::after {
    content: '';
    position: absolute;
    background-color: var(--orange-100);
    height: 3px;
    width: var(--progress-width);
    left: 0px;
    bottom: -32px;
    transition: 0.3s ease-in-out;
}

img[alt='exit button'],
img[alt='settings'] {
    width: 24px;
    height: 24px;
}

img[alt='exit button']:hover,
img[alt='settings']:hover {
    opacity: 0.7;
}

img[alt='exit button']:active,
img[alt='settings']:active {
    opacity: 0.25;
}
</style>
