<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import ErrorToast from './components/ErrorToast.vue'
import useViewStore from './stores/ViewStore'

const viewStore = useViewStore()
const route = useRoute()

const isSettingsRoute = computed(() => route.path.startsWith('/settings'))
const isStatsRoute = computed(() => route.path.startsWith('/stats'))
const isHomeRoute = computed(() => !isStatsRoute.value && !isSettingsRoute.value)
</script>

<template>
    <RouterView />
    <nav class="main-nav" v-if="viewStore.mainNavVisible">
        <img src="@/assets/icons/puce-logo.svg" alt="logo" />
        <RouterLink :to="{ name: 'home' }" tabindex="-1">
            <button type="button" :class="{ selected: isHomeRoute }">
                <img src="./assets/icons/home.svg" alt="home button" /><span>Home</span>
            </button>
        </RouterLink>
        <RouterLink :to="{ name: 'stats' }" tabindex="-1">
            <button type="button" :class="{ selected: isStatsRoute }">
                <img src="./assets/icons/stats.svg" alt="statistics button" /><span>Stats</span>
            </button>
        </RouterLink>
        <RouterLink :to="{ name: 'settings' }" tabindex="-1">
            <button type="button" :class="{ selected: isSettingsRoute }">
                <img src="./assets/icons/sprocket-1.svg" alt="settings button" /><span
                    >Settings</span
                >
            </button>
        </RouterLink>
    </nav>
    <ErrorToast />
</template>

<style scoped>
.main-nav {
    box-sizing: content-box;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    gap: 16px;
    padding: 16px;
}

img[alt='logo'] {
    display: none;
}

a {
    display: flex;
    flex: 1 1 0;
    text-decoration: none;
}

button {
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: var(--white-a80);
    border: 0.5px solid transparent;
    border-radius: 12px;
    padding: 8px;
    gap: 4px;

    & img {
        width: 24px;
        height: 24px;
    }
    & span {
        font-family: Satoshi-Bold;
        text-decoration: none;
        font-size: var(--medium);
    }
}

button:hover {
    background-color: var(--orange-a20);
    border: 0.5px solid var(--orange-5);
    cursor: pointer;
}

button:active {
    background-color: var(--orange-100);
    border: 0.5px solid var(--orange-5);
}

.selected {
    background-color: var(--black-500);
    border: 0.5px solid var(--orange-5);
    font-family: Satoshi-Bold;
}

/* desktop view */
@media only screen and (min-width: 800px) {
    nav {
        flex-grow: 1;
    }
    .main-nav {
        flex-direction: column;
        justify-content: flex-start;
        width: 20%;
        flex-grow: 0;
        padding: 32px 16px 0px 16px;
        border-right: 1px solid var(--orange-5);
    }

    a {
        flex-grow: 0;
    }

    button {
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 12px;
        gap: 8px;

        & img {
            width: 24px;
            height: 24px;
        }
        & span {
            font-size: var(--medium);
            text-decoration: none;
        }
    }

    img[alt='logo'] {
        display: block;
        padding: 8px 16px 8px 2px;
    }
}
</style>
