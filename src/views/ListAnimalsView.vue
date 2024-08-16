<script setup>
import axios from 'axios';
import { ref } from 'vue';


const uri = import.meta.env.VITE_API_ENDPOINT_ZOOTOPIA
const totalAnimals = ref([]);

const data = async () => {
	const response = await axios.get(uri + '/animals')
	totalAnimals.value = await response.data;
}

data();
</script>

<template>
  <div class="container mt-5 pt-5">
    <div class="row">
      <div class="col-10"></div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Country</th>
            <th scope="col">Type</th>
            <th scope="col">Family</th>
            <th scope="col">Gender</th>
            <th scope="col">Date</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="request in totalAnimals" :key="request.id">
            <th>{{ request.name }}</th>
            <th>{{ request.country }}</th>
            <th>{{ request.type }}</th>
            <th>{{ request.family }}</th>
            <th>{{ request.genre }}</th>
            <th>{{ request.date }}</th>
            <th>{{ request.image }}</th>
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
