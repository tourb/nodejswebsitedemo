<template>
  <div>
    <!--显示数据正在加载-->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading" />
    </div>
    <div class="userInformation">
      <header>
        <img :src="post.avatar_url" alt="" />{{ post.loginname }} 注册时间：{{ post.create_at | formatDate }}积分：{{
          post.score
        }}
      </header>
      <div class="box1">
        <h3>回复的主题</h3>
        <div v-for="(item1, index) in post.recent_topics" :key="index">
          <router-link
            :to="{
              name: 'post_content',
              params: {
                id: item1.id
              }
            }"
            >{{ item1.title }}</router-link
          >
        </div>
      </div>
      <div class="box2">
        <h3>创建的主题</h3>
        <div v-for="(item2, index) in post.recent_replies" :key="index">
          <router-link
            :to="{
              name: 'post_content',
              params: {
                id: item2.id
              }
            }"
            >{{ item2.title }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      isLoading: false,
      post: {}
    }
  },
  created () {
    this.isLoading = true
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`).then(res => {
        this.isLoading = false
        console.log(res)
        this.post = res.data.data
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.userInformation {
  display: grid;
  grid: 200px 1fr 1fr/800px 1fr;
}
header {
  grid-area: 1/1/2/2;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 30px 30px;
  margin-top: 20px;
}
.box1 {
  grid-area: 2/1/3/2;
  background: rgb(255, 255, 255);
  margin-top: 20px;
  border-radius: 5px;
}
.box2 {
  grid-area: 3/1/3/2;
  background: rgb(255, 255, 255);
  margin-top: 20px;
  border-radius: 5px;
}

h3 {
  background: rgb(177, 176, 176);
  margin: 0;
  padding: 10px;
  border-radius: 5px 5px 0 0;
}
.box1 > div {
  padding: 10px;
}
.box2 > div {
  padding: 10px;
}
div > a {
  color: black;
  text-decoration: none;
}
div > a:hover {
  color: rgb(90, 161, 122);
}
</style>
