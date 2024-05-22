<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ErrorToast from './components/ErrorToast.vue'
import useViewStore from './stores/ViewStore'

const viewStore = useViewStore()
</script>

<template>
    <RouterView />
    <nav class="main-nav" v-if="viewStore.mainNavVisible">
        <img src="@/assets/icons/puce-logo.svg" alt="logo" />
        <RouterLink :to="{ name: 'home' }" tabindex="-1">
            <button type="button">
                <img src="./assets/icons/home.svg" alt="home button" /><span>Home</span>
            </button>
        </RouterLink>
        <RouterLink :to="{ name: 'stats' }" tabindex="-1">
            <button type="button">
                <img src="./assets/icons/stats.svg" alt="statistics button" /><span>Stats</span>
            </button>
        </RouterLink>
        <RouterLink :to="{ name: 'settings' }" tabindex="-1">
            <button type="button">
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
    flex-grow: 1;
    text-decoration: none;
}

button {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--white-400);
    color: var(--white-900);
    border: 0.5px solid var(--white-100);
    border-radius: 12px;
    /* margin: 8px; */

    & img {
        margin: 8px 8px 4px 8px;
        width: 16px;
        height: 16px;
    }
    & span {
        margin: 4px 8px 8px 8px;
        font-size: 12px;
        text-decoration: none;
    }
}

button:hover {
    background-color: var(--purple-300);
    cursor: pointer;
}

button:active {
    background-color: var(--white-400);
    border-color: var(--purple-400);
}

@media only screen and (min-width: 800px) {
    nav {
        flex-grow: 1;
    }
    .main-nav {
        flex-direction: column;
        justify-content: flex-start;
        width: 15%;
        flex-grow: 0;
        padding: 32px 16px 0px 16px;
        border-right: 1px solid white;
    }

    a {
        flex-grow: 0;
    }

    button {
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        & img {
            margin: 8px;
            width: 24px;
            height: 24px;
        }
        & span {
            margin: 8px;
            font-size: 12px;
            text-decoration: none;
        }
    }

    img[alt='logo'] {
        display: block;
        padding: 8px 16px 8px 2px;
    }
}
</style>
