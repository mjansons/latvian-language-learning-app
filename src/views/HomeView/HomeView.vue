<script setup lang="ts">
import SectionButton from '@/components/SectionButton.vue'
import useTestStore from '@/stores/TestStore'

const testStore = useTestStore()
</script>

<template>
    <div class="main-view-wrapper">
        <header>
                <div>
                    <h1>Welcome!</h1>
                    <div class="streak">
                        <img src="@/assets/icons/energy-bolt.svg" alt="day streak" />
                        <div>{{ testStore.testResults.streak }}</div>
                    </div>
                </div>
                <p>Pick up where you feel comfortable!</p>
            </header>
        <nav>
            <div class="lesson-wrapper">
                <SectionButton
                    sectionHeader="Level 1"
                    sectionName="Verbs"
                    path="level-1"
                ></SectionButton>
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
            </div>
        </nav>
    </div>
</template>

<style scoped>
.main-view-wrapper {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    overflow: hidden;
    padding: 32px 16px 0px;
}

nav {
    overflow: scroll;
}

@media only screen and (min-width: 800px) {
    .main-view-wrapper {
        padding-top: 32px;
        padding-right: 0px;
        padding-left: 32px;
    }
}
</style>
