<script setup>

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-white fixed-top" aria-label="Twelfth navbar">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10"
                aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample10">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink to="/login" class="nav-link">Zootopia</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/dashboard" class="nav-link">Dashboard</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/list" class="nav-link">Specimens</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
</style>