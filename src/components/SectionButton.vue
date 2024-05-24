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
            :disabled="
                !!(props.disabledPath && getValueByPath(testStore, props.disabledPath) === false)
            "
        >
            <div class="info-container">
                <div class="button-info">
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
    border: 1px solid var(--orange-5);
    background-color: var(--black-500);
}

button:hover {
    border: 1px solid var(--orange-a20);
    background-color: var(--orange-a10);
}

button:active {
    border: 1px solid var(--orange-100);
    background-color: var(--black-500);
}

button:disabled {
    cursor: not-allowed;
    background-color: var(--black-500);
    opacity: 0.5;
}

button:disabled:active {
    background-color: var(--black-500);
    border: 1px solid var(--orange-a20);
}

.info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 4px;
}
a {
    text-decoration: none;
    display: flex;
    flex-grow: 1;
    width: 100%;
}

h2 {
    font-family: Satoshi-Medium;
    font-size: 16px;
}

h4 {
    font-family: Satoshi-Light;
    font-size: var(--small);
    color: var(--orange-100);
}
h2,
h4 {
    margin: 0px;
}

.button-info {
    display: flex;
    flex-wrap: nowrap;
    gap: 4px;
}
</style>
