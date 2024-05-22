<script setup lang="ts">
import useViewStore from '@/stores/ViewStore'
import useTestStore from '@/stores/TestStore'
import ProgressHeader from '@/components/ProgressHeader.vue'
import { onBeforeRouteLeave } from 'vue-router'
import { ref, computed } from 'vue'

const LESSON_NAME = 'Irregular verbs - Present'
const LESSON_PARTS = 4

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
    testStore.testResults
        .tests['level-1']
        .modules['module-1']
        .lessons['irregular-verbs-present']
        .completed = true

    testStore.setTestResults()
}
</script>
<template>
    <div class="lesson-view-wrapper">
        <ProgressHeader :headerName="LESSON_NAME" :totalParts="LESSON_PARTS" ref="child" />
        <main>
            <div v-if="currentPart === 1">
                <h1>Irregular verbs</h1>
                <p>
                    Before diving into conjugation patterns, it is crucial to recognize irregular verbs
                    in Latvian. Though more than a hundred irregular verbs exist, a few of the most
                    commonly encountered ones are:
                </p>
                <table>
                    <tr>
                        <th>Verb</th>
                        <th>Meaning</th>
                    </tr>
                    <tr>
                        <td>iet</td>
                        <td>to go</td>
                    </tr>
                    <tr>
                        <td>dot</td>
                        <td>to give</td>
                    </tr>
                    <tr>
                        <td>būt</td>
                        <td>to be</td>
                    </tr>
                    <tr>
                        <td>nākt</td>
                        <td>to come</td>
                    </tr>
                    <tr>
                        <td>redzēt</td>
                        <td>to see</td>
                    </tr>
                    <tr>
                        <td>gulēt</td>
                        <td>to sleep</td>
                    </tr>
                </table>
            </div>
            <div v-if="currentPart === 2">
                <h1>Būt (to be)</h1>
                <p>
                    The table below shows the verb "būt" conjugations in present tense.
                </p>
                <table>
                    <tr>
                        <th>Pronoun</th>
                        <th>Present tense</th>
                    </tr>
                    <tr>
                        <td>es</td>
                        <td>es-mu</td>
                    </tr>
                    <tr>
                        <td>tu</td>
                        <td>es-i</td>
                    </tr>
                    <tr>
                        <td>viņš, viņa</td>
                        <td>ir</td>
                    </tr>
                    <tr>
                        <td>mēs</td>
                        <td>esam</td>
                    </tr>
                    <tr>
                        <td>jūs</td>
                        <td>es-at</td>
                    </tr>
                    <tr>
                        <td>viņi, viņas</td>
                        <td>ir</td>
                    </tr>
                </table>
            </div>
            <div v-if="currentPart === 3">
                <h1>Dot (to give)</h1>
                <p>
                    The table below shows the verb "dot" conjugations in present tense.
                </p>
                <table>
                    <tr>
                        <th>Pronoun</th>
                        <th>Present tense</th>
                    </tr>
                    <tr>
                        <td>es</td>
                        <td>do-du</td>
                    </tr>
                    <tr>
                        <td>tu</td>
                        <td>do-d</td>
                    </tr>
                    <tr>
                        <td>viņš, viņa</td>
                        <td>do-d</td>
                    </tr>
                    <tr>
                        <td>mēs</td>
                        <td>do-dam</td>
                    </tr>
                    <tr>
                        <td>jūs</td>
                        <td>do-dat</td>
                    </tr>
                    <tr>
                        <td>viņi, viņas</td>
                        <td>do-d</td>
                    </tr>
                </table>
            </div>
            <div v-if="currentPart === 4">
                <h1>Iet (to go)</h1>
                <p>
                    The table below shows the verb "iet" conjugations in present tense.
                </p>
                <table>
                    <tr>
                        <th>Pronoun</th>
                        <th>Present tense</th>
                    </tr>
                    <tr>
                        <td>es</td>
                        <td>eju</td>
                    </tr>
                    <tr>
                        <td>tu</td>
                        <td>ej</td>
                    </tr>
                    <tr>
                        <td>viņš, viņa</td>
                        <td>iet</td>
                    </tr>
                    <tr>
                        <td>mēs</td>
                        <td>ejam</td>
                    </tr>
                    <tr>
                        <td>jūs</td>
                        <td>ejat</td>
                    </tr>
                    <tr>
                        <td>viņi, viņas</td>
                        <td>iet</td>
                    </tr>
                </table>
            </div>
        </main>
        <footer>
            <button v-if="currentPart > 1" type="button" class="btn-back" @click="decrementProgress">
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
            <RouterLink v-if="currentPart === LESSON_PARTS" :to="{ name: 'module-1' }" tabindex="-1">
                <button type="button" class="btn-next" @click="updateAllData">Finish</button>
            </RouterLink>
        </footer>
    </div>
</template>

<style scoped></style>
