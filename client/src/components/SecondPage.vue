<template>
	<div>
		<h2>Detailed Quest Statistics</h2>
		<table align="center">
		    <tr>
		      <th>Build ID</th>
		      <th>Platform</th>
		      <th>Quest Name</th>
		    </tr>
		    <tr v-bind:key="data.id" v-for="data in generalQuestInfo" v-if="data.alias == 'BN' && isActive == 1">
		      <td>{{ data.globalId }}</td>
		      <td>{{ data.platform }}</td>
		      <td>{{ data.alias }}</td>
		    </tr>
		    <tr v-bind:key="data.id" v-for="data in generalQuestInfo" v-if="data.alias == 'SAM' && isActive == 2">
		      <td>{{ data.globalId }}</td>
		      <td>{{ data.platform }}</td>
		      <td>{{ data.alias }}</td>
		    </tr>
		    <tr v-else-if="isActive == 3">
		      <td>NO INFO</td> 
		    </tr>    
	  </table>
	  <h3>Pathways</h3>
	  <table align="center">
	    <tr>
	      <th>Status</th>
	      <th>Path name</th>
	      <th>Leafs Info</th>
	    </tr>
	    <tr v-bind:key="data.id" v-for="data in generalQuestInfo" v-if="data.alias == 'BN' && isActive == 1">
	      <td>{{ data.pathway.status }}</td>
	      <td>{{ data.pathway.name }}</td>
	      <ul>
	        <li v-for="(leaf, index) in data.pathway.leafs" :key="index">
	          <i :class="getIconClass(data.id, leaf)"></i> {{ leaf }}
	        </li>
	      </ul>
	    </tr>
	    <tr v-bind:key="data.id" v-for="data in generalQuestInfo" v-if="data.alias == 'SAM' && isActive == 2">
	      <td>{{ data.pathway.status }}</td>
	      <td>{{ data.pathway.name }}</td>      
	      <ul>
	        <li v-for="(leaf, index) in data.pathway.leafs" :key="index">
	          <i :class="getIconClass(data.id, leaf)"></i> {{ leaf }}
	        </li>
	      </ul>     
	    </tr>
	    <tr v-else-if="isActive == 3">
	      <td>NO INFO</td> 
	    </tr> 
	  </table>
   </div>
</template>


<script>
export default {
	name: "SecondPage",
	props: ["generalQuestInfo", "isActive", "getIconClass"]		
	
}
</script>

<style scoped>
li {
  list-style: none;
  display: inline;
}

table {
	width: 1200px;
}
	
</style>