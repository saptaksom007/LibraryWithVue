import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABHD8e6d6O2_uXZqZF78GxYAMIywn4UAQ",
  authDomain: "saptaklib.firebaseapp.com",
  projectId: "saptaklib",
  storageBucket: "saptaklib.appspot.com",
  messagingSenderId: "76964269569",
  appId: "1:76964269569:web:cd63bd1531698ae82ffa00"
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const storageRef = storage.ref()

const usersCollection = db.collection('users')
const booksCollection = db.collection('books')

export { auth, db, usersCollection, booksCollection, storageRef }
