<template>
  <header>
    <nav>
      <ul>
        <li v-if="isAdmin">Welcome,{{ isAdmin }}</li>
        <li @click.prevent="toggleValue(0)">Home</li>
        <li @click.prevent="toggleValue(2)">Logout</li>
      </ul>
    </nav>
  </header>
</template>
  
  <script>
import { mapActions } from "pinia";
import useUserStore from "@/store/user";

export default {
  data() {
    return {
      storeVal: "",
    };
  },
  props: {
    isAdmin: {
      type: String,
      required: true,
    },
  },

  methods: {
    ...mapActions(useUserStore, ["logout"]),

    toggleValue(val) {
      if (val === 2) {
        this.logout();
        this.$router.push({ name: "dashboard" });
      }
      this.$emit("toggleValue", val);
    },
  },
};
</script>
  
  <style>
header {
  width: 90%;
  border-radius: 2vh;
  background-color: #2196f3;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: height 0.3s ease-in-out;
  margin-top: 2rem;
}

.header-expanded {
  height: 100vh;
}

nav ul {
  list-style-type: none;
  display: flex;
}

nav ul li {
  /* padding: 10px; */
  margin-right: 20px;
  cursor: pointer;
}

.menu-toggle {
  display: none;
  cursor: pointer;
}

.hamburger {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 5px 0;
  transition: transform 0.3s ease-in-out;
}

.header-expanded .menu-toggle .hamburger:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.header-expanded .menu-toggle .hamburger:nth-child(2) {
  opacity: 0;
}

.header-expanded .menu-toggle .hamburger:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

@media (max-width: 768px) {
  header nav {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .header-expanded {
    height: auto;
  }

  .header-expanded nav {
    display: block;
    background-color: #1565c0;
    padding: 20px;
  }

  .header-expanded nav ul {
    flex-direction: column;
    align-items: center;
  }

  .header-expanded nav ul li {
    margin-bottom: 10px;
  }
}
</style>