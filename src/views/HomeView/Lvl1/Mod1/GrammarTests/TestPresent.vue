<script setup lang="ts">
import ProgressHeader from '@/components/ProgressHeader.vue'
import { onBeforeRouteLeave } from 'vue-router'
import { ref } from 'vue'
import useViewStore from '@/stores/ViewStore'
import useTestStore from '@/stores/TestStore'
import TestTranslate from '@/components/TestTranslate.vue'
import type { Ref } from 'vue'
import presentTestData from '@/views/HomeView/Lvl1/Mod1/GrammarTests/presentTestData.json'

const viewStore = useViewStore()
const testStore = useTestStore()

onBeforeRouteLeave((to) => {
    const toPath = to.path
    const previousPath = /^\/level-\d+\/module-\d+$/
    if (previousPath.test(toPath)) {
        viewStore.mainNavVisible = true
    }
})

const TEST_NAME = 'Test - Present'
const TEST_PARTS = 6

// importing component functions from ProgressHeader
const child = ref<InstanceType<typeof ProgressHeader> | null>(null)
const incrementProgress = () => child.value?.incrementProgress()

const currentPart: Ref<number> = ref(1)

const finalResult: Ref<number> = ref(0)

const testResultVisible: Ref<boolean> = ref(false)

function handleResult(isOver: boolean): void {
    if (isOver === true) {
        finalResult.value++
    }
    currentPart.value++

    if (currentPart.value > TEST_PARTS) {
        testResultVisible.value = true
    }
    incrementProgress()
}

function updateAllData() {
    testStore.updateStreak()
    testStore.testResults.tests['level-1'].modules['module-1'].lessons['test-present'].completed =
        true

    testStore.testResults.testsCompleted++
    testStore.testResults.answeredQuestions += TEST_PARTS
    testStore.testResults.correctQuestions += finalResult.value
    testStore.setTestResults()
}
</script>

<template>
    <div class="lesson-view-wrapper">
        <ProgressHeader :headerName="TEST_NAME" :totalParts="TEST_PARTS" ref="child" />
        <template v-for="item in presentTestData" :key="item.id">
            <TestTranslate
                v-if="item.id === currentPart"
                :toTranslate="item.question"
                :correctAnswer="item.answer"
                @isOver="handleResult"
            >
                <table class="four-column-table">
                    <tr>
                        <th>Vietniekvārds</th>
                        <th>Iet</th>
                        <th>Būt</th>
                        <th>Dot</th>
                    </tr>
                    <tr>
                        <td>es</td>
                        <td>eju</td>
                        <td>esmu</td>
                        <td>dodu</td>
                    </tr>
                    <tr>
                        <td>tu</td>
                        <td>ej</td>
                        <td>esi</td>
                        <td>dod</td>
                    </tr>
                    <tr>
                        <td>viņš, viņa</td>
                        <td>iet</td>
                        <td>ir</td>
                        <td>dod</td>
                    </tr>
                    <tr>
                        <td>mēs</td>
                        <td>ejam</td>
                        <td>esam</td>
                        <td>dodam</td>
                    </tr>
                    <tr>
                        <td>jūs</td>
                        <td>ejat</td>
                        <td>esat</td>
                        <td>dodat</td>
                    </tr>
                    <tr>
                        <td>viņi, viņas</td>
                        <td>iet</td>
                        <td>ir</td>
                        <td>dod</td>
                    </tr>
                </table>
            </TestTranslate>
        </template>
        <div v-if="testResultVisible" class="final-score">
            <h1>Test is over</h1>
            <p>Your final score: {{ finalResult }}/{{ TEST_PARTS }}</p>
            <RouterLink :to="{ name: 'module-1' }" tabindex="-1">
                <button type="button" @click="updateAllData">Return</button>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped></style>
