<script setup lang="ts">
import useViewStore from '@/stores/ViewStore'
import { ref } from 'vue'
import type { Ref } from 'vue'
import SettingsDashboard from './SettingsDashboard.vue'

interface Props {
    headerName: string
    totalParts: number
}
const props = defineProps<Props>()

const currentPart: Ref<number> = ref(1)

const progress: Ref<number> = ref(100 / props.totalParts)

const viewStore = useViewStore()

const showSettings: Ref<boolean> = ref(false)

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
        <img
            src="@/assets/icons/sprocket-1.svg"
            alt="settings"
            @click="showSettings = !showSettings"
            @keydown.enter="showSettings = !showSettings"
            tabindex="0"
        />
    </header>
    <div v-if="showSettings" class="setting">
        <div class="setting-content">
            <SettingsDashboard></SettingsDashboard>
            <button type="button" class="btn-next" @click="showSettings = !showSettings">
                close
            </button>
        </div>
    </div>
</template>

<style scoped>
header {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.settings-header {
    margin-bottom: 32px;

    & p {
        display: none;
    }
}

.settings-wrapper {
    padding: 0;
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

.setting {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--black-a90);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    overflow: auto;
}

.setting-content {
    background-color: var(--black-100);
    padding: 40px;
    border-radius: 16px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 32px;

    & .btn-next {
        align-self: flex-end;
    }
}
</style>
