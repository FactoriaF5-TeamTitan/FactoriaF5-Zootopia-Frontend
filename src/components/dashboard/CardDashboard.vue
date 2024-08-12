<script setup>
import axios from 'axios';
import { ref } from 'vue';
import PropertyDataModal from '../modal/PropertyDataModal.vue';

const data = ref([])

axios.get('/api/v1/dashboard/data')
    .then(function (response) {
        data.value = response.data
    })
    .catch(function (error) {
        console.error('There was a problem with the data request:', error);
        alert('There was a problem with the data request');
    })
    .finally(function () {
        //
    });
</script>

<template>
    <div class=" offset-md-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Total animals:</h5>
                <div class="mt-2">
                    <RouterLink to="/list" class="btn btn-outline-primary">List of animals</RouterLink>
                </div>
                <button class="btn btn-primary mt-2" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Add
                    Animal</button>
                
            </div>
            <ul v-if="data.value != null" class="list-group list-group-flush">
                <li v-for="type in data" :key="type.id" class="list-group-item">{{ type.type }}: {{ type.count }}</li>
            </ul>
        </div>
    </div>
    <PropertyDataModal />
</template>
