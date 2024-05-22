<script setup lang="ts">
import useViewStore from '@/stores/ViewStore'
import useTestStore from '@/stores/TestStore'
import ProgressHeader from '@/components/ProgressHeader.vue'
import { onBeforeRouteLeave } from 'vue-router'
import { ref, computed } from 'vue'

const LESSON_NAME = 'Irregular verbs - Past'
const LESSON_PARTS = 3

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
        .lessons['irregular-verbs-past']
        .completed = true

    testStore.setTestResults()
}
</script>
<template>
    <div class="lesson-view-wrapper">
        <ProgressHeader :headerName="LESSON_NAME" :totalParts="LESSON_PARTS" ref="child" />
        <main>
            <div v-if="currentPart === 1">
                <h1>Būt (to be)</h1>
                <p>
                    The table below shows the verb "būt" conjugations in past tense.
                </p>
                <table>
                    <tr>
                        <th>Pronoun</th>
                        <th>Past tense</th>
                    </tr>
                    <tr>
                        <td>es</td>
                        <td>b-iju</td>
                    </tr>
                    <tr>
                        <td>tu</td>
                        <td>b-iji</td>
                    </tr>
                    <tr>
                        <td>viņš, viņa</td>
                        <td>b-ija</td>
                    </tr>
                    <tr>
                        <td>mēs</td>
                        <td>b-ijām</td>
                    </tr>
                    <tr>
                        <td>jūs</td>
                        <td>b-ijāt</td>
                    </tr>
                    <tr>
                        <td>viņi, viņas</td>
                        <td>b-ija</td>
                    </tr>
                </table>
            </div>
            <div v-if="currentPart === 2">
                <h1>Dot (to give)</h1>
                <p>
                    The table below shows the verb "dot" conjugations in past tense.
                </p>
                <table>
                    <tr>
                        <th>Pronoun</th>
                        <th>Past tense</th>
                    </tr>
                    <tr>
                        <td>es</td>
                        <td>d-evu</td>
                    </tr>
                    <tr>
                        <td>tu</td>
                        <td>d-evi</td>
                    </tr>
                    <tr>
                        <td>viņš, viņa</td>
                        <td>d-eva</td>
                    </tr>
                    <tr>
                        <td>mēs</td>
                        <td>d-evām</td>
                    </tr>
                    <tr>
                        <td>jūs</td>
                        <td>d-evāt</td>
                    </tr>
                    <tr>
                        <td>viņi, viņas</td>
                        <td>d-eva</td>
                    </tr>
                </table>
            </div>
            <div v-if="currentPart === 3">
                <h1>Iet (to go)</h1>
                <p>
                    The table below shows the verb "iet" conjugations in past tense.
                </p>
                <table>
                    <tr>
                        <th>Pronoun</th>
                        <th>Present tense</th>
                    </tr>
                    <tr>
                        <td>es</td>
                        <td>gāju</td>
                    </tr>
                    <tr>
                        <td>tu</td>
                        <td>gāji</td>
                    </tr>
                    <tr>
                        <td>viņš, viņa</td>
                        <td>gāja</td>
                    </tr>
                    <tr>
                        <td>mēs</td>
                        <td>gājām</td>
                    </tr>
                    <tr>
                        <td>jūs</td>
                        <td>gājāt</td>
                    </tr>
                    <tr>
                        <td>viņi, viņas</td>
                        <td>gāja</td>
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
