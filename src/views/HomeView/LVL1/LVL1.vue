<script setup lang="ts">
import SectionButton from '@/components/SectionButton.vue'
</script>
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
        <SectionButton
            sectionHeader="Module 1"
            sectionName="Irregular Verbs"
            path="module-1"
        ></SectionButton>
        <SectionButton
            sectionHeader="Module 2"
            sectionName="Regular Verbs"
            path="module-2"
        ></SectionButton>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    flex-direction: column;
}
</style>
