<template>
  <div class="register-container">
    <div class="card">
      <h1 class="register-title">Register</h1>
      <form class="register-form" @submit.prevent="registerHandler">
        <input
          v-model="name"
          type="text"
          placeholder="Username"
          class="register-input"
        />
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="register-input"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="register-input"
        />
        <button type="submit" class="register-button">Register</button>
      </form>
    </div>
  </div>
</template>
<script>
import useUserStore from '@/store/user'
import { mapActions } from 'pinia'
export default {
  name: 'RegisterComponent',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async registerHandler() {
      if (!this.name || !this.email || !this.password) return
      try {
        await this.register({
          name: this.name,
          email: this.email,
          password: this.password,
          userType: 'student',
        })
      } catch (error) {
        console.log(error.message)
      }
    },

    ...mapActions(useUserStore, ['register']),
  },
}
</script>
<style>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.card {
  width: 50vh;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.register-title {
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
  animation: slide-in-top 0.5s ease-in-out;
}

.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: slide-in-bottom 0.5s ease-in-out;
}

.register-input {
  width: 200px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  animation: slide-in-bottom 0.5s ease-in-out;
}

.register-button {
  padding: 10px 20px;
  background-color: #2196f3;
  color: #fff;
  border: none;
  border-radius: 5px;
  animation: slide-in-bottom 0.5s ease-in-out;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-in-bottom {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
