<template>
  <div class="app" id="app">
    <div class="center-block w-xxl w-auto-xs p-y-md">
      <div class="navbar">
        <div class="pull-center">
          <!-- Brand/logo can be included here -->
        </div>
      </div>
      <div class="p-a-md box-color r box-shadow-z1 text-color m-a">
        <div class="m-b text-sm">
          <img :src="logo" alt="Logo" />
        </div>
        <form @submit.prevent="login">
          <div class="md-form-group float-label">
            <input type="text" class="md-input" v-model="email" required />
            <label>Username</label>
          </div>
          <div class="md-form-group float-label">
            <input type="password" class="md-input" v-model="password" required />
            <label>Password</label>
          </div>
          <button type="submit" class="btn primary btn-block p-x-md">Sign in</button>
        </form>
      </div>
      <div class="p-v-lg text-center">
        <div class="m-b"><a href="forgot-password.html" class="text-primary _600">Forgot password</a></div>
        <div>Don't have an account? <a href="signup.html" class="text-primary _600">Sign up</a></div>
      </div>
    </div>
  </div>
</template>
<style>
._600 {
  font-weight: 600; }
.text-primary,
.text-primary-hover a:hover {
  color: #0cc2aa !important;
  font-weight: 600}
a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  outline: 0; }
</style>
<script>
import logo from "../assets/images/gift2.png"
import authService from "../services/authService.js";
export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      error: null,
      logo
    };
  },
  methods: {
    async login() {
      // Example API call to authenticate the user
      try {
        const response = await authService.login({
            username: this.email,
            password: this.password,
          });

        if (response.data.token) {
          localStorage.setItem('authToken', response.data.token); // Store the JWT token

          // Optionally redirect to another page on successful login
          this.$router.push('/dashboard'); // Redirect to main app/dashboard
        } else {
          this.error = 'Invalid credentials. Please try again.';
        }
      } catch (error) {
        this.error = 'Login failed. Please try again later.';
        console.error('Login error:', error);
      }
    },
  },
};
</script>
