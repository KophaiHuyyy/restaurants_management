<template>
    <div>
        <img class="logo" src="../assets/images.png">
        <h1>Login Page</h1>
    
        <div class="login">
            <input v-model="email" type="text" placeholder="Enter Email">
            <input v-model="password" type="password" placeholder="Enter Password">
            <button v-on:click="login">Login</button>
            <p>
                <router-link to="/sign-up">Sign-up</router-link> <!-- chuyển hướng người dùng đến một tuyến (route) có tên là SingUp. -->
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoginView',
    data() //Chứa data được nhập vào từ input của biến email và password
    {
        return {
            email : '',
            password : ''
        }
    },
    methods: {
        async login()
        {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`, // lấy(get) data từ api đặt vào biến email và biến password

            )
            if (result.status==200 & result.data.length > 0) 
            {
                localStorage.setItem("user-info", JSON.stringify(result.data[0])) //lưu trữ thông tin người dùng vào một cặp khóa-giá trị trong localStorage.
                this.$router.push({ name: 'HomeView' }) // chuyển hướng đến HomeView
            }
        }
    }
}
</script>

<style>

</style>