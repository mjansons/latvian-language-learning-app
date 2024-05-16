<script setup lang="ts"></script>
<template>
    <header>
        <RouterLink :to="{ name: 'level-1' }">
            <img src="@/assets/icons/arrow-left-white.svg" alt="back button" />
        </RouterLink>
        <h1>Regular Verbs</h1>
        <div class="streak">
            <img src="@/assets/icons/energy-bolt.svg" alt="day streak" />
            <div>0</div>
        </div>
    </header>
</template>

<style scoped></style>
