
<template>
  <div id="app">
    <h1>Quest Statistics</h1> 
    <MainPage  v-on:main-handle="handler($event)" />         
  </div>
</template>

<script>
import MainPage from '../components/MainPage'
import SecondPage from '../components/SecondPage'
import "@fortawesome/fontawesome-free/css/all.css";   //npm install --save-dev @fortawesome/fontawesome-free

export default {  
    components: {
        MainPage          
    },

    methods: {	
      	handler: function(event) {		
            if (event == 'SUCCESS'){
                return this.$store.state.isActive = 1;
            } else if (event == 'CRASH'){
                return this.$store.state.isActive = 2;
            } else {
                return this.$store.state.isActive = 3;
            }    
      	},  
        getIconClass(id, leaf) {
            return this.$store.state.finishedQuestleafs.find(item => item.questId === id && item.name === leaf) ? "fa fa-check" : "fa fa-times";
          }  
    },

    mounted() {
        this.$store.dispatch("FetchMainPageInfo");
        this.$store.dispatch("FetchGeneralQuestInfo");
        this.$store.dispatch("FetchFinishedQuestleafs");
    },  
}
</script>

