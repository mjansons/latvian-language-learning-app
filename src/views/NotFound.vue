<script setup lang="ts">
import { RouterLink, onBeforeRouteLeave } from 'vue-router';
import useViewStore from '@/stores/ViewStore'

const viewStore = useViewStore()

viewStore.mainNavVisible = false

onBeforeRouteLeave((to) => {
    const toPath = to.path
    const nextPath = /^\/level-\d+\/module-\d+\/.+/
    if (nextPath.test(toPath)) {
        viewStore.mainNavVisible = false
    }
})

</script>
<template>
    <div>
        <h1>404, Not Found!</h1>
        <RouterLink :to="{ name: 'home' }"
            ><button type="button" class="btn-next" @click="viewStore.mainNavVisible = true">Return</button></RouterLink
        >
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}
</style>
