import { defineStore } from 'pinia'
import { setError } from '@/stores/error'
import { reactive } from 'vue'

interface Lesson {
    completed: boolean
}

interface Module {
    completed: boolean
    lessons: Record<string, Lesson>
}

interface Level {
    completed: boolean
    modules: Record<string, Module>
}

interface TestTree {
    lastVisitdate: string
    streak: number
    answeredQuestions: number
    correctQuestions: number
    testsCompleted: number
    tests: Record<string, Level>
}

const useTestStore = defineStore('test', () => {
    const TEST_KEY: string = 'test-progress'
    const todaysDateString = new Date().toISOString().split('T')[0]

    const testResults: TestTree = reactive({
        lastVisitdate: todaysDateString,
        streak: 0,
        answeredQuestions: 0,
        correctQuestions: 0,
        testsCompleted: 0,
        tests: {
            'level-1': {
                completed: false,
                modules: {
                    'module-1': {
                        completed: false,
                        lessons: {
                            'introduction-to-verbs': { completed: false },
                            'irregular-verbs-present': { completed: false },
                            'irregular-verbs-past': { completed: false },
                            'irregular-verbs-future': { completed: false },
                            'test-present': { completed: false },
                            'test-past': { completed: false },
                            'test-future': { completed: false }
                        }
                    },
                    'module-2': {
                        completed: false,
                        lessons: {
                            'lesson-1': { completed: false },
                            'lesson-2': { completed: false }
                        }
                    }
                }
            },
            'level-2': {
                completed: false,
                modules: {
                    'module-1': {
                        completed: false,
                        lessons: {
                            'lesson-1': { completed: false },
                            'lesson-2': { completed: false }
                        }
                    }
                }
            }
        }
    })

    function setTestResults(): void {
        try {
            localStorage.setItem(TEST_KEY, JSON.stringify(testResults))
            // throw new Error();
        } catch (error) {
            setError(new Error('Changes not saved in local storage!'))
        }
    }

    function getTestResults(): void {
        const resultsStored = localStorage.getItem(TEST_KEY)
        if (resultsStored) {
            const parsedResults = JSON.parse(resultsStored)
            testResults.lastVisitdate = parsedResults.lastVisitdate
            testResults.streak = parsedResults.streak
            testResults.tests = parsedResults.tests
        }
    }

    function updateStreak(): void {
        const today = new Date()
        const todayString = today.toISOString().split('T')[0]
        const lastVisitDate = testResults.lastVisitdate

        if (lastVisitDate === todayString && testResults.streak === 0) {
            testResults.streak++
        }
        if (lastVisitDate === todayString){
            return
        }

        const lastVisit = new Date(lastVisitDate)
        const oneDay = 24 * 60 * 60 * 1000
        const diffTime = today.getTime() - lastVisit.getTime()
        const diffDays = Math.floor(diffTime / oneDay)

        if (diffDays === 1) {
            testResults.streak++
        } else if (diffDays > 1) {
            testResults.streak = 1
        }

        testResults.lastVisitdate = todayString
    }

    return { testResults, setTestResults, getTestResults, todaysDateString, updateStreak }
})

export default useTestStore
