<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import useTestStore from '@/stores/TestStore'
import Paywall from '@/components/Paywall.vue';

const testStore = useTestStore()

const practiceView: Ref<boolean> = ref(false)

</script>
<template>
    <div class="level-view-wrapper">
        <header>
            <RouterLink :to="{ name: 'home' }">
                <img src="@/assets/icons/arrow-left-white.svg" alt="back button" />
            </RouterLink>
            <h1>Level 2</h1>
            <div class="streak" title="Day streak">
                <img src="@/assets/icons/energy-bolt.svg" alt="day streak" />
                <div>{{ testStore.testResults.streak }}</div>
            </div>
        </header>
        <label class="toggle" tabindex="0" @keydown.enter="practiceView = !practiceView">
            <input type="checkbox" v-model="practiceView" />
            <span class="slider"></span>
            <span :class="['label-left', { 'black-font': !practiceView }]">Learn</span>
            <span :class="['label-right', { 'black-font': practiceView }]">Practice</span>
        </label>
        <paywall></paywall>
        <div v-if="!practiceView" class="lesson-wrapper">
        </div>
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
