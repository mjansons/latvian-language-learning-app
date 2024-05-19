<script setup>
import { RouterLink,  } from 'vue-router';

// onBeforeRouteLeave
// import { useViewStore } from '../stores/viewStore';

// const viewStore = useViewStore();
// const todaysDate = new Date().toISOString().split('T')[0];

// viewStore.toggleNavPanel();

// onBeforeRouteLeave(() => {
//     viewStore.toggleNavPanel();
// });
</script>

<template>
    <div>
        <h1>404 Not Found!</h1>
        <RouterLink :to="{ name: 'home' }"
            ><button type="button">Return</button></RouterLink
        >
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 150px;
}

a {
    text-decoration: none;
    height: fit-content;
}

button {
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--white-400);
    color: var(--white-900);
    border: 0.5px solid var(--white-100);
    border-radius: 12px;
    margin: 8px;
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
</style>
