<script setup></script>
<template>
    <nav>
        <RouterLink :to="{ name: 'introduction-to-verbs' }" tabindex="-1">
            <button type="button" class="btn-2">
                <img src="@/assets/icons/star.svg" alt="introduction to verbs" /><span>Introduction to verbs</span>
            </button>
        </RouterLink>
        <RouterLink :to="{ name: 'irregular-verbs-present' }" tabindex="-1">
            <button type="button" class="btn-2">
                <img src="@/assets/icons/star.svg" alt="irregular verbs present" /><span>Irregular verbs - present</span>
            </button>
        </RouterLink>
        <RouterLink :to="{ name: 'test-present' }" tabindex="-1">
            <button type="button" class="btn-2">
                <img src="@/assets/icons/star.svg" alt="test present" /><span>Test - present</span>
            </button>
        </RouterLink>
        <RouterLink :to="{ name: 'irregular-verbs-past' }" tabindex="-1">
            <button type="button" class="btn-2">
                <img src="@/assets/icons/star.svg" alt="irregular verbs past" /><span>Irregular verbs - past</span>
            </button>
        </RouterLink>
        <RouterLink :to="{ name: 'test-past' }" tabindex="-1">
            <button type="button" class="btn-2">
                <img src="@/assets/icons/star.svg" alt="test past" /><span>Test - past</span>
            </button>
        </RouterLink>
        <RouterLink :to="{ name: 'irregular-verbs-future' }" tabindex="-1">
            <button type="button" class="btn-2">
                <img src="@/assets/icons/star.svg" alt="irregular verbs future" /><span>Irregular verbs - future</span>
            </button>
        </RouterLink>
        <RouterLink :to="{ name: 'test-future' }" tabindex="-1">
            <button type="button" class="btn-2">
                <img src="@/assets/icons/star.svg" alt="test future" /><span>Test - future</span>
            </button>
        </RouterLink>

    </nav>
</template>

<style scoped>
nav {
    display: flex;
    flex-direction: column;
}
</style>