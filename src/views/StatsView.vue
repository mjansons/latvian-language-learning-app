<script setup lang="ts">
import { computed } from 'vue'
import useTestStore from '@/stores/TestStore'

const testStore = useTestStore()

const accuracy = computed(() => {
    if (testStore.testResults.answeredQuestions === 0) {
        return 0
    }
    return Math.round(
        (testStore.testResults.correctQuestions / testStore.testResults.answeredQuestions) * 100
    )
})
</script>

<template>
    <div class="statistic">
        <div>
            <p>{{ testStore.testResults.streak }} Days</p>
            <h2>Streak</h2>
        </div>
        <img src="@/assets/icons/energy-bolt.svg" alt="" />
    </div>
    <div class="statistic">
        <div>
            <p>{{ accuracy }}%</p>
            <h2>Accuracy</h2>
        </div>
        <img src="@/assets/icons/energy-bolt.svg" alt="" />
    </div>
    <div class="statistic">
        <div>
            <p>{{ testStore.testResults.testsCompleted }}</p>
            <h2>Tests completed</h2>
        </div>
        <img src="@/assets/icons/energy-bolt.svg" alt="" />
    </div>
</template>

<style scoped></style>
