<script setup lang="ts">
interface Props {
    sectionHeader: string
    sectionName: string
    path: string
}

const props = defineProps<Props>()
</script>

<template>
    <RouterLink :to="{ name: props.path }" tabindex="-1">
        <button type="button" class="btn-2">
            <div class="info-container">
                <div class="button-header">
                    <img src="@/assets/icons/star.svg" alt="introduction to verbs" />
                    <h4>{{ props.sectionHeader }}</h4>
                </div>
                <h2>{{ props.sectionName }}</h2>
                <div>------ 2/2</div>
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
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-radius: 16px;
    border: 0.5px solid rgb(255, 255, 255);
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
