<template>
  <div id="#app">
    <Header />
    <div class="container">
      <router-view name="SliderBar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>
<style>
html,
body {
  margin: 0;
  padding: 0;
  background: rgb(194, 191, 191);
}
.container {
  margin: 0 auto;
  min-width: 960px;
  max-width: 1400px;
  font-size: 20px;
}
</style>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
export default {
  name: 'home',
  components: {
    Header
  }
}
</script>
