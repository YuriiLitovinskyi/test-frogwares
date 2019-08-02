<template>
	<div>
		<table align="center">
		    <tr>
	    	  <th v-bind:key="data.id" v-for="data in mainPageInfo">{{ data.alias }}</th>
	  	    </tr>
	  	    <tr>	    
	    		<td v-bind:key="data.id" v-for="data in mainPageInfo">		    
	                <router-link :to="data.status == 'SUCCESS' || data.status == 'CRASH' ? '/second' : '/no-info'"><i v-on:click="$emit('main-handle', data.status)" v-bind:class="data.status == 'SUCCESS' ? 'fas fa-check': data.status == 'CRASH' ? 'fas fa-times' : 'fas fa-minus'"></i></router-link>		
	    		</td>
	  	    </tr>
	    </table>
	</div>
</template>

<script>
export default {
	name: "MainPage",	
	computed: {
		mainPageInfo() {
			return this.$store.state.mainPageInfo;
		}
	},
}
</script>

<style scoped>
table, th, td {
	border: 2px solid black;
	border-collapse: collapse;
    width: 900px;	
}

th, td {
	padding: 15px;		
}

.fas {	
	font-size: 2.2em;
	padding: 20px;
}

i:hover {	
	transform:scale(1.5,1.5);
    -webkit-transform:scale(1.5,1.5);
    -moz-transform:scale(1.5,1.5);
}
</style>
