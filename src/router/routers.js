import Main from '@/view/main'
// import parentView from '@/components/parent-view'
const staticRouters = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/401',
    name: 'error_401',
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    component: () => import('@/view/error-page/404.vue')
  }
]
const asyncRouters = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          hideInMenu: true,
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/log',
    name: 'log',
    meta: {
      icon: 'bug',
      title: '日志管理',
      access: ['super_admin']
    },
    component: Main,
    children: [
      {
        path: 'systemlog',
        name: 'systemlog',
        meta: {
          access: ['super_admin'],
          icon: 'document-text',
          title: '系统日志'
        },
        component: () => import('@/view/menu/log/logger.vue')
      }
    ]
  },
  {
    path: '/scholl',
    name: 'scholl',
    meta: {
      icon: 'university',
      title: '入学管理',
      access: ['school']
    },
    component: Main,
    children: [
      {
        path: 'approval',
        name: 'approval',
        meta: {
          access: ['school'],
          icon: 'edit',
          title: '资质审核'
        },
        component: () => import('@/view/menu/customer/school/school.vue')
      }
    ]
  }
  // {
  //   path: '/multilevel',
  //   name: 'multilevel',
  //   meta: {
  //     icon: 'arrow-graph-up-right',
  //     title: '多级菜单'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'level_2_1',
  //       name: 'level_2_1',
  //       meta: {
  //         icon: 'arrow-graph-up-right',
  //         title: '二级-1'
  //       },
  //       component: () => import('@/view/multilevel/level-1.vue')
  //     },
  //     {
  //       path: 'level_2_2',
  //       name: 'level_2_2',
  //       meta: {
  //         access: ['super_admin'],
  //         icon: 'arrow-graph-up-right',
  //         title: '二级-2'
  //       },
  //       component: parentView,
  //       children: [
  //         {
  //           path: 'level_2_2_1',
  //           name: 'level_2_2_1',
  //           meta: {
  //             icon: 'arrow-graph-up-right',
  //             title: '三级'
  //           },
  //           component: () => import('@/view/multilevel/level-2/level-2-1.vue')
  //         }
  //       ]
  //     },
  //     {
  //       path: 'level_2_3',
  //       name: 'level_2_3',
  //       meta: {
  //         icon: 'arrow-graph-up-right',
  //         title: '二级-3'
  //       },
  //       component: parentView,
  //       children: [
  //         {
  //           path: 'level_2_3_1',
  //           name: 'level_2_3_1',
  //           meta: {
  //             access: ['super_admin'],
  //             icon: 'arrow-graph-up-right',
  //             title: '三级-1'
  //           },
  //           component: () => import('@/view/multilevel/level-2/level-2-1.vue')
  //         },
  //         {
  //           path: 'level_2_3_2',
  //           name: 'level_2_3_2',
  //           meta: {
  //             access: ['user'],
  //             icon: 'arrow-graph-up-right',
  //             title: '三级-2'
  //           },
  //           component: () => import('@/view/multilevel/level-2/level-2-1.vue')
  //         }
  //       ]
  //     }
  //   ]
  // }
]
export default [
  ...staticRouters,
  ...asyncRouters
]
