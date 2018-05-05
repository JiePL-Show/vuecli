<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p><button @click="goback">后退</button><button @click="gobefore">前进</button><button @click="gohome">首页</button></p>
    <p>导航 ：
      <router-link to="/">首页</router-link> |
      <router-link to="/hi">Hi页面</router-link> |
      <router-link :to="{name:'hi1',params:{username:'jspang',id:'123'}}">-Hi页面1</router-link> |
      <router-link to="/hi/hi2">-Hi页面2</router-link> |
      <router-link to="/goback">goback</router-link> |
      <router-link to="/params/222/jspang website is very good">params</router-link> |
      <router-link to="/goparams/111/jspang website is very good">goparams</router-link> |
      <router-link to="/jspang">jspang</router-link>|
      <router-link to="/bbbbbb">我是瞎写的</router-link> |
    </p>
    <p>{{ $route.name}}</p>
    <transition name="fade">
    <router-view/>
    </transition>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"/>
 <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goback(){
      this.$router.go(-1);
    },gobefore(){
      this.$router.go(1);
    },gohome(){
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity 5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity 5s;
}
</style>
