// setup firebase
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBAws8NRye9QwCJGnpBVmwQogjEVEZnLqM',
  authDomain: 'preschian-com.firebaseapp.com',
  databaseURL: 'https://preschian-com.firebaseio.com',
  storageBucket: 'preschian-com.appspot.com',
  messagingSenderId: '206243381401',
}
firebase.initializeApp(config)
module.exports = firebase.database()
