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
    if (answer.value.toLocaleLowerCase().trim() === props.correctAnswer){
        isAnswerCorrect.value = true
    } else{
        isAnswerCorrect.value = false
    }
    inProgress.value = false
}
</script>

<template>
    <div class="test-title">
        <img src="@/assets/icons/translate.svg" alt="translation task image" />
        <h1>Translate the sentence</h1>
    </div>
    <div>
        <label for="task">
            {{ props.toTranslate }}
        </label>
        <input type="text" name="" id="task" placeholder="type here" v-model="answer" />
        <button
            type="button"
            class="hint-button"
            v-if="viewStore.hintsVisible === true"
            @click="showHint = !showHint"
        >
            Need a hint?
        </button>
        <div v-if="showHint" class="hint">
            <button type="button" class="btn-letter" @click="showHint = !showHint">x</button>
            <slot
                ><table>
                    <tr>
                        <th>Person</th>
                        <th>Present tense</th>
                    </tr>
                    <tr>
                        <td>es</td>
                        <td>gāju</td>
                    </tr>
                    <tr>
                        <td>tu</td>
                        <td>gāji</td>
                    </tr>
                    <tr>
                        <td>viņš, viņa</td>
                        <td>gāja</td>
                    </tr>
                    <tr>
                        <td>mēs</td>
                        <td>gājām</td>
                    </tr>
                    <tr>
                        <td>jūs</td>
                        <td>gājāt</td>
                    </tr>
                    <tr>
                        <td>viņi, viņas</td>
                        <td>gāja</td>
                    </tr>
                </table>
            </slot>
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

    <footer>
        <div v-if="!inProgress && isAnswerCorrect" class="correct">
            <div class="left-content">
                <img src="@/assets/icons/green-check.svg" alt="correct answer" />
                <h1>Correct!</h1>
                <p>{{ props.correctAnswer }}</p>
            </div>
            <button type="button" class="btn-back" @click="emit('isOver', isAnswerCorrect)">Continue</button>
        </div>

        <div v-if="!inProgress && !isAnswerCorrect" class="incorrect">
            <div class="left-content">
                <img src="@/assets/icons/red-x.svg" alt="incorrect answer" />
                <h1>Incorrect!</h1>
                <p>Correct answer: {{ props.correctAnswer }}</p>
            </div>
            <button type="button" class="btn-back" @click="emit('isOver', isAnswerCorrect)">Continue</button>
        </div>

        <button v-if="inProgress" type="button" class="btn-back" @click="checkAnswer">
            Check
        </button>
    </footer>
</template>

<style scoped>
slot {
    background-color: orange;
}
img {
    width: 50px;
    height: 50px;
}

input {
    background-color: transparent;
}

.btn-letter {
    width: 50px;
    background-color: transparent;
}

.hint-button {
    cursor: pointer;
    white-space: nowrap;
    color: red;
}

.hint {
    position: absolute;
    z-index: 2;
    background-color: rgb(31, 31, 35);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.correct,
.incorrect {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
</style>
