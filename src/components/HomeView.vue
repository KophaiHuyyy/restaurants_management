<template>
  <div>
    <HeaderView></HeaderView>
    <!-- Biến name được lấy dữ liệu từ phương thức data() -->
    <h1>Hello {{ name }}, Welcome on Home Page</h1>
    <table border="1">
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
        <td>Action</td>
      </tr>
      <tr v-for="item in restaurant" :key="item.id"> <!-- thuộc tính key để Vue.js có thể xác định các phần tử trong danh sách và theo dõi các thay đổi -->
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td>
          <router-link :to="'/update-view/'+item.id">Update</router-link>
          <button v-on:click="deleteRestaurant(item.id)">Delete</button> <!-- Hàm 'deleteRestaurant' vs tham số truyền vào là id của item -->
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import HeaderView from './HeaderView.vue'
import axios from 'axios';
export default {
    name: 'HomeView',
    data() {
      return {
        name: '', //Đây là biên name để chứa tên người dùng.
        restaurant: [],
      }
    },
    components: {
      HeaderView
    },
    methods: {
      async deleteRestaurant(id) {
        let result = await axios.delete('http://localhost:3000/restaurants/' + id);
        console.log(result)
        if(result.status == 200) {
          this.loadData();
        }
      },

      async loadData() {
        let user = localStorage.getItem("user-info") //Lấy thống tin người dùng ở trong localStorage
        this.name = JSON.parse(user).name; //Chuyển đối chuỗi JSON của biến name thành SRING.
        if (!user)  //nếu ko có thông tin người dùng
        {
          this.$router.push({ name: 'SingUp' }) //chuyển hướng người dùng đến một tuyến (route) có tên là SingUp.
        }

        let result = await axios.get("http://localhost:3000/restaurants") //Lấy data từ API
        console.log(result)
        this.restaurant = result.data // Data của mảng 'restaurant' = data của 'restaurant' đc fake trong API
      }
    },
    async mounted() {
      this.loadData();
    }
}
</script>

<style>
  td {
    width: 160px;
    height: 40px;
  }
</style>