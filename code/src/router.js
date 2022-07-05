import Vue from 'vue'
import Router from 'vue-router'
import Article from '../src/components/Article'
import PostList from '../src/components/PostList'
import UserInfo from '../src/components/UserInfo'
import SliderBar from '../src/components/SliderBar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        main: PostList
      }
    },
    {
      path: '/topic/:id&author=:name',
      name: 'post_content',
      components: {
        main: Article,
        SliderBar: SliderBar
      }
    },
    {
      name: 'user_info',
      path: '/userinfo/:name',
      components: {
        main: UserInfo
      }
    }

  ]
})
