<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import useViewStore from '@/stores/ViewStore'
import LessonButton from '@/components/LessonButton.vue'
import useTestStore from '@/stores/TestStore'

const viewStore = useViewStore()
const testStore = useTestStore()

onBeforeRouteLeave((to) => {
    const toPath = to.path
    const nextPath = /^\/level-\d+\/module-\d+\/.+/
    if (nextPath.test(toPath)) {
        viewStore.mainNavVisible = false
    }
})

const practiceView: Ref<boolean> = ref(false)
</script>

<template>
    <div class="module-wrap">
        <header>
            <RouterLink :to="{ name: 'level-1' }">
                <img src="@/assets/icons/arrow-left-white.svg" alt="back button" />
            </RouterLink>
            <h1>Irregular Verbs</h1>
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
        <nav class="module-nav" v-if="!practiceView">
            <LessonButton
                lessonHeader="Introduction"
                lessonName="Introduction to verbs"
                lessonInfo="How verbs are made"
                path="introduction-to-verbs"
            ></LessonButton>
            <LessonButton
                lessonHeader="Lesson 1"
                lessonName="Irregular verbs - Present"
                lessonInfo="Irregular verbs in present tense"
                path="irregular-verbs-present"
            ></LessonButton>
            <LessonButton
                lessonHeader="Test 1"
                lessonName="Test - Present"
                lessonInfo="Test on irregular verbs in Present tense"
                path="test-present"
            ></LessonButton>
            <LessonButton
                lessonHeader="Lesson 2"
                lessonName="Irregular verbs - Past"
                lessonInfo="Irregular verbs in Past tense"
                path="irregular-verbs-past"
            ></LessonButton>
            <LessonButton
                lessonHeader="Test 2"
                lessonName="Test - Past"
                lessonInfo="Test on irregular verbs in Past tense"
                path="test-past"
            ></LessonButton>
            <LessonButton
                lessonHeader="Lesson 3"
                lessonName="Irregular verbs - Future"
                lessonInfo="Irregular verbs in Future tense"
                path="irregular-verbs-future"
            ></LessonButton>
            <LessonButton
                lessonHeader="Test 3"
                lessonName="Test - Future"
                lessonInfo="Test on irregular verbs in Future tense"
                path="test-future"
            ></LessonButton>
        </nav>
        <nav class="module-nav" v-if="practiceView">
            <LessonButton
                lessonHeader="Test"
                lessonName="Test - Present"
                lessonInfo="Test on irregular verbs in Present tense"
                path="test-present"
            ></LessonButton>
            <LessonButton
                lessonHeader="Test 2"
                lessonName="Test - Past"
                lessonInfo="Test on irregular verbs in Past tense"
                path="test-past"
            ></LessonButton>
            <LessonButton
                lessonHeader="Test 3"
                lessonName="Test - Future"
                lessonInfo="Test on irregular verbs in Future tense"
                path="test-future"
            ></LessonButton>
        </nav>
    </div>
</template>

<style scoped>
.module-wrap {
    overflow: hidden;
}
.module-nav {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: calc(100vh - 211px);
    overflow: auto;
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
