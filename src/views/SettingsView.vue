<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router'
import useViewStore from '@/stores/ViewStore'

const viewStore = useViewStore()

onBeforeRouteLeave((to) => {
    const toPath = to.path
    const previousPath = /^\/level-\d+\/module-\d+\/.+/
    if (previousPath.test(toPath)) {
        viewStore.mainNavVisible = false
    }
})
</script>

<template>
    <div class="settings-wrapper">
        <header>
            <h1>Settings</h1>
            <p>Customize your experience</p>
        </header>
        <div class="settings-content">
            <div class="setting-box">
                <div class="setting-info">
                    <h2>Show hints</h2>
                    <p>Display a help section during the test</p>
                </div>
                <div
                    class="toggle-container"
                    tabindex="0"
                    @keydown.enter.prevent="viewStore.hintsVisible = !viewStore.hintsVisible"
                >
                    <label class="toggle-label">
                        <input
                            type="checkbox"
                            class="toggle-input"
                            v-model="viewStore.hintsVisible"
                        />
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.settings-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 32px 16px 16px;
}
.settings-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 24px;
}
.setting-box {
    display: flex;
    justify-content: space-between;
    background-color: var(--black-900);
    border-radius: 12px;
    padding: 16px;
    max-height: fit-content;

    & h2 {
        font-size: 16px;
    }
    & p {
        font-size: 12px;
    }
    & p,
    h2 {
        margin: 0;
    }
}

.setting-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.toggle-container {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
}

.toggle-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    position: relative;
    margin: 0;
    padding: 0;
}

.toggle-input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-slider {
    width: 40px;
    height: 22px;
    background-color: #ccc;
    border-radius: 20px;
    margin-left: 0;
    transition: background-color 0.2s;
    display: inline-block;
    position: relative;
}

.toggle-slider::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    left: 2px;
    bottom: 2px;
    background-color: rgb(25, 23, 34);
    border-radius: 50%;
    transition: transform 0.2s;
}

.toggle-input:checked + .toggle-slider {
    background-color: #cc7f3b;
}

.toggle-input:checked + .toggle-slider::before {
    transform: translateX(18px);
}
</style>
