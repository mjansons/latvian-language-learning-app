<script setup lang="ts">
import ProgressHeader from '@/components/ProgressHeader.vue'
import { onBeforeRouteLeave } from 'vue-router'
import { ref } from 'vue'
import useViewStore from '@/stores/ViewStore'
import TestTranslate from '@/components/TestTranslate.vue'
import type { Ref } from 'vue'
import presentTestData from '@/views/HomeView/LVL1/MOD1/presentTestData.json'

const viewStore = useViewStore()

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
</script>

<template>
    <ProgressHeader :headerName="TEST_NAME" :totalParts="TEST_PARTS" ref="child" />
    <template v-for="item in presentTestData" :key="item.id">
        <TestTranslate
            v-if="item.id === currentPart"
            :toTranslate="item.question"
            :correctAnswer="item.answer"
            @isOver="handleResult"
        >
            <table>
                <tr>
                    <th>Person</th>
                    <th>Present tense</th>
                </tr>
                <tr>
                    <td>es</td>
                    <td>e-ju</td>
                </tr>
                <tr>
                    <td>tu</td>
                    <td>e-j</td>
                </tr>
                <tr>
                    <td>viņš, viņa</td>
                    <td>iet</td>
                </tr>
                <tr>
                    <td>mēs</td>
                    <td>e-jam</td>
                </tr>
                <tr>
                    <td>jūs</td>
                    <td>e-jat</td>
                </tr>
                <tr>
                    <td>viņi, viņas</td>
                    <td>iet</td>
                </tr>
            </table>
        </TestTranslate>
    </template>
    <div v-if="testResultVisible" class="final-score">
        <h1>Test is over</h1>
        <p>Your final score: {{ finalResult }}/{{ TEST_PARTS }}</p>
        <RouterLink :to="{ name: 'module-1' }" tabindex="-1">
            <button type="button">Return</button>
        </RouterLink>
    </div>
</template>

<style scoped>
</style>
