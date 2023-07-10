<template>
  <div class="login">
    <form class="login-form">
      <h1 class="login-title">Login</h1>

      <div class="form-group">
        <label for="email">Email:</label>
        <input
          id="email"
          v-model.trim="email"
          type="email"
          :class="{ 'is-invalid': showError && !email }"
        />
        <div v-if="showError && !email" class="invalid-feedback">
          Email is required
        </div>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          id="password"
          v-model.trim="password"
          type="password"
          :class="{ 'is-invalid': showError && !password }"
        />
        <div v-if="showError && !password" class="invalid-feedback">
          Password is required
        </div>
        <br />
        <div class="checkbox-wrapper">
          <input
            type="checkbox"
            id="isAdmin"
            v-model="this.isAdmin"
            class="custom-checkbox"
          />
          <label for="isAdmin" class="checkbox-label">Is the user admin?</label>
        </div>
        <br />
      </div>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <button type="submit" @click.prevent="loginHandler" class="login-button">
        Login
      </button>
    </form>
  </div>
</template>

<script>
import useUserStore from "@/store/user";
import { mapWritableState, mapActions } from "pinia";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      showError: false,
      toggleValue: "",
      isAdmin: false,
      loginFailed: "",
    };
  },
  computed: {
    ...mapWritableState(useUserStore, ["isLoggedIn"]),
  },
  methods: {
    ...mapActions(useUserStore, ["isLoggedIn", "login"]),
    async loginHandler() {
      if (!this.email || !this.password) return;
      try {
        await this.login({
          email: this.email,
          password: this.password,
        });
        if (this.isLoggedIn && this.isAdmin) {
          console.log("the val", this.isAdmin);
          this.$router.replace({
            name: "adminHome",
            query: {
              isAdmin: "Admin",
            },
          });
        } else
          this.$router.replace({
            name: "home",
            query: {
              isAdmin: "Student",
            },
          });
      } catch (error) {
        this.loginFailed = error.message;
      }
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.login-form {
  width: 100%;
  max-width: 60vh;
  padding: 50px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  animation: slide-up 0.5s ease-in-out;
  height: 30vh;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.is-invalid {
  border-color: red;
}

.invalid-feedback {
  color: red;
  font-size: 14px;
  margin-top: 4px;
}

.login-button {
  display: block;
  width: 50%;
  margin: 0 auto;
  margin-top: 3em;
  padding: 8px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .login-form {
    padding: 10px;
  }
}
.checkbox-wrapper {
  display: flex;
  align-items: center;
}

.custom-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
}
.custom-checkbox:checked {
  background-color: #3d90e4;
  border-color: #3d90e4;
}

.custom-checkbox:checked::after {
  content: "\2714";
  font-size: 12px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.checkbox-label {
  font-size: 14px;
  color: #555;
}
.error-message {
  color: red;
}
</style>
