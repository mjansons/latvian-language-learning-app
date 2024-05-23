<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router'
import useViewStore from '@/stores/ViewStore'
import useTestStore from '@/stores/TestStore'
import Paywall from '@/components/Paywall.vue';

const viewStore = useViewStore()
const testStore = useTestStore()

onBeforeRouteLeave((to) => {
    const toPath = to.path
    const nextPath = /^\/level-\d+\/module-\d+\/.+/
    if (nextPath.test(toPath)) {
        viewStore.mainNavVisible = false
    }
})
</script>

<template>
    <div class="module-wrapper">
        <header>
            <RouterLink :to="{ name: 'level-1' }">
                <img src="@/assets/icons/arrow-left-white.svg" alt="back button" />
            </RouterLink>
            <h1>Regular Verbs</h1>
            <div class="streak" title="Day streak">
                <img src="@/assets/icons/energy-bolt.svg" alt="day streak" />
                <div>{{ testStore.testResults.streak }}</div>
            </div>
        </header>
        <Paywall></Paywall>
    </div>
</template>

<style scoped>
header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>
