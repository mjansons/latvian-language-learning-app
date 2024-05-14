<script setup lang="ts"></script>

<template>
        <nav>
            <div class="header">
                <div>
                    <h1>Welcome!</h1>
                    <p>Pick up where you feel comfortable!</p>
                </div>
                <div class="streak">
                    <img src="@/assets/icons/energy-bolt.svg" alt="day streak" />
                    <div>0</div>
                </div>
            </div>
            <RouterLink :to="{ name: 'level-1' }" tabindex="-1">
                <button type="button" class="btn-2">
                    <img src="@/assets/icons/star.svg" alt="Level 1" /><span>Level 1</span>
                </button>
            </RouterLink>
            <RouterLink :to="{ name: 'level-2' }" tabindex="-1">
                <button type="button" class="btn-2">
                    <img src="@/assets/icons/star.svg" alt="Level 2" /><span>Level 2</span>
                </button>
            </RouterLink>
            <RouterLink :to="{ name: 'level-3' }" tabindex="-1">
                <button type="button" class="btn-2">
                    <img src="@/assets/icons/star.svg" alt="Level 3" /><span>Level 3</span>
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
