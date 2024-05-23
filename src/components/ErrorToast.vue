<script setup>
import { ref, watch } from 'vue';
import { errorCurrent } from '../stores/error.ts';

const isDisplayed = ref(false);

watch(errorCurrent, () => {
    isDisplayed.value = true;
});
</script>

<template>
    <div v-if="isDisplayed" class="error-toast">
        <p>{{ errorCurrent.message }}</p>
        <button type="button" @click="isDisplayed = false">
            <img src="../assets/icons/x.svg" alt="close" />
        </button>
    </div>
</template>

<style scoped>
.error-toast {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    font-family: Satoshi-Medium;
    font-size: 16px;
    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--black-a90);
    border-radius: 12px;
    text-align: center;
    padding: 16px;

    & p {
        color: var(--red-100);
    }
}

button {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: transparent;
    padding: 0;
    margin-left: 8px;
    border: none;

    & img {
        width: 18px;
    }
}

button:hover {
    opacity: 75%;
}

button:active {
    border-radius: 8px;
    opacity: 35%;
}
</style>
