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
        <div class="paywall-info">
            <h1>Get access to all lessons and much more...</h1>
            <p>Upgrade to unlock all that this app has to offer!</p>
        </div>
        <button type="button" class="btn-next">Upgrade</button>
    </div>
</template>

<style scoped>
div {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
}

.paywall-info{
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
}

p {
    margin: 0px;
    text-align: center;
}
img {
    width: 300px;
}
h1 {
    font-family: Satoshi-Bold;
    font-size: 24px;
    text-align: center;
    margin: 0px;
}
</style>
