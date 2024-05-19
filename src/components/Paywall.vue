<script setup>
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
    <div>
        <img src="@/assets/icons/paywall.svg" alt="paywall" />
        <h1>Get access to all lessons and much more...</h1>
        <p>Upgrade to unlock all that this app has to offer!</p>
        <button type="button">Upgrade</button>
    </div>
</template>

<style scoped>
div {
    border-radius: 16px;
    background-color: var(--black-900);
    padding-top: 24px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
}

p {
    margin: 0px;
}
img {
    width: 300px;
}
h1 {
    font-family: Satoshi-Bold;
    font-size: 18px;
    text-align: center;
    margin: 0px;
}

button {
    background-color: var(--purple-400);
    color: var(--white-900);
    border: 0.5px solid var(--white-100);
    border-radius: 12px;
    margin: 8px;
    font-family: Satoshi-Bold;
    font-size: 16px;
    padding: 8px 40px;
    width: fit-content;
    margin: 24px;
}

button:hover {
    background-color: var(--purple-300);
    cursor: pointer;
}

button:active {
    background-color: var(--white-400);
    border-color: var(--purple-400);
}
</style>
