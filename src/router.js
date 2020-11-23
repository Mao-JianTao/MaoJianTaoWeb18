import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            component: () =>
                import ('./views/dengLu.vue'),
        }, {
            path: '/main',
            component: () =>
                import ('./components/Main.vue'),
            children: [{
                    path: '/main',
                    redirect: '/shou'
                }, {
                    path: '/shou',
                    component: () =>
                        import ('./views/Shou.vue')
                }, {
                    path: '/wuye',
                    component: () =>
                        import ('./views/Wuye.vue')
                }, {
                    path: '/yuyue',
                    component: () =>
                        import ('./views/Yuyue.vue')
                },
                {
                    path: '/gu',
                    component: () =>
                        import ('./views/Gu.vue')
                },
                {
                    path: '/gong',
                    component: () =>
                        import ('./views/Gong.vue')
                },
                {
                    path: '/top2-1',
                    component: () =>
                        import ('./views/Top2-1.vue')
                },
                {
                    path: '/top2-1-1',
                    component: () =>
                        import ('./views/Top2-1-1.vue')
                },
                {
                    path: '/top2-1-2',
                    component: () =>
                        import ('./views/Top2-1-2.vue')
                },
                {
                    path: '/top2-1-3',
                    component: () =>
                        import ('./views/Top2-1-3.vue')
                },
                {
                    path: '/top2-2',
                    component: () =>
                        import ('./views/Top2-2.vue')
                },
                {
                    path: '/top2-3',
                    component: () =>
                        import ('./views/Top2-3.vue')
                },
                {
                    path: '/top3-1',
                    component: () =>
                        import ('./views/Top3-1.vue')
                },
                {
                    path: '/top3-1-1',
                    component: () =>
                        import ('./views/Top3-1-1.vue')
                },
                {
                    path: '/top3-1-2',
                    component: () =>
                        import ('./views/Top3-1-2.vue')
                },
                {
                    path: '/top3-1-3',
                    component: () =>
                        import ('./views/Top3-1-3.vue')
                },
                {
                    path: '/top3-2',
                    component: () =>
                        import ('./views/Top3-2.vue')
                },
                {
                    path: '/top4-1',
                    component: () =>
                        import ('./views/Top4-1.vue')
                },
                {
                    path: '/top4-2',
                    component: () =>
                        import ('./views/Top4-2.vue')
                },
                {
                    path: '/top5-1',
                    component: () =>
                        import ('./views/Top5-1.vue')
                },
                {
                    path: '/top5-2',
                    component: () =>
                        import ('./views/Top5-2.vue')
                },
                {
                    path: '/top5-3',
                    component: () =>
                        import ('./views/Top5-3.vue')
                },
                {
                    path: '/top5-4',
                    component: () =>
                        import ('./views/Top5-4.vue')
                },
                {
                    path: '/top6-1',
                    component: () =>
                        import ('./views/Top6-1.vue')
                },
                {
                    path: '/top6-2',
                    component: () =>
                        import ('./views/Top6-2.vue')
                },
                {
                    path: '/top6-3',
                    component: () =>
                        import ('./views/Top6-3.vue')
                },


            ]
        }

    ]
})