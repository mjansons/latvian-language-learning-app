<script setup lang="ts"></script>
<template>
    <nav>
        <header>
            <RouterLink :to="{ name: 'home' }">
                <img src="@/assets/icons/arrow-left-white.svg" alt="back button" />
            </RouterLink>
            <h1>Level 1</h1>
            <div class="streak">
                <img src="@/assets/icons/energy-bolt.svg" alt="day streak" />
                <div>0</div>
            </div>
        </header>
        <RouterLink :to="{ name: 'module-1' }" tabindex="-1">
            <button type="button" class="btn-2">
                <img src="@/assets/icons/star.svg" alt="Module 1" /><span>Module 1</span>
            </button>
        </RouterLink>
        <RouterLink :to="{ name: 'module-2' }" tabindex="-1">
            <button type="button" class="btn-2">
                <img src="@/assets/icons/star.svg" alt="Module 2" /><span>Module 2</span>
            </button>
        </RouterLink>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    flex-direction: column;
}
</style>
