<template>
  <div class="postlist">
    <!--显示数据正在加载-->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading" />
    </div>
    <!--主题列表-->

    <div class="posts">
      <div class="panel">
        <a @click="tabChange('all', 1)" :class="{ active: isactive === 1 }">全部</a>
        <a @click="tabChange('good', 2)" :class="{ active: isactive === 2 }">精华</a>
        <a @click="tabChange('share', 3)" :class="{ active: isactive === 3 }">分享</a>
        <a @click="tabChange('ask', 4)" :class="{ active: isactive === 4 }">问答</a>
        <a @click="tabChange('job', 5)" :class="{ active: isactive === 5 }">招聘</a>
      </div>
      <div class="cell" v-for="(item, key) in posts" :key="key">
        <!-- 头像 -->
        <img :src="item.author.avatar_url" alt="" />
        <!-- 回复数量 -->
        <span>
          <span class="reply_count">{{ item.reply_count }}/{{ item.visit_count }}</span>
        </span>
        <span
          :class="[
            {
              put_good: item.good === true,
              put_top: item.top === true,
              topiclist_tab: item.good != true && item.top != true
            }
          ]"
        >
          <span>
            {{ item | tabFormatter }}
          </span>
          <!-- 帖子的分类 -->
        </span>
        <!-- 标题 -->
        <router-link
          :to="{
            name: 'post_content',
            params: {
              id: item.id,
              name: item.author.loginname
            }
          }"
          ><span class="title">{{ item.title }}</span></router-link
        >
        <!-- 回复时间 -->
        <span class="reply_time">{{ item.last_reply_at | formatDate }}</span>
      </div>
      <!--分页-->
      <pagination @handleList="renderList"></pagination>
    </div>
  </div>
</template>

<script>
import pagination from './Pagination'
export default {
  name: 'PostList',
  data () {
    return {
      isLoading: false,
      posts: [],
      tab: '', // 切换主题
      isactive: 1,
      postpage: 1
    }
  },
  components: {
    pagination
  },
  created () {
    this.isLoading = true
    this.getData()
  },
  methods: {
    getData () {
      this.$http
        .get('https://cnodejs.org/api/v1/topics', {
          params: {
            tab: this.tab,
            page: this.postpage,
            limit: 20
          }
        })
        .then(res => {
          this.isLoading = false
          // console.log(res)
          this.posts = res.data.data
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    renderList (value) {
      this.postpage = value
      this.getData()
    },
    tabChange (value, num) {
      // console.log(value)
      this.tab = value
      this.isactive = num
      this.getData()
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  height: 30px;
  width: 30px;
  border-radius: 4px;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}

.cell {
  padding: 10px 0 10px 10px;
  background: rgb(255, 255, 255);
  max-width: 1000px;
  min-width: 300px;
  border: 1px solid rgb(194, 191, 191);
}
.panel {
  padding: 10px 0 10px 10px;
  max-width: 1000px;
  min-width: 300px;
  border: 1px solid rgb(194, 191, 191);
  background: rgb(255, 255, 255);
}
.panel a {
  text-decoration: none;
  color: #80bd01;
  margin: 0 10px;
}
.panel a:hover {
  color: #08c;
}
.active {
  background-color: #80bd01;
  color: #fff !important;
  padding: 3px 4px;
  border-radius: 3px;
}
.put_good {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
}
.put_top {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
}
.topiclist_tab {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  font-size: 12px;
}
.reply_time {
  float: right;
  margin-right: 10px;
}
.title,
.reply_count,
.topiclist_tab,
.put_top,
.put_good {
  margin-left: 20px;
  white-space: nowrap; //强制不换行
  display: inline-block;
  max-width: 600px; //固定盒子的宽度
  overflow: hidden; //超出部分隐藏
  text-overflow: ellipsis; //显示‘...’
}
div > a {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
div > a:hover {
  color: rgb(90, 161, 122);
}
.postlist {
  display: grid;
  grid: 1fr /1000px 1fr;
}
</style>
