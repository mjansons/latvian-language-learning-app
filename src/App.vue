<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ErrorToast from './components/ErrorToast.vue'
// import { useViewStore } from './stores/ViewStore'

// const viewStore = useViewStore()

</script>

<template>
    <div class="wrapper">
            <RouterView />
        <nav>
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
                    <img src="./assets/icons/sprocket-1.svg" alt="settings button" /><span>Settings</span>
                </button>
            </RouterLink>
        </nav>
        <ErrorToast />
    </div>
</template>

<style scoped>
.wrapper {
    box-sizing: content-box;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
}

nav {
    padding: 8px;
    box-sizing: content-box;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
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
    margin: 8px;

    & img {
        margin: 8px 8px 4px 8px;
        width: 12px;
        height: 12px;
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

button:disabled {
    cursor: not-allowed;
    opacity: 20%;
}

@media only screen and (min-width: 750px) {
}

</style>
