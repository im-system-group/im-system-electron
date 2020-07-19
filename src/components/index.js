import LoginV24 from './LoginV24/index.vue'
import LoginV30 from './LoginV30/index.vue'
import ArticleView from './ArticleView/index.vue'
import ArticlesView from './ArticlesView/index.vue'

export default {
    install(Vue) {
        Vue.component(LoginV24.name, LoginV24)
        Vue.component(LoginV30.name, LoginV30)
        Vue.component(ArticleView.name, ArticleView)
        Vue.component(ArticlesView.name, ArticlesView)
    },
}
