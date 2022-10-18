import {createRouter, createWebHashHistory} from "vue-router"
import Index from "../pages/index.vue"
import Main from "../pages/main.vue"

const routes = [
    {
        path: '/',
        meta: {
            icon: "",
            title: "",
            description: "入口"
        },
        component: Index
    },
    {
        path: '/about',
        meta: {
            icon: "",
            title: "关于",
            description: "入口"
        },
        component: Main
    },
]


// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
export const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

router.afterEach((from, to, next) => {
    const {meta} = from
    window.document.title = meta?.title || "JobsAir‘s world"
    next()
})
