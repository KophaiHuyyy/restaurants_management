<template>
  <!-- Nơi chưa trang HomeView được định tuyến từ file routers.js -->
<router-view /> 
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box
  ;
}

.logo {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
    
.register input, .login input, .add input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}

.register button, .login button, .add button{
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
} 
</style>
