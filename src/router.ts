import { createWebHashHistory, createRouter } from 'vue-router'
import Home from "./views/Home.vue"
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import DialogDemo from './components/DialogDemo.vue';

const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, redirect: '/doc/switch', children: [
                { path: 'switch', name: "switch", component: SwitchDemo },
                { path: 'dialog', name: "dialog", component: DialogDemo },
            ]
        }
    ]
});

export default router;