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
    <nav>
        <header>
            <RouterLink :to="{ name: 'home' }">
                <img src="@/assets/icons/arrow-left-white.svg" alt="back button" />
            </RouterLink>
            <h1>Level 1</h1>
            <div class="streak">
                <img src="@/assets/icons/energy-bolt.svg" alt="day streak" />
                <div>{{ testStore.testResults.streak }}</div>
            </div>
        </header>
        <label class="toggle">
            <input type="checkbox" v-model="practiceView" />
            <span class="slider"></span>
            <span class="label-left">Learn</span>
            <span class="label-right">Practice</span>
        </label>
        <div v-if="!practiceView" class="module-nav">
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
        <div v-if="practiceView" class="module-nav">
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
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    flex-direction: column;
}
.toggle {
    cursor: pointer;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    background-color: #353142;
    border-radius: 8px;
}

.toggle input {
    display: none;
}

.slider {
    position: absolute;
    width: 50%;
    height: 100%;
    transition: transform 0.5s ease-in-out;
}

.slider:before {
    border-radius: 8px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(57, 84, 74);
}

.toggle input:checked + .slider {
    transform: translateX(100%);
}

.label-left,
.label-right {
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: rgb(251, 251, 251);
    width: 50%;
    z-index: 2;
}
</style>
