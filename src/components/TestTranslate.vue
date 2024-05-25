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

// to switch focus from inpput after pressing enter
const continueCorrect: Ref<HTMLInputElement | null> = ref(null)
const continueIncorrect: Ref<HTMLInputElement | null> = ref(null)

function checkAnswer(): void {
    if (answer.value.toLocaleLowerCase().trim() === props.correctAnswer) {
        isAnswerCorrect.value = true
        continueCorrect.value?.focus()
    } else {
        isAnswerCorrect.value = false
        continueIncorrect.value?.focus()
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
                <input
                    type="text"
                    name=""
                    id="task"
                    placeholder="Type here"
                    v-model="answer"
                    @keydown.enter="checkAnswer"
                />
                <button
                    type="button"
                    class="btn-hint"
                    v-if="viewStore.hintsVisible === true"
                    @click="showHint = !showHint"
                >
                    Need a hint?
                </button>
                <div v-if="showHint" class="hint">
                    <div class="hint-content">
                        <slot></slot>
                        <button type="button" class="btn-next" @click="showHint = !showHint">
                            close
                        </button>
                    </div>
                </div>
            </div>
            <div v-if="viewStore.specialCharsVisible === true" class="letter-button-wrapper">
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
                <button
                    type="button"
                    class="btn-continue-green"
                    @click="emit('isOver', isAnswerCorrect)"
                    ref="continueCorrect"
                >
                    Continue
                </button>
            </div>
            <div v-if="!inProgress && !isAnswerCorrect" class="incorrect">
                <div class="left-content">
                    <img src="@/assets/icons/red-x.svg" alt="incorrect answer" />
                    <h1>Incorrect!</h1>
                    <p>
                        Correct answer: <span>{{ props.correctAnswer }}</span>
                    </p>
                </div>
                <button
                    type="button"
                    class="btn-continue-red"
                    @click="emit('isOver', isAnswerCorrect)"
                    ref="continueIncorrect"
                >
                    Continue
                </button>
            </div>
            <button v-if="inProgress" type="button" class="btn-next" @click="checkAnswer">
                Check
            </button>
        </footer>
    </div>
</template>

<style scoped>
footer {
    margin-top: 0px;
}
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
    align-content: center;
    flex-grow: 1;
    justify-content: center;
    overflow: auto;

    h1 {
        margin: 16px 0;
        text-align: center;
    }
}

.letter-button-wrapper {
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: center;
}

.test-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    & img {
        width: 50px;
        height: 50px;
    }

    & h1 {
        font-family: Satoshi-Bold, sans-serif;
        font-size: 24px;
        color: var(--white-a80);
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
        font-family: Satoshi-Medium, sans-serif;
        font-size: 16px;
        color: var(--white-a70);
    }

    & input {
        border: none;
        border-radius: 12px;
        font-family: Satoshi-Medium, sans-serif;
        font-size: 16px;
        background-color: var(--black-500);
        color: var(--white-a40);
        margin: 8px 0;
        height: 52px;
    }
    input::placeholder {
        padding: 16px;
    }

    input:focus {
        padding-left: 16px;
        caret-color: var(--orange-100);
        outline: 1px solid var(--orange-a20);
    }

    input:not(:focus):not(:placeholder-shown) {
        padding-left: 16px;
    }

    input:focus::placeholder {
        color: transparent;
    }
}

.hint {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--black-a90);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    overflow: auto;
}

.hint-content {
    background-color: var(--black-100);
    padding: 40px;
    border-radius: 16px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 32px;

    & .btn-next {
        align-self: flex-end;
    }
}

.left-content {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & h1,
    p {
        margin: 0px;
    }

    & img {
        width: 44px;
        height: 44px;
    }
    & p {
        font-family: Satoshi-Medium, sans-serif;
        font-size: 16px;
        color: var(--white-a70);
    }
}

.correct,
.incorrect {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: var(--black-500);
    border-radius: 16px;
    padding: 24px;

    & h1 {
        font-family: Satoshi-Bold, sans-serif;
        font-size: 24px;
    }
}

.correct h1 {
    color: var(--green-100);
}

.incorrect h1 {
    color: var(--red-100);
}

.incorrect span {
    color: var(--red-100);
    text-decoration: underline;
    text-underline-offset: 5px;
}
</style>
