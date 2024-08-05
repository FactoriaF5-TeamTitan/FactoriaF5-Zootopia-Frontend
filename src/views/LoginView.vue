<script setup>
import { useCounterStore } from '@/stores/counter';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const useremail = ref('');
const password = ref('');
const router = useRouter();
const store = useCounterStore();

const login = async () => {
    try {
        const response = await axios.post('/api/login', {
            email: useremail.value,
            password: password.value
        });
        const data = response.data;
        if (data.success) {
            store.commit('userLogin', { username: data.username, isAuthenticated: true });
            const redirectPath = router.currentRoute.value.query.redirect || '/dashboard';
            router.push(redirectPath);
        } else {
            alert('Invalid username or password');
        }
    } catch (error) {
        console.error('There was a problem with the login request:', error);
        alert('There was a problem with the login request');
    }
};
</script>

<template>
    <main class="d-flex align-items-center py-4 bg-body-tertiary bg-image">
        <div class="form-signin w-100 m-auto bg-cristal rounded">
            <form @submit.prevent="login">
                <div class="d-flex justify-content-center">
                    <h1 class="display-5 mb-3">Log in</h1>
                </div>
                <div class="mb-3">
                    <label for="floatingInput">Email address</label>
                    <input type="email" class="form-control" id="floatingInput" placeholder="Enter your email"
                        v-model="useremail" required>
                </div>
                <div class="mb-3">
                    <label for="floatingPassword">Password</label>
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                        v-model="password" required>
                </div>
                <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            </form>
        </div>
    </main>
</template>

<style scoped>
.bg-image {
    background-image: linear-gradient(to bottom,
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.4)), url("../assets/img/fondo_login.jpg");
            height: 100%;
}

.bg-cristal {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.408);
}

.form-signin {
    max-width: 330px;
    padding: 1rem;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>