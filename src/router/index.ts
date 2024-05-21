import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/stats',
            name: 'stats',
            component: () => import('../views/StatsView.vue')
        },
        {
            path: '/settings',
            name: 'settings',
            component: () => import('../views/SettingsView.vue')
        },
        // Level 1
        {
            path: '/level-1',
            name: 'level-1',
            component: () => import('@/views/HomeView/Lvl1/Lvl1.vue')
        },
        // Level 1 - Module 1
        {
            path: '/level-1/module-1',
            name: 'module-1',
            component: () => import('@/views/HomeView/Lvl1/Mod1/Mod1.vue')
        },
        {
            path: '/level-1/module-1/introduction-to-verbs',
            name: 'introduction-to-verbs',
            component: () => import('@/views/HomeView/Lvl1/Mod1/IntroductionToVerbs.vue')
        },
        {
            path: '/level-1/module-1/irregular-verbs-present',
            name: 'irregular-verbs-present',
            component: () => import('@/views/HomeView/Lvl1/Mod1/IrregularVerbsPresent.vue')
        },
        {
            path: '/level-1/module-1/test-present',
            name: 'test-present',
            component: () => import('@/views/HomeView/Lvl1/Mod1/GrammarTests/TestPresent.vue')
        },
        {
            path: '/level-1/module-1/irregular-verbs-past',
            name: 'irregular-verbs-past',
            component: () => import('@/views/HomeView/Lvl1/Mod1/IrregularVerbsPast.vue')
        },
        {
            path: '/level-1/module-1/test-past',
            name: 'test-past',
            component: () => import('@/views/HomeView/Lvl1/Mod1/GrammarTests/TestPast.vue')
        },
        {
            path: '/level-1/module-1/irregular-verbs-future',
            name: 'irregular-verbs-future',
            component: () => import('@/views/HomeView/Lvl1/Mod1/IrregularVerbsFuture.vue')
        },
        {
            path: '/level-1/module-1/test-future',
            name: 'test-future',
            component: () => import('@/views/HomeView/Lvl1/Mod1/GrammarTests/TestFuture.vue')
        },
        // Level 1 - Module 2
        {
            path: '/level-1/module-2',
            name: 'module-2',
            component: () => import('@/views/HomeView/Lvl1/Mod2/Mod2.vue')
        },

        // Level 2
        {
            path: '/level-2',
            name: 'level-2',
            component: () => import('@/views/HomeView/Lvl2/Lvl2.vue')
        },
        // Level 3
        {
            path: '/level-3',
            name: 'level-3',
            component: () => import('@/views/HomeView/Lvl3/Lvl3.vue')
        },
        {
            path: '/paywall',
            name: 'paywall',
            component: () => import('@/components/Paywall.vue')
        },
        {
            path: '/:catchAll(.*)',
            name: 'notFound',
            component: () => import('../views/NotFound.vue')
        }
    ]
})

export default router
