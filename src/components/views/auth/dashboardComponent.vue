<template>
  <headerComponent @toggleValue="getValue" />
  <login-component
    @loggedBy="loginValue"
    v-show="this.receivedValue === 0 ? true : false"
  />
  <RegisterComponent v-show="this.receivedValue === 1 ? true : false" />
  <BooksComponent v-show="this.receivedValue === 2 ? true : false" />
  <AboutComponent v-show="this.receivedValue === 3 ? true : false" />
</template>

<script>
import headerComponent from "@/widgets/authHeaderComponent.vue";
import LoginComponent from "@/widgets/loginComponent.vue";
import RegisterComponent from "@/widgets/registerComponent.vue";
import BooksComponent from "@/widgets/booksComponent.vue";
import AboutComponent from "@/widgets/aboutComponent.vue";

export default {
  name: "dashboardComponent",
  data() {
    return {
      receivedValue: 0,
      newValue: "",
    };
  },
  components: {
    headerComponent,
    LoginComponent,
    RegisterComponent,
    BooksComponent,
    AboutComponent,
  },
  methods: {
    getValue(value) {
      this.receivedValue = value;
    },
    loginValue(value) {
      this.newValue = value;
      console.log("the value is", value);
    },
  },
};
</script>

