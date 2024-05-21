<script setup lang="ts">
import useTestStore from '@/stores/TestStore'

const testStore = useTestStore()
</script>
<template>
    <header>
        <RouterLink :to="{ name: 'home' }">
            <img src="@/assets/icons/arrow-left-white.svg" alt="back button" />
        </RouterLink>
        <h1>Level 3</h1>
        <div class="streak">
            <img src="@/assets/icons/energy-bolt.svg" alt="day streak" />
            <div>{{ testStore.testResults.streak }}</div>
        </div>
    </header>
</template>

<style scoped></style>
