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
    <main>
        <div class="toggle-container">
            <label class="toggle-label">
                Enable Feature
                <input type="checkbox" class="toggle-input" v-model="viewStore.hintsVisible" />
                <span class="toggle-slider"></span>
            </label>
        </div>
    </main>
</template>

<style scoped>
.toggle-container {
    display: flex;
    align-items: center;
}

.toggle-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    margin-right: 10px;
    position: relative;
}

.toggle-input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-slider {
    width: 40px;
    height: 20px;
    background-color: #ccc;
    border-radius: 20px;
    margin-left: 10px;
    transition: background-color 0.2s;
    display: inline-block;
    position: relative;
}

.toggle-slider::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    left: 1px;
    bottom: 1px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.2s;
}

.toggle-input:checked + .toggle-slider {
    background-color: #4caf50;
}

.toggle-input:checked + .toggle-slider::before {
    transform: translateX(20px);
}
</style>
