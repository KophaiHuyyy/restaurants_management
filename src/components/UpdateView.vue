<template>
    <div>
        <HeaderView></HeaderView>
        <h1>Hello {{ name }}, Welcome on Update Restaurant Page</h1>
        <form class="add" action="#">
            <input type="text" name="name" v-model="Retaurant.name" placeholder="Enter Name...">
            <input type="text" name="contact" v-model="Retaurant.contact" placeholder="Enter Contact...">
            <input type="text" name="address" v-model="Retaurant.address" placeholder="Enter Address...">
            <button @:click="updateRestaurant" >Update new Restaurant.</button>
        </form>
    </div>
</template>

<script>
import HeaderView from "./HeaderView";
import axios from "axios";

export default {
    name: 'UpdateView',
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
    async mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({name: 'SignUp'});
        }

        const result = await axios.get('http://localhost:3000/restaurants/'+ this.$route.params.id)
        console.warn(result.data)
        this.Retaurant = result.data
    },
    methods: {
        async updateRestaurant() {
            console.warn(this.Retaurant)
            const result = await axios.put('http://localhost:3000/restaurants/' + this.$route.params.id, {
                name: this.Retaurant.name,
                contact: this.Retaurant.contact,
                address: this.Retaurant.address,
            })
            if(result.status === 200) {
                this.$router.push({name: 'HomeView'})
            }
        }
    }
}
</script>

<style>

</style>