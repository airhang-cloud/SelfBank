import {createStore} from "vuex"

const store = createStore({
    state() {
        return {
            theme: 'light',
            themeColor: 'rgb(217, 0, 147)'
        }
    },
    mutations: {
        CHANETHEME(state, theme) {
            state.theme = theme
            document.documentElement.setAttribute('theme-mode', theme);
        },
        // 改变按钮色
        CHANGECOLORPICK(state, color){
            state.themeColor = color
            document.documentElement.style.setProperty('--td-brand-color', color)
        }
    },
    getters(){
        return{
            theme: this.state.theme
        }
    }
})

export default store
