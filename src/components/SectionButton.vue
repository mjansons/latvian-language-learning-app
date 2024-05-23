<script setup lang="ts">
import useTestStore from '@/stores/TestStore'

interface Props {
    sectionHeader: string
    sectionName: string
    path: string
    disabledPath?: string
}

const testStore = useTestStore()

const props = defineProps<Props>()

function getValueByPath(obj: Record<string, any>, path: string): any {
    return path.split('.').reduce((o, p) => (o || {})[p], obj)
}
</script>

<template>
    <RouterLink :to="{ name: props.path }" tabindex="-1">
        <button
            type="button"
            :disabled="!!(props.disabledPath && getValueByPath(testStore, props.disabledPath) === false)"
        >
            <div class="info-container">
                <div class="button-header">
                    <img src="@/assets/icons/star.svg" alt="introduction to verbs" />
                    <h4>{{ props.sectionHeader }}</h4>
                </div>
                <h2>{{ props.sectionName }}</h2>
            </div>
            <img src="@/assets/icons/arrow-right-white.svg" alt="section button" />
        </button>
    </RouterLink>
</template>

<style scoped>
button {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-radius: 16px;
    border: 0.5px solid rgb(255, 255, 255);
    background-color: rgb(68, 68, 81);
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
    display: flex;
    flex-grow: 1;
    width: 100%;
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
