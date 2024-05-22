<script setup lang="ts">
import useViewStore from '@/stores/ViewStore'
import { ref } from 'vue'
import type { Ref } from 'vue'

interface Props {
    toTranslate: string
    correctAnswer: string
}
const props = defineProps<Props>()

const viewStore = useViewStore()

const emit = defineEmits<{
    isOver: [boolean]
}>()

const LETTERS = ['ā', 'č', 'ē', 'ģ', 'ī', 'ķ', 'ļ', 'ņ', 'š', 'ū', 'ž']

const answer: Ref<string> = ref('')

const showHint: Ref<boolean> = ref(false)

const inProgress: Ref<boolean> = ref(true)

const isAnswerCorrect: Ref<boolean> = ref(true)

function checkAnswer(): void {
    if (answer.value.toLocaleLowerCase().trim() === props.correctAnswer) {
        isAnswerCorrect.value = true
    } else {
        isAnswerCorrect.value = false
    }
    inProgress.value = false
}
</script>

<template>
    <div class="translate-test-wrapper">
        <div class="test-content-wrapper">
            <div class="test-title">
                <img src="@/assets/icons/translate.svg" alt="translation task image" />
                <h1>Translate the sentence</h1>
            </div>
            <div class="form-wrapper">
                <label for="task">
                    {{ props.toTranslate }}
                </label>
                <input type="text" name="" id="task" placeholder="Type here" v-model="answer" />
                <button
                    type="button"
                    class="btn-hint"
                    v-if="viewStore.hintsVisible === true"
                    @click="showHint = !showHint"
                >
                    Need a hint?
                </button>
                <div v-if="showHint" class="hint">
                    <button type="button" class="btn-letter" @click="showHint = !showHint">
                        x
                    </button>
                    <slot></slot>
                </div>
            </div>
            <div class="letter-button-wrapper">
                <button
                    v-for="letter in LETTERS"
                    :key="letter"
                    class="btn-letter"
                    type="button"
                    @click="answer += letter"
                >
                    {{ letter }}
                </button>
            </div>
        </div>
        <footer>
            <div v-if="!inProgress && isAnswerCorrect" class="correct">
                <div class="left-content">
                    <img src="@/assets/icons/green-check.svg" alt="correct answer" />
                    <h1>Correct!</h1>
                    <p>{{ props.correctAnswer }}</p>
                </div>
                <button type="button" class="btn-back" @click="emit('isOver', isAnswerCorrect)">
                    Continue
                </button>
            </div>
            <div v-if="!inProgress && !isAnswerCorrect" class="incorrect">
                <div class="left-content">
                    <img src="@/assets/icons/red-x.svg" alt="incorrect answer" />
                    <h1>Incorrect!</h1>
                    <p>Correct answer: {{ props.correctAnswer }}</p>
                </div>
                <button type="button" class="btn-back" @click="emit('isOver', isAnswerCorrect)">
                    Continue
                </button>
            </div>
            <button v-if="inProgress" type="button" class="btn-back" @click="checkAnswer">
                Check
            </button>
        </footer>
    </div>
</template>

<style scoped>
.translate-test-wrapper {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    overflow: hidden;
}

.test-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    justify-content: center;
    overflow: scroll;

    h1 {
        margin: 16px 0;
    }
}

.test-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    & img {
        width: 50px;
        height: 50px;
    }
}

.form-wrapper {
    display: flex;
    flex-direction: column;
    width: 70%;
    max-width: 600px;
    min-width: 250px;

    & label {
        margin: 8px;
    }

    & input {
        border: none;
        border-radius: 12px;
        background-color: var(--black-900);
        margin: 8px 0;
        height: 52px;
        /* background-color: transparent; */
    }
    input::placeholder {
        padding: 16px;
    }

    input:focus {
        padding-left: 16px;
        caret-color: var(--white-900);
    }

    input:not(:focus):not(:placeholder-shown){
        padding-left: 16px;
    }

    input:focus::placeholder {
        color: transparent;
    }
}

.btn-hint {
    align-self: flex-end;
    margin: 8px 0;
    cursor: pointer;
    white-space: nowrap;
    color: var(--white-900);
    width: fit-content;
    background-color: transparent;
    border: none;
}

.btn-hint:hover {
    opacity: 0.75;
}

.btn-hint:active {
    opacity: 0.25;
}

.letter-button-wrapper {
    margin: 8px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.btn-letter {
    width: 40px;
    height: 40px;
    background-color: transparent;
    border-radius: 8px;
    border: none;
    background-color: var(--black-500);
}

.btn-letter:hover {
    background-color: var(--purple-200);
}

.btn-letter:active {
    background-color: var(--black-800);
}


.hint {
    position: absolute;
    z-index: 2;
    background-color: rgb(53, 53, 56);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.correct,
.incorrect {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: rgb(29, 29, 33);
    border-radius: 16px;
    padding: 24px;

    & h1{
        margin: 4px 0;
    }

    & p {
        margin: 4px 0;
    }
}
</style>
