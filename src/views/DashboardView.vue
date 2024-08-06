<script setup>
import PropertyData from '../components/dashboard/PropertyData.vue';
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6 bg-dasboard"></div>
      <PropertyData />
    </div>
  </div>
</template>

<style scoped>
.bg-dasboard {
    background-image: url("../assets/img/img_dashboard.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}
</style>
