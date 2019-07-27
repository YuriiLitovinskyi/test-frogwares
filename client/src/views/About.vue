<template>
  <div class="about">
    <h1>This is an about page</h1>
     <SecondPage v-bind:generalQuestInfo="generalQuestInfo" :isActive="isActive" :getIconClass="getIconClass" />
  </div>
</template>

<script>
import SecondPage from '../components/SecondPage'


export default {
  name: 'About',
  components: {
  	SecondPage 
  },
  props: ["generalQuestInfo", "isActive", "getIconClass"]    
  }

  </script>