<script setup lang="ts"></script>
<template>
    <header>
        <RouterLink :to="{ name: 'home' }">
            <img src="@/assets/icons/arrow-left-white.svg" alt="back button" />
        </RouterLink>
        <h1>Level 2</h1>
        <div class="streak">
            <img src="@/assets/icons/energy-bolt.svg" alt="day streak" />
            <div>0</div>
        </div>
    </header>
</template>

<style scoped></style>
