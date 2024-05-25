<script setup lang="ts">
import useViewStore from '@/stores/ViewStore'

const viewStore = useViewStore()
</script>

<template>
    <div class="settings-wrapper">
        <header class="settings-header">
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
            <div class="setting-box">
                <div class="setting-info">
                    <h2>Show special characters</h2>
                    <p>Display buttons of latvian special characters</p>
                </div>
                <div
                    class="toggle-container"
                    tabindex="0"
                    @keydown.enter.prevent="viewStore.specialCharsVisible = !viewStore.specialCharsVisible"
                >
                    <label class="toggle-label">
                        <input
                            type="checkbox"
                            class="toggle-input"
                            v-model="viewStore.specialCharsVisible"
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
    align-content: flex-start;
    overflow: hidden;
}
.settings-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 24px;
    overflow: auto;
}
.setting-box {
    display: flex;
    justify-content: space-between;
    background-color: var(--black-500);
    border: 1px solid var(--orange-5);
    border-radius: 12px;
    padding: 16px;
    max-height: fit-content;

    & h2 {
        font-size: 16px;
        color: var(--white-a80);
        text-align: left;
    }
    & p {
        font-size: var(--small);
        color: var(--white-a70);
        text-align: left;
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
    margin-right: 40px;
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
    background-color: var(--orange-a20);
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
    background-color: var(--black-100);
    border-radius: 50%;
    transition: transform 0.2s;
}

.toggle-input:checked + .toggle-slider {
    background-color: var(--orange-100);
}

.toggle-input:checked + .toggle-slider::before {
    transform: translateX(18px);
    background-color: var(--black-500);
}
</style>
