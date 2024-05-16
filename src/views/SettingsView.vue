<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router'

onBeforeRouteLeave((to) => {
    const toPath = to.path
    if (toPath.startsWith('/level-1')) {
        console.log('Navigating to a level 1 page')
        // Add your logic for leaving the current route and navigating to a level 1 page
      }
})

</script>

<template>
    <main>
        <p>Settings View</p>
    </main>
</template>

<style scoped></style>
