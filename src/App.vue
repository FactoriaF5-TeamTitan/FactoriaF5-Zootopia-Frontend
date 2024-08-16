<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
    <header>
        <NavBar />
    </header>

    <main class="mt-6">
        <RouterView />
    </main>
</template>

<style></style>