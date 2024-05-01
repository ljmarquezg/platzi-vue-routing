import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/home',
    redirect: { name: 'Home' }
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/chats",
    name: "Chats",
    component: () => import("../views/ChatsView.vue"),
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: ":chatId",
        name: "Chat Details",
        component: () => import("../views/ChatDetailsView.vue"),
        props: true,
        /* En caso de querer customizar las props que se pasan al componente hijo
         props: (route) => {
         return { chatId: route.params.chatId }
         }*/
      }
    ]
  },
  {
    path: '/sesion',
    name: 'Sesion',
    component: () => import('../views/SesionView.vue'),
    children: [
      {
        path: '',
        components: {
          default: () => import('../views/LoginView.vue'),
          register: () => import('../views/RegisterView.vue'),
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from) => {
  console.log('Navegación a una nueva ruta');
  console.log('Desde:', from);
  console.log('Hacia:', to);

  /*if (to.meta?.requireAuth) {

    return { name: 'Sesion'};
  }*/
  return true;
});

export default router;
