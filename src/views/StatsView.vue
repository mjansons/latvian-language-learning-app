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
    <div class="stats-wrapper">
        <header>
            <h1>Statistics</h1>
            <p>See how you progress over time</p>
        </header>
        <div class="stats-content">
            <div class="statistic">
                <div class="stat-info">
                    <p>{{ testStore.testResults.streak }} Days</p>
                    <h2>Streak</h2>
                </div>
                <img src="@/assets/icons/lightning-stats.svg" alt="" />
            </div>
            <div class="statistic">
                <div class="stat-info">
                    <p>{{ accuracy }}%</p>
                    <h2>Accuracy</h2>
                </div>
                <img src="@/assets/icons/lightning-stats.svg" alt="" />
            </div>
            <div class="statistic">
                <div class="stat-info">
                    <p>{{ testStore.testResults.testsCompleted }}</p>
                    <h2>Tests completed</h2>
                </div>
                <img src="@/assets/icons/lightning-stats.svg" alt="" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.stats-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 32px 16px 0 16px;
    overflow: hidden;
}

.stats-content {
    display: flex;
    flex-direction: row;
    gap: 16px;
    overflow: scroll;
    flex-wrap: wrap;
}

.statistic {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--black-500);
    flex: 1 1 0;
    border-radius: 12px;
    padding: 16px;
    min-width: 170px;
    border: 1px solid var(--orange-5);

    & img {
        width: 36px;
        height: 36px;
        margin-left: 8px;
    }
    & h2 {
        font-size: var(--medium);
    }
    & p {
        font-size: var(--small);
        color: var(--orange-100);
    }
    & h2,
    p {
        margin: 0px;
        white-space: nowrap;
    }
}

.stat-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
</style>
