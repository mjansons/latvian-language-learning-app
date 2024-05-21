<script setup lang="ts">
import SectionButton from '@/components/SectionButton.vue'
import useTestStore from '@/stores/TestStore'

const testStore = useTestStore()
</script>

<template>
    <nav>
        <header>
            <div>
                <h1>Welcome!</h1>
                <p>Pick up where you feel comfortable!</p>
            </div>
            <div class="streak">
                <img src="@/assets/icons/energy-bolt.svg" alt="day streak" />
                <div>{{ testStore.testResults.streak }}</div>
            </div>
        </header>
        <SectionButton sectionHeader="Level 1" sectionName="Verbs" path="level-1"></SectionButton>
        <SectionButton
            sectionHeader="Level 2"
            sectionName="Nouns and Articles"
            path="level-2"
            disabledPath="testResults.tests.level-1.completed"
        ></SectionButton>
        <SectionButton
            sectionHeader="Level 3"
            sectionName="Pronouns and Determiners"
            path="level-3"
            disabledPath="testResults.tests.level-2.completed"
        ></SectionButton>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    flex-direction: column;
}
</style>
