<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router'
import useViewStore from '@/stores/ViewStore'
import SettingsDashboard from '@/components/SettingsDashboard.vue'

const viewStore = useViewStore()

onBeforeRouteLeave((to) => {
    const toPath = to.path
    const previousPath = /^\/level-\d+\/module-\d+\/.+/
    if (previousPath.test(toPath)) {
        viewStore.mainNavVisible = false
    }
})
</script>

<template>
    <SettingsDashboard></SettingsDashboard>
</template>

<style scoped>
.settings-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 32px 16px 16px;
    align-content: flex-start;
    overflow: hidden;
}
</style>
