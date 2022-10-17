import {createStore} from "vuex"

const store = createStore({
    state() {
        return {
            theme: 'light'
        }
    },
    mutations: {
        CHANETHEME(state, theme) {
            state.theme = theme
            document.documentElement.setAttribute('theme-mode', theme);
        }
    },
    getters(){
        return{
            theme: this.state.theme
        }
    }
})

export default store
