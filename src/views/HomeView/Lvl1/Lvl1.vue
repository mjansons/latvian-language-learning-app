<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import SectionButton from '@/components/SectionButton.vue'
import LessonButton from '@/components/LessonButton.vue'
import useTestStore from '@/stores/TestStore'

const testStore = useTestStore()

const practiceView: Ref<boolean> = ref(false)
</script>
<template>
    <div class="level-view-wrapper">
        <header>
            <RouterLink :to="{ name: 'home' }">
                <img src="@/assets/icons/arrow-left-white.svg" alt="back button" />
            </RouterLink>
            <h1>Level 1</h1>
            <div class="streak" title="Day streak">
                <img src="@/assets/icons/energy-bolt.svg" alt="day streak" />
                <div>{{ testStore.testResults.streak }}</div>
            </div>
        </header>
        <label class="toggle" tabindex="0" @keydown.enter="practiceView = !practiceView">
            <input type="checkbox" v-model="practiceView"/>
            <span class="slider"></span>
            <span :class="['label-left', { 'black-font': !practiceView }]">Learn</span>
            <span :class="['label-right', { 'black-font': practiceView }]">Practice</span>
        </label>
        <div v-if="!practiceView" class="lesson-wrapper">
            <SectionButton
                sectionHeader="Module 1"
                sectionName="Irregular Verbs"
                path="module-1"
            ></SectionButton>
            <SectionButton
                sectionHeader="Module 2"
                sectionName="Regular Verbs"
                path="module-2"
                disabledPath="testResults.tests.level-1.modules.module-1.completed"
            ></SectionButton>
        </div>
        <div v-if="practiceView" class="lesson-wrapper">
            <LessonButton
                lessonHeader="Test"
                lessonName="Test - Present"
                lessonInfo="Test on irregular verbs in Present tense"
                path="test-present"
                disabledPath="testResults.tests.level-1.modules.module-1.lessons.irregular-verbs-present.completed"
            ></LessonButton>
            <LessonButton
                lessonHeader="Test"
                lessonName="Test - Past"
                lessonInfo="Test on irregular verbs in Past tense"
                path="test-past"
                disabledPath="testResults.tests.level-1.modules.module-1.lessons.irregular-verbs-past.completed"
            ></LessonButton>
            <LessonButton
                lessonHeader="Test"
                lessonName="Test - Future"
                lessonInfo="Test on irregular verbs in Future tense"
                path="test-future"
                disabledPath="testResults.tests.level-1.modules.module-1.lessons.irregular-verbs-future.completed"
            ></LessonButton>
        </div>
    </div>
</template>

<style scoped>

header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.lesson-wrapper {
    overflow: auto;
}
</style>
