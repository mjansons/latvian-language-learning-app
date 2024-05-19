<script setup lang="ts">
import useViewStore from '@/stores/ViewStore'

const viewStore = useViewStore()
</script>
<template>
    <header>
        <RouterLink :to="{ name: 'module-1' }" @click="viewStore.mainNavVisible = true">
            <img src="@/assets/icons/x.svg" alt="exit button" />
        </RouterLink>
        <h1>Irregular verbs - Future</h1>
        <RouterLink :to="{ name: 'settings' }" @click="viewStore.mainNavVisible = true">
            <img src="@/assets/icons/sprocket-2.svg" alt="settings" />
        </RouterLink>
    </header>

    <footer>
        <button type="button" class="btn-back">Back</button>

        <RouterLink :to="{ name: 'test-future' }" tabindex="-1">
            <button type="button" class="btn-next">Next</button>
        </RouterLink>
    </footer>
</template>

<style scoped></style>
