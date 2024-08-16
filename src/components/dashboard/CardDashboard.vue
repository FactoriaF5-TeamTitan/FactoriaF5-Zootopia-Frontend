<script setup>
import axios from 'axios';
import { ref } from 'vue';

const uri = import.meta.env.VITE_API_ENDPOINT_ZOOTOPIA
const totalAnimals = ref([]);

const data = async () => {
	const response = await axios.get(uri + '/animals/size')
	totalAnimals.value = await response.data;
}

data();


</script>

<template>
	<div class=" offset-md-3">
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">Total animals: {{ totalAnimals.value }}</h5>
				<div class="mt-2">
					<RouterLink to="/list" class="btn btn-outline-primary">List of animals</RouterLink>
				</div>
				<button class="btn btn-primary mt-2" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Add
					Animal</button>
			</div>
		</div>
	</div>
</template>
