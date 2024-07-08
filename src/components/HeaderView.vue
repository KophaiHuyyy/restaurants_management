<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add-view">Add Restaurant</router-link>
    <a v-on:click="logout" href="#">Logout</a>
  </div>
</template>

<script>
export default {
    name: 'HeaderView',
    methods: {
      logout() {
        // this.$store.commit('logout')
        localStorage.clear();
        this.$router.push({name: 'LoginView'});
      }
    }
}
</script>

<style>
  .nav {
    background: #333;
    overflow: hidden;
  }

  .nav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    margin-right: 5px;
  }

  .nav a:hover {
    background-color: #ddd;
    color: #333;
  }
</style>