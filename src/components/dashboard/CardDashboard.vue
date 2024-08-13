<script setup>
import axios from 'axios';
import { ref } from 'vue';

const listData = ref([]);

const data = async () => {
	const response = await axios.get('http://localhost:8080/api/v1/animals')
	listData.value = await response.data;
}

data();

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
