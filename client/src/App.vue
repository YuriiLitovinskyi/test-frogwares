<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-bind:key="data.id" v-for="data in mainPageInfo">
      <h3> {{data.alias}} </h3>
    </div>
  </div>
</template>

<script>


import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    HelloWorld
  },

  data(){
  return {
    mainPageInfo: []
  }
},

methods: {
 
},

created(){ 
    axios.get("http://localhost:3004/")
    .then(res => this.mainPageInfo = res.data)
    .catch(err => console.log(err));
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
</style>
