import App from './App.vue'
import './style.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import ClientView from './views/ClientView.vue'
import ProductsView from './views/ProductsView.vue'
import InvoicesView from './views/InvoicesView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
      { path: '/', name: "Client", component: ClientView },
      { path: '/products', name: "Products", component: ProductsView },
      { path: '/invoices', name: "Invoices", component: InvoicesView },
    ]
});

createApp(App)
  .use(router)
  .mount('#app')