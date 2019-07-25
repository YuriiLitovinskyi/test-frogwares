<template>
  <div id="app">
    <h1>Test Task</h1> 
    <MainPage v-bind:mainPageInfo="mainPageInfo" v-on:main-handle="handler" />      
	      
    <ul v-bind:key="data.id" v-for="data in generalQuestInfo">
	  <li> {{data.name}} </li>
	</ul>
    <ul v-bind:key="data.id" v-for="data in finishedQuestleafs">
	  <li> {{data.name}} </li>
	</ul>    
	
  </div>
</template>

<script>

import MainPage from './components/MainTable'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    MainPage   
  },

  data(){
  return {
    mainPageInfo: [],
	  generalQuestInfo: [],
	  finishedQuestleafs: []
  }
},

methods: {
	loadGeneralQuestInfo() {
		axios.get("http://localhost:3004/general")
		.then(res => this.generalQuestInfo = res.data)
        .catch(err => console.log(err));		
	},
	
	loadFinishedQuestleafs() {
		axios.get("http://localhost:3004/finished")
		.then(res => this.finishedQuestleafs = res.data)
        .catch(err => console.log(err));
	},
	handler: function(f1, f2) {
		this.loadGeneralQuestInfo();
		this.loadFinishedQuestleafs();
	}
 
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
  margin-top: 80px; 
}

</style>
