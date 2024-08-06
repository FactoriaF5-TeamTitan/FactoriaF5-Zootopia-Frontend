import LoginView from "@/views/LoginView.vue";
import { mount } from "@vue/test-utils";
import axios from "axios";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createRouter, createWebHistory } from "vue-router";

vi.mock('axios')
vi.mock('@/stores/counter', () => ({
    useCounterStore: vi.fn(() => ({
        commit: vi.fn()
    }))
}))

describe("LoginView", () => {
    let wrapper
    let router
    let pinia

    beforeEach(() => {
        pinia = createPinia()
        setActivePinia(pinia)

        router = createRouter({
            history: createWebHistory(),
            routes: [
                { path: '/login', name: 'Login' },
                { path: '/dashboard', name: 'Dashboard' }
            ]
        })

        wrapper = mount(LoginView, {
            global: {
                plugins: [router, pinia]
            }
        })
    })

    it('renders correctly', () => {
        expect(wrapper.find('h1').text()).toBe('Log in')
        expect(wrapper.find('input[type="email"]').exists()).toBe(true)
        expect(wrapper.find('input[type="password"]').exists()).toBe(true)
        expect(wrapper.find('button[type="submit"]').text()).toBe('Sign in')
    })

    it('updates v-model when input values change', async () => {
        const emailInput = wrapper.find('input[type="email"]')
        const passwordInput = wrapper.find('input[type="password"]')

        await emailInput.setValue('test@example.com')
        await passwordInput.setValue('password123')

        expect(wrapper.vm.useremail).toBe('test@example.com')
        expect(wrapper.vm.password).toBe('password123')
    })

    it('calls axios.post and redirects on successful login', async () => {
        axios.post.mockResolvedValue({ data: { success: true, username: 'testuser' } })

        await wrapper.find('input[type="email"]').setValue('test@example.com')
        await wrapper.find('input[type="password"]').setValue('password123')
        await wrapper.find('form').trigger('submit')

        await vi.waitFor(() => {
            expect(axios.post).toHaveBeenCalledWith('/api/login', {
                email: 'test@example.com',
                password: 'password123'
            })
        })

        await vi.waitFor(() => {
            expect(router.currentRoute.value.path).toBe('/dashboard')
        })
    })

    it('shows alert on login failure', async () => {
        axios.post.mockResolvedValue({ data: { success: false } })

        const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => { })

        await wrapper.find('input[type="email"]').setValue('test@example.com')
        await wrapper.find('input[type="password"]').setValue('wrongpassword')
        await wrapper.find('form').trigger('submit')

        await vi.waitFor(() => {
            expect(alertSpy).toHaveBeenCalledWith('Invalid username or password')
        })
    })

    it('redirects to dashboard on successful login', async () => {
        const mockResponse = { data: { success: true, username: 'testuser' } }
        axios.post.mockResolvedValue(mockResponse)
      
        await wrapper.find('input[type="email"]').setValue('test@example.com')
        await wrapper.find('input[type="password"]').setValue('password123')

        await wrapper.find('form').trigger('submit')

        expect(axios.post).toHaveBeenCalledWith('/api/login', {
          email: 'test@example.com',
          password: 'password123'
        })

        await vi.waitFor(() => {
          expect(router.currentRoute.value.path).toBe('/dashboard')
        })
      })

      it('shows alert on login failure', async () => {
        const mockResponse = { data: { success: false } }
        axios.post.mockResolvedValue(mockResponse)
        
        const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})

        await wrapper.find('input[type="email"]').setValue('test@example.com')
        await wrapper.find('input[type="password"]').setValue('wrongpassword')

        await wrapper.find('form').trigger('submit')

        await vi.waitFor(() => {
          expect(axios.post).toHaveBeenCalledWith('/api/login', {
            email: 'test@example.com',
            password: 'wrongpassword'
          })
          expect(alertSpy).toHaveBeenCalledWith('Invalid username or password')
        })
      })
      
      it('shows alert on network error', async () => {
        axios.post.mockRejectedValue(new Error('Network Error'))
        
        const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

        await wrapper.find('input[type="email"]').setValue('test@example.com')
        await wrapper.find('input[type="password"]').setValue('password123')

        await wrapper.find('form').trigger('submit')

        await vi.waitFor(() => {
          expect(axios.post).toHaveBeenCalledWith('/api/login', {
            email: 'test@example.com',
            password: 'password123'
          })
          expect(consoleSpy).toHaveBeenCalledWith('There was a problem with the login request:', expect.any(Error))
          expect(alertSpy).toHaveBeenCalledWith('There was a problem with the login request')
        })
      })
})