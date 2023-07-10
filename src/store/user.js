import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    isAdmin: false,
    user: {},
  }),
  getters: {
    getValue() {
      return this.value
    },
  },
  actions: {
    async register({ email, password, name, userType }) {
      const userCred = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      /**
       * using set in place of add allows us to assign the document an id of our choice.
       */
      await usersCollection.doc(userCred?.user?.uid).set({
        name,
        email,
        userType,
      })
      const res = await usersCollection.doc(userCred?.user?.uid).get()
      console.log('user===========>', res.data())
      this.user = res.data()
      this.isLoggedIn = true
    },
    async login({ email, password }) {
      console.log('here', email, password);
      const res = await auth.signInWithEmailAndPassword(email, password)
      console.log('main', res);
      this.isLoggedIn = true

    },
    async logout() {
      await auth.signOut()
      this.isLoggedIn = false
      this.isAdmin = false
    },
  },
})
