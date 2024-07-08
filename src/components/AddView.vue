<template>
    <div>
        <HeaderView></HeaderView>
        <h1>Hello {{ name }}, Welcome on Add Restaurant Page</h1>
        <form class="add" action="#">
            <input type="text" name="name" v-model="Retaurant.name" placeholder="Enter Name...">
            <input type="text" name="contact" v-model="Retaurant.contact" placeholder="Enter Contact...">
            <input type="text" name="address" v-model="Retaurant.address" placeholder="Enter Address...">
            <button @:click="addRestaurant" >Add new Restaurant.</button>
        </form>
    </div>
</template>

<script>
import HeaderView from "./HeaderView";
import axios from "axios";

export default {
    name: 'AddView',
    components: {
        HeaderView,
    },
    data() {
        return {
            name: '',
            Retaurant: {
                name: '',
                contact: '',
                address: '',
            }
        }
    },
    methods: {
        async addRestaurant() {
            console.log(this.Retaurant)
            const result = await axios.post("http://localhost:3000/restaurants",
                {
                    name: this.Retaurant.name,
                    contact: this.Retaurant.contact,
                    address: this.Retaurant.address,
                }
            );
            console.warn("result", result);
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        this.name =JSON.parse(user).name
        if (!user) {
            this.$router.push({name: 'SignUp'});
        }
    }
}
</script>

<style>

</style>