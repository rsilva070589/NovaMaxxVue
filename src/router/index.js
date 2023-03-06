import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from "@firebase/auth";

import Home from '../views/index.vue';
import store from '../store';


// Vue.use(VueRouter);
// import { createApp } from 'vue';
// const app = createApp();
// app.use(createRouter);

const routes = [
    //dashboard
    {
        path: '/',
        name: 'Pedido',
        component: () => import(/* webpackChunkName: "auth-login-boxed" */ '../components/vendas/Vendas.vue'),
        meta: { layout: 'auth',requiresAuth: true    }, 
    },

    {
      path: '/vendas',
      name: 'RelVendas',
      component: () => import(/* webpackChunkName: "auth-login-boxed" */ '../views/vendasRel/vendasRel.vue'),
      meta: { layout: 'app'  ,requiresAuth: true }, 
    },
    
    {
        path: '/itens',
        name: 'itens',
        component: () => import(/* webpackChunkName: "index2" */ '../views/itens/Itens.vue'),
       
        meta: { layout: 'app' ,requiresAuth: true }
    },

    {
      path: '/ambiente',
      name: 'ambiente',
      component: () => import(/* webpackChunkName: "index2" */ '../views/ambiente/Ambiente.vue'),
     
      meta: { layout: 'app' ,requiresAuth: true }
  },

    //auth
   
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "auth-login" */ '../views/auth/login.vue'),
        meta: { layout: 'auth'    }, 
    },
      
];

const router = new createRouter({
    // mode: 'history',
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const removeListener = onAuthStateChanged(
        getAuth(),
        (user) => {
          removeListener();
          resolve(user);
        }
  
      )
    })
  }
 

 
router.beforeEach(async(to,from, next)=> {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      console.log(store.state.login)
        if (store.state.login) {
            if(to.name == 'Pedido' || to.name == 'login'){
                store.commit('setLayout', 'auth');
            }else{
                store.commit('setLayout', 'app');
            }
         
          next();
        }else { 
          console.log('passo aqui')
          store.commit('setLayout', 'auth');
          next("/login")
        }
    }else {    
      next();
    }
  });

export default router;
