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
    <div class="module-wrapper">
        <header>
            <RouterLink :to="{ name: 'level-1' }">
                <img src="@/assets/icons/arrow-left-white.svg" alt="back button" />
            </RouterLink>
            <h1>Irregular Verbs</h1>
            <div class="streak" title="Day streak">
                <img src="@/assets/icons/energy-bolt.svg" alt="day streak" />
                <div>{{ testStore.testResults.streak }}</div>
            </div>
        </header>
        <label class="toggle">
            <input type="checkbox" v-model="practiceView" />
            <span class="slider"></span>
            <span :class="['label-left', { 'black-font': !practiceView }]">Learn</span>
            <span :class="['label-right', { 'black-font': practiceView }]">Practice</span>
        </label>
        <nav class="lesson-wrapper" v-if="!practiceView">
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
                disabledPath="testResults.tests.level-1.modules.module-1.lessons.introduction-to-verbs.completed"
            ></LessonButton>
            <LessonButton
                lessonHeader="Test"
                lessonName="Test - Present"
                lessonInfo="Test on irregular verbs in Present tense"
                path="test-present"
                disabledPath="testResults.tests.level-1.modules.module-1.lessons.irregular-verbs-present.completed"
            ></LessonButton>
            <LessonButton
                lessonHeader="Lesson 2"
                lessonName="Irregular verbs - Past"
                lessonInfo="Irregular verbs in Past tense"
                path="irregular-verbs-past"
                disabledPath="testResults.tests.level-1.modules.module-1.lessons.test-present.completed"
            ></LessonButton>
            <LessonButton
                lessonHeader="Test"
                lessonName="Test - Past"
                lessonInfo="Test on irregular verbs in Past tense"
                path="test-past"
                disabledPath="testResults.tests.level-1.modules.module-1.lessons.irregular-verbs-past.completed"
            ></LessonButton>
            <LessonButton
                lessonHeader="Lesson 3"
                lessonName="Irregular verbs - Future"
                lessonInfo="Irregular verbs in Future tense"
                path="irregular-verbs-future"
                disabledPath="testResults.tests.level-1.modules.module-1.lessons.test-past.completed"
            ></LessonButton>
            <LessonButton
                lessonHeader="Test"
                lessonName="Test - Future"
                lessonInfo="Test on irregular verbs in Future tense"
                path="test-future"
                disabledPath="testResults.tests.level-1.modules.module-1.lessons.irregular-verbs-future.completed"
            ></LessonButton>
        </nav>
        <nav class="lesson-wrapper" v-if="practiceView">
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
        </nav>
    </div>
</template>

<style scoped>
header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.lesson-wrapper {
    overflow: scroll;
}
</style>
