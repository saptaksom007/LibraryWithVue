<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import useUserStore from '@/store/user'
import { mapWritableState } from 'pinia'
import { auth } from '@/includes/firebase'
export default {
  name: 'App',
  computed: {
    ...mapWritableState(useUserStore, ['isLoggedIn']),
  },
  created() {
    if (auth.currentUser) this.isLoggedIn = true
  },
}
</script>

<style>
#app {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
}
</style>
