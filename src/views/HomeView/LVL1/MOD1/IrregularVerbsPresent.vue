<script setup lang="ts">
import { useViewStore } from '@/stores/ViewStore'
import { watchEffect } from 'vue'
const viewStore = useViewStore()

watchEffect(() => {
    if (document.referrer === document.location.href) {
        viewStore.mainNavVisible = false
        alert('Navigated back')
    }
})
</script>
<template>
    <header>
        <RouterLink :to="{ name: 'module-1' }">
            <img src="@/assets/icons/x.svg" alt="exit button" />
        </RouterLink>
        <h1>Irregular verbs - present</h1>
        <RouterLink :to="{ name: 'settings' }" @click="viewStore.mainNavVisible = true">
            <img src="@/assets/icons/sprocket-2.svg" alt="settings" />
        </RouterLink>
    </header>

    <footer>
        <button type="button" class="btn-back">Back</button>

        <RouterLink :to="{ name: 'irregular-verbs-present' }" tabindex="-1">
            <button type="button" class="btn-next">Next</button>
        </RouterLink>
    </footer>
</template>

<style scoped></style>
