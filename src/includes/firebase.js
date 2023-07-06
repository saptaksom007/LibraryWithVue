import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB_AnoiLV7Ww7qys4gJNSHp5SUwe4uDJrY',
  authDomain: 'library-management-4841b.firebaseapp.com',
  projectId: 'library-management-4841b',
  storageBucket: 'library-management-4841b.appspot.com',
  messagingSenderId: '118592485301',
  appId: '1:118592485301:web:fb32b80476f501caeccbfc',
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const storageRef = storage.ref()

const usersCollection = db.collection('users')
const booksCollection = db.collection('books')

export { auth, db, usersCollection, booksCollection, storageRef }
