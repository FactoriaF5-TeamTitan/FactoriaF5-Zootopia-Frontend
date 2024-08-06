<script setup>
import PropertyDataModal from '../modal/PropertyDataModal.vue';
import CardDashboard from './CardDashboard.vue';
</script>

<template>
  <div class="col-12 col-md-6 d-flex align-items-center">
    <ImageBgDashboard />
    <CardDashboard />
  </div>
  <PropertyDataModal />
</template>

<style scoped></style>