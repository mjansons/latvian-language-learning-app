<script setup lang="ts">
import useViewStore from '@/stores/ViewStore'
import useTestStore from '@/stores/TestStore'

interface Props {
    lessonHeader: string
    lessonName: string
    lessonInfo: string
    path: string
    disabledPath?: string
}

const props = defineProps<Props>()

const testStore = useTestStore()
const viewStore = useViewStore()

function getValueByPath(obj: Record<string, any>, path: string): any {
    return path.split('.').reduce((o, p) => (o || {})[p], obj)
}
</script>

<template>
    <RouterLink :to="{ name: props.path }" tabindex="-1">
        <button
            type="button"
            class="btn-2"
            @click="viewStore.mainNavVisible = false"
            :disabled="!!(props.disabledPath && getValueByPath(testStore, props.disabledPath) === false)"
        >
            <div class="info-container">
                <div class="button-header">
                    <img src="@/assets/icons/star.svg" alt="introduction to verbs" />
                    <h4>{{ props.lessonHeader }}</h4>
                </div>
                <h2>{{ props.lessonName }}</h2>
                <h4>{{ props.lessonInfo }}</h4>
            </div>
            <img src="@/assets/icons/arrow-right-white.svg" alt="lesson button" />
        </button>
    </RouterLink>
</template>

<style scoped>
button {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-radius: 16px;
    border: 0.5px solid rgb(255, 255, 255);
}

button:disabled{
    background-color: rgba(226, 133, 133, 0.362);
}

.info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
}
a {
    text-decoration: none;
}
h2,
h4 {
    margin: 0px;
}

.button-header {
    display: flex;
    flex-wrap: nowrap;
}
</style>
