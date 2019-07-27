<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  background-color: #f2f2f2;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 80px;   
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

table, th, td {
  border: 2px solid black;
  border-collapse: collapse;
  width: 900px;
  background-color: #e3e3e3;

}

th, td {
  padding: 15px;    
}

</style>
