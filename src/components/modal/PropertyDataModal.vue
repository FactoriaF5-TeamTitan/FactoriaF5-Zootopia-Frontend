<script setup>
import { ref } from 'vue';

const newAnimal = ref({
  name: '',
  country: '',
  type: '',
  specimens: '',
  gender: '',
  date: '',
});

//axios.post('/new/animal', newAnimal)
//  .then(function (response) {
//    console.log(response);
//  })
//  .catch(function (error) {
//    console.log(error);
//  });

const resetForm = () => {
  newAnimal.value.name = '';
  newAnimal.value.country = '';
  newAnimal.value.type = '';
  newAnimal.value.specimens = '';
  newAnimal.value.gender = '';
  newAnimal.value.date = '';
};
</script>

<template>
  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
    tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Add Animal</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="login">
          <div class="modal-body">
            <label class="text-black" for="name">Name</label>
            <div class="input-group mb-3">
              <input id="name" v-model="newAnimal.name" type="text" class="form-control" placeholder=""
                aria-label="Example text with button addon" aria-describedby="button-addon1">
            </div>
            <label class="text-black" for="country">Country</label>
            <div class="input-group mb-3">
              <select v-model="newAnimal.country" class="form-select" id="country">
                <option selected class="disabled">Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <label class="text-black" for="type">Type</label>
            <div class="input-group mb-3">
              <select v-model="newAnimal.type" class="form-select" id="type">
                <option selected class="disabled">Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <label class="text-black" for="specimens">Specimens</label>
            <div class="input-group mb-3">
              <select v-model="newAnimal.specimens" class="form-select" id="specimens">
                <option selected class="disabled">Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <label class="text-black" for="gender">Gender</label>
            <div class="input-group mb-3">
              <select v-model="newAnimal.gender" class="form-select" id="gender">
                <option selected class="disabled">Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <label class="text-black" for="date">Date</label>
            <div class="input-group mb-3">
              <input v-model="newAnimal.date" type="date" name="date" id="date">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
            <button @click="resetForm" type="button" class="btn btn-outline-primary">Reset</button>
            <button type="submit" class="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>