import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'
// import { firebaseApp } from './main'

const config = {

  apiKey: "AIzaSyAOsdhtKFPcuKSscSmPe58FpCSGPpNT4dw",
  authDomain: "web-dashboard-5f0e0.firebaseapp.com",
  projectId: "web-dashboard-5f0e0",
  storageBucket: "web-dashboard-5f0e0.appspot.com",
  messagingSenderId: "780413255109",
  appId: "1:780413255109:web:683d0fab9b1a51869c5fac",
  measurementId: "G-HK9XGM8813"
};


const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

  
  export const createUser = user => {
    return usersCollection.add(user)
  }
  
  export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
  }
  
  export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
  }
  
  export const deleteUser = id => {
    return usersCollection.doc(id).delete()
  }
  
  export const useLoadUsers = () => {
    const users = ref([])
    const close = usersCollection.onSnapshot(snapshot => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return users
  }