<template>
  <div>
    <img class="logo" src="../assets/images.png">
    <h1>Sign-up</h1>
  
    <div class="register">
      <input v-model="name" type="text" placeholder="Enter Name">
      <input v-model="email" type="text" placeholder="Enter Email">
      <input v-model="password" type="password" placeholder="Enter Password">
      <button v-on:click="singUp">Sign Up</button>
      <p>
        <router-link to="/login">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "SignUp",
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    methods: {
      async singUp() 
        {
          let result = await axios.post("http://localhost:3000/users", {
            name: this.name,
            email: this.email,
            password:  this.password
        });

        if (result.status==201) {
          localStorage.setItem("user-info", JSON.stringify(result.data))
          this.$router.push({ name: 'HomeView' })
        }
      }
    },
    mounted() {
      if (localStorage.getItem("user-info")) {
        this.$router.push({ name: 'HomeView' }) // Khi đăng ký thành công sẽ được định tuyến đến trang Home.
      }
    }
}
</script>

<style>
  
</style>