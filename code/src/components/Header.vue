<template>
  <div class="header">
    <div class="container">
      <img src="../assets/cnodejs_light.svg" alt="" />
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">新手入门</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">关于</a></li>
        <li><a href="#">注册</a></li>
        <li><a href="#">登录</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  background: rgb(68, 68, 68);
  min-height: 70px;
  font-size: 13px;
  width: 100%;
  overflow: hidden; //外边距塌陷
}
.header.container {
  margin: 0 auto;
  min-width: 960px;
  max-width: 1400px;
  font-size: 20px;
}
img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-height: 70px;
  max-width: 120px;
}
li {
  list-style: none;
  margin-right: 20px;
}
li a {
  text-decoration: none;
  color: #ccc;
}
li a:hover {
  color: rgb(236, 232, 232);
}
ul {
  float: right;
  display: flex;
  font-size: 18px;
  margin-top: 25px;
}
</style>
