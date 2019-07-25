<template>
  <div id="app">    
    <HelloWorld msg="Welcome to Your Vue.js App"/>    
	<table align="center">
	  <tr>
	    <th v-bind:key="data.id" v-for="data in mainPageInfo">{{data.alias}}</th>
	  </tr>
	  <tr>	    
		<td v-bind:key="data.id" v-for="data in mainPageInfo">		    
            <i v-on:click="handler" v-bind:class="data.status == 'SUCCESS' ? 'fas fa-check': 
				data.status == 'CRASH' ? 'fas fa-times' : 
							  'fas fa-minus'"></i> 			
		</td>
	  </tr>
	</table>
    
    <ul v-bind:key="data.id" v-for="data in generalQuestInfo">
	  <li> {{data.name}} </li>
	</ul>
    <ul v-bind:key="data.id" v-for="data in finishedQuestleafs">
	  <li> {{data.name}} </li>
	</ul>    
	
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
  margin-top: 60px; 
}

table, th, td {
	border: 2px solid black;
	border-collapse: collapse;
    width: 900px;	
}

th, td {
	padding: 15px;	
	text-align: center;
}

.fas {	
	font-size: 2.2em;
	padding: 20px;
}

.fa-check {
	color: #008900;
}

.fa-times {
	color: #FF0000; 
}

.fa-minus {
	color: #000000;
}

i:hover {	
	transform:scale(1.5,1.5);
    -webkit-transform:scale(1.5,1.5);
    -moz-transform:scale(1.5,1.5);
}

</style>
