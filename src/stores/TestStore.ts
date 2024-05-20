import { defineStore } from 'pinia'
import { setError } from '@/stores/error'
import { reactive } from 'vue'

interface Lesson {
    name: string
    completed: boolean
}

interface Module {
    name: string
    completed: boolean
    lessons: Lesson[]
}

interface Level {
    name: string
    completed: boolean
    modules: Module[]
}

interface TestTree {
    lastVisitdate: string
    streak: number
    tests: Level[]
}

const useTestStore = defineStore('test', () => {
    const TEST_KEY: string = 'test-progress'
    const todaysDateString = new Date().toISOString().split('T')[0]

    const testResults: TestTree = reactive({
        lastVisitdate: todaysDateString,
        streak: 0,
        tests: [
            {
                name: 'Level 1',
                completed: false,
                modules: [
                    {
                        name: 'Module 1',
                        completed: false,
                        lessons: [
                            { name: 'Lesson 1', completed: false },
                            { name: 'Lesson 2', completed: false }
                        ]
                    },
                    {
                        name: 'Module 2',
                        completed: false,
                        lessons: [
                            { name: 'Lesson 1', completed: false },
                            { name: 'Lesson 2', completed: false }
                        ]
                    }
                ]
            },
            {
                name: 'Level 2',
                completed: false,
                modules: [
                    {
                        name: 'Module 1',
                        completed: false,
                        lessons: [
                            { name: 'Lesson 1', completed: false },
                            { name: 'Lesson 2', completed: false }
                        ]
                    }
                ]
            }
        ]
    })

    function setTestResults() {
        try {
            localStorage.setItem(TEST_KEY, JSON.stringify(testResults))
            // throw new Error();
        } catch (error) {
            setError(new Error('Changes not saved in local storage!'))
        }
    }

    function getTestResults() {
        const resultsStored = localStorage.getItem(TEST_KEY)
        if (resultsStored) {
            const parsedResults = JSON.parse(resultsStored)
            testResults.lastVisitdate = parsedResults.lastVisitdate
            testResults.streak = parsedResults.streak
            testResults.tests = parsedResults.tests
        }
    }

    // const mainNavVisible: Ref<boolean> = ref(true)
    // const hintsVisible: Ref<boolean> = ref(true)

    return { testResults, setTestResults, getTestResults, todaysDateString }
})

export default useTestStore

// toTranslate="I go" correctAnswer="Es eju"
