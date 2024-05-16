<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import useViewStore from '@/stores/ViewStore'

const viewStore = useViewStore()

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
                <div>0</div>
            </div>
        </header>
        <label class="toggle">
            <input type="checkbox" v-model="practiceView" />
            <span class="slider"></span>
            <span class="label-left">Learn</span>
            <span class="label-right">Practice</span>
        </label>
        <nav v-if="!practiceView">
            <RouterLink :to="{ name: 'introduction-to-verbs' }" tabindex="-1">
                <button type="button" class="btn-2" @click="viewStore.mainNavVisible = false">
                    <img src="@/assets/icons/star.svg" alt="introduction to verbs" /><span
                        >Introduction to verbs</span
                    >
                </button>
            </RouterLink>
            <RouterLink :to="{ name: 'irregular-verbs-present' }" tabindex="-1">
                <button type="button" class="btn-2" @click="viewStore.mainNavVisible = false">
                    <img src="@/assets/icons/star.svg" alt="irregular verbs present" /><span
                        >Irregular verbs - present</span
                    >
                </button>
            </RouterLink>
            <RouterLink :to="{ name: 'test-present' }" tabindex="-1">
                <button type="button" class="btn-2" @click="viewStore.mainNavVisible = false">
                    <img src="@/assets/icons/star.svg" alt="test present" /><span
                        >Test - present</span
                    >
                </button>
            </RouterLink>
            <RouterLink :to="{ name: 'irregular-verbs-past' }" tabindex="-1">
                <button type="button" class="btn-2" @click="viewStore.mainNavVisible = false">
                    <img src="@/assets/icons/star.svg" alt="irregular verbs past" /><span
                        >Irregular verbs - past</span
                    >
                </button>
            </RouterLink>
            <RouterLink :to="{ name: 'test-past' }" tabindex="-1">
                <button type="button" class="btn-2" @click="viewStore.mainNavVisible = false">
                    <img src="@/assets/icons/star.svg" alt="test past" /><span>Test - past</span>
                </button>
            </RouterLink>
            <RouterLink :to="{ name: 'irregular-verbs-future' }" tabindex="-1">
                <button type="button" class="btn-2" @click="viewStore.mainNavVisible = false">
                    <img src="@/assets/icons/star.svg" alt="irregular verbs future" /><span
                        >Irregular verbs - future</span
                    >
                </button>
            </RouterLink>
            <RouterLink :to="{ name: 'test-future' }" tabindex="-1">
                <button type="button" class="btn-2" @click="viewStore.mainNavVisible = false">
                    <img src="@/assets/icons/star.svg" alt="test future" /><span
                        >Test - future</span
                    >
                </button>
            </RouterLink>
        </nav>
        <nav v-if="practiceView">
            <RouterLink :to="{ name: 'test-present' }" tabindex="-1">
                <button type="button" class="btn-2" @click="viewStore.mainNavVisible = false">
                    <img src="@/assets/icons/star.svg" alt="test present" /><span
                        >Test - present</span
                    >
                </button>
            </RouterLink>
            <RouterLink :to="{ name: 'test-past' }" tabindex="-1">
                <button type="button" class="btn-2" @click="viewStore.mainNavVisible = false">
                    <img src="@/assets/icons/star.svg" alt="test past" /><span>Test - past</span>
                </button>
            </RouterLink>
            <RouterLink :to="{ name: 'test-future' }" tabindex="-1">
                <button type="button" class="btn-2" @click="viewStore.mainNavVisible = false">
                    <img src="@/assets/icons/star.svg" alt="test future" /><span
                        >Test - future</span
                    >
                </button>
            </RouterLink>
        </nav>
    </div>
</template>

<style scoped>
nav {
    display: flex;
    flex-direction: column;
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
