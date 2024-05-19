<script setup lang="ts">
import useViewStore from '@/stores/ViewStore'
import ProgressHeader from '@/components/ProgressHeader.vue'
import { onBeforeRouteLeave } from 'vue-router'
import { ref, computed } from 'vue'

const LESSON_NAME = 'Introduction to verbs'
const LESSON_PARTS = 4

// importing component functions from ProgressHeader
const child = ref<InstanceType<typeof ProgressHeader> | null>(null)
const incrementProgress = () => child.value?.incrementProgress()
const decrementProgress = () => child.value?.decrementProgress()
const currentPart = computed(() => {
    return (child.value as InstanceType<typeof ProgressHeader>)?.currentPart
})

const viewStore = useViewStore()

onBeforeRouteLeave((to) => {
    const toPath = to.path
    const previousPath = /^\/level-\d+\/module-\d+$/
    if (previousPath.test(toPath)) {
        viewStore.mainNavVisible = true
    }
})
</script>
<template>
    <ProgressHeader :headerName="LESSON_NAME" :totalParts="LESSON_PARTS" ref="child" />
    <main>
        <div v-if="currentPart === 1">
            <h1>Irregular verbs</h1>
            <p>
                Before diving into conjugation patterns, it is crucial to recognize irregular verbs
                in Latvian. Though more than a hundred irregular verbs exist, a few of the most
                commonly encountered ones are:
            </p>
            <table>
                <tr>
                    <th>Verb</th>
                    <th>Meaning</th>
                </tr>
                <tr>
                    <td>iet</td>
                    <td>to go</td>
                </tr>
                <tr>
                    <td>dot</td>
                    <td>to give</td>
                </tr>
                <tr>
                    <td>būt</td>
                    <td>to be</td>
                </tr>
                <tr>
                    <td>nākt</td>
                    <td>to come</td>
                </tr>
                <tr>
                    <td>redzēt</td>
                    <td>to see</td>
                </tr>
                <tr>
                    <td>gulēt</td>
                    <td>to sleep</td>
                </tr>
            </table>
        </div>

        <div v-if="currentPart === 2">
            <h1>Būt (to be)</h1>
            <p>
                Tabulā parādīta darbības vārda "būt" tagadnes locījumi Latviešu valodā.
            </p>
            <table>
                <tr>
                    <th>Person</th>
                    <th>Present tense</th>
                </tr>
                <tr>
                    <td>es</td>
                    <td>esmu</td>
                </tr>
                <tr>
                    <td>tu</td>
                    <td>esi</td>
                </tr>
                <tr>
                    <td>viņš, viņa</td>
                    <td>ir</td>
                </tr>
                <tr>
                    <td>mēs</td>
                    <td>esam</td>
                </tr>
                <tr>
                    <td>jūs</td>
                    <td>esat</td>
                </tr>
                <tr>
                    <td>viņi, viņas</td>
                    <td>ir</td>
                </tr>
            </table>
        </div>
        <div v-if="currentPart === 3">
            <h1>Dot (to give)</h1>
            <p>
                Tabulā parādīta darbības vārda "būt" tagadnes locījumi Latviešu valodā.
            </p>
            <table>
                <tr>
                    <th>Person</th>
                    <th>Present tense</th>
                </tr>
                <tr>
                    <td>es</td>
                    <td>dodu</td>
                </tr>
                <tr>
                    <td>tu</td>
                    <td>dod</td>
                </tr>
                <tr>
                    <td>viņš, viņa</td>
                    <td>dod</td>
                </tr>
                <tr>
                    <td>mēs</td>
                    <td>dodam</td>
                </tr>
                <tr>
                    <td>jūs</td>
                    <td>dodat</td>
                </tr>
                <tr>
                    <td>viņi, viņas</td>
                    <td>dod</td>
                </tr>
            </table>
        </div>
        <div v-if="currentPart === 4">
            <h1>Iet (to go)</h1>
            <p>
                Tabulā parādīta darbības vārda "iet" tagadnes locījumi Latviešu valodā.
            </p>
            <table>
                <tr>
                    <th>Person</th>
                    <th>Present tense</th>
                </tr>
                <tr>
                    <td>es</td>
                    <td>eju</td>
                </tr>
                <tr>
                    <td>tu</td>
                    <td>ej</td>
                </tr>
                <tr>
                    <td>viņš, viņa</td>
                    <td>iet</td>
                </tr>
                <tr>
                    <td>mēs</td>
                    <td>ejam</td>
                </tr>
                <tr>
                    <td>jūs</td>
                    <td>ejat</td>
                </tr>
                <tr>
                    <td>viņi, viņas</td>
                    <td>iet</td>
                </tr>
            </table>
        </div>
    </main>

    <footer>
        <button v-if="currentPart > 1" type="button" class="btn-back" @click="decrementProgress">
            Back
        </button>

        <button
            v-if="currentPart !== LESSON_PARTS"
            type="button"
            class="btn-next"
            @click="incrementProgress"
        >
            Next
        </button>

        <RouterLink v-if="currentPart === LESSON_PARTS" :to="{ name: 'module-1' }" tabindex="-1">
            <button type="button" class="btn-next">Finish</button>
        </RouterLink>
    </footer>
</template>

<style scoped></style>
