export default [
  {
    path: '/',
    component: () => import('../views/index.vue'),
    name: 'Index',
    meta: {
      layout: 'default',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
    meta: {
      layout: 'empty',
    },
  },
]
