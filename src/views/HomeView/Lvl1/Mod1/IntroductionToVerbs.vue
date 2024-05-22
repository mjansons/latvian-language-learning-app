<script setup lang="ts">
import useViewStore from '@/stores/ViewStore'
import useTestStore from '@/stores/TestStore'
import ProgressHeader from '@/components/ProgressHeader.vue'
import { onBeforeRouteLeave } from 'vue-router'
import { ref, computed } from 'vue'

const LESSON_NAME = 'Introduction to verbs'
const LESSON_PARTS = 2

// importing component functions from ProgressHeader
const child = ref<InstanceType<typeof ProgressHeader> | null>(null)
const incrementProgress = () => child.value?.incrementProgress()
const decrementProgress = () => child.value?.decrementProgress()
const currentPart = computed(() => {
    return (child.value as InstanceType<typeof ProgressHeader>)?.currentPart
})

const viewStore = useViewStore()
const testStore = useTestStore()

onBeforeRouteLeave((to) => {
    const toPath = to.path
    const previousPath = /^\/level-\d+\/module-\d+$/
    if (previousPath.test(toPath)) {
        viewStore.mainNavVisible = true
    }
})

function updateAllData() {
    testStore.updateStreak()
    testStore.testResults.tests['level-1'].modules['module-1'].lessons[
        'introduction-to-verbs'
    ].completed = true

    testStore.setTestResults()
}
</script>
<template>
    <div class="lesson-view-wrapper">
        <ProgressHeader :headerName="LESSON_NAME" :totalParts="LESSON_PARTS" ref="child" />
        <main>
            <div v-if="currentPart === 1">
                <h1>Introduction</h1>
                <p>
                    In Latvian, verb conjugation is a fundamental aspect of the language, involving
                    changes in verb forms to express different tenses, aspects, moods, and personal
                    agreements. The conjugation process in Latvian is unique, reflecting the
                    language's distinct grammatical structure.
                </p>
                <p>
                    Verbs in Latvian undergo transformations to indicate time (past, present,
                    future), as well as to agree with the subject in terms of person and number. For
                    example, the verb "dzīvot" (to live) changes as "Es dzīvoju" (I live) in the
                    present tense and becomes "Es dzīvoju" (I lived) in the past tense. Notably,
                    Latvian verbs are also influenced by aspect - whether the action is completed or
                    ongoing. These changes are often marked by alterations in verb endings and
                    sometimes by modifications in the stem itself.
                </p>
            </div>
            <div v-if="currentPart === 2">
                <h1>Structure and Classification of Latvian Verbs</h1>
                <p>
                    Latvian verbs can be divided into two main groups: regular and irregular verbs.
                    Unlike their irregular counterparts, regular verbs follow a consistent pattern
                    in their conjugation. Latvian regular verbs are further classified into three
                    conjugation groups, which we will discuss later.
                </p>
                <p>
                    Each conjugation group has specific rules and patterns for conjugating verbs in
                    various tenses and moods.
                </p>
                <p>The pronouns translate as per below.</p>
                <table class="two-column-table">
                    <tr>
                        <th>Pronoun</th>
                        <th>Vietniekvārds</th>
                    </tr>
                    <tr>
                        <td>I</td>
                        <td>es</td>
                    </tr>
                    <tr>
                        <td>you</td>
                        <td>tu</td>
                    </tr>
                    <tr>
                        <td>he, she</td>
                        <td>viņš, viņa</td>
                    </tr>
                    <tr>
                        <td>we</td>
                        <td>mēs</td>
                    </tr>
                    <tr>
                        <td>you (pl.)</td>
                        <td>jūs</td>
                    </tr>
                    <tr>
                        <td>they(m., f.)</td>
                        <td>viņi, viņas</td>
                    </tr>
                </table>
            </div>
        </main>
        <footer>
            <button
                v-if="currentPart > 1"
                type="button"
                class="btn-back"
                @click="decrementProgress"
            >
                Back
            </button>
            <button
                v-if="currentPart !== LESSON_PARTS"
                type="button"
                class="btn-next"
                @click="incrementProgress"
            >
                Next
            </button>
            <RouterLink
                v-if="currentPart === LESSON_PARTS"
                :to="{ name: 'module-1' }"
                tabindex="-1"
            >
                <button type="button" class="btn-next" @click="updateAllData">Finish</button>
            </RouterLink>
        </footer>
    </div>
</template>

<style scoped></style>
