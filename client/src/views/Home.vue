
<template>
  <div id="app">
    <h1>Quest Statistics</h1> 
    <MainPage v-bind:mainPageInfo="mainPageInfo" v-on:main-handle="handler(loadGeneralQuestInfo, loadFinishedQuestleafs, $event)" />    
     <SecondPage v-bind:generalQuestInfo="generalQuestInfo" :isActive="isActive" :getIconClass="getIconClass"/>     
  </div>
</template>

<script>
import MainPage from '../components/MainPage'
import SecondPage from '../components/SecondPage'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    MainPage,
    SecondPage        
  },

  data(){
  return {
    mainPageInfo: [],
	  generalQuestInfo: [],
	  finishedQuestleafs: [],
    isActive: 0             //this value is changing according to icon that was clicked in table from MainTable.vue
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

	handler: function(f1, f2, event) {
		f1();
		f2();
    if (event == 'SUCCESS'){
      this.isActive = 1;
    } else if (event == 'CRASH'){
      this.isActive = 2;
    } else {
      this.isActive = 3;
    }    
	},
  
  getIconClass(id, leaf) {
      return this.finishedQuestleafs.find(item => item.questId === id && item.name === leaf) ? "fa fa-check" : "fa fa-times";
    }  
 
},

created(){ 
    axios.get("http://localhost:3004/")
    .then(res => this.mainPageInfo = res.data)
    .catch(err => console.log(err));     
  } 
}

</script>

