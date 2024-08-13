<script setup>
import axios from 'axios';
import { ref } from 'vue';

const listData = ref([])

// Hacer una petición para un usuario con ID especifico
axios.get('http://localhost:8080/api/v1/data')
  .then(function (response) {
	listData.value = response.data;
  })
  .catch(function (error) {
	// manejar error
	alert('There was a problem with the data request');
	console.log(error);
  })
  .finally(function () {
	// siempre sera executado
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
			{{ listData.value }}
			<ul class="list-group list-group-flush">
				<li v-for="type in listData" :key="type.id" class="list-group-item">{{ type.family }}: {{ type.count }}
				</li>
			</ul>
		</div>
	</div>
</template>
