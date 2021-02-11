import  firebase from "firebase";  
const firebaseConfig = {
    apiKey: "AIzaSyD6gTa-4OnE6YmYmODGIYQqYkhuAiHX9F0",
    authDomain: "datatable-45e9b.firebaseapp.com",
    databaseURL: "https://datatable-45e9b-default-rtdb.firebaseio.com/",
    projectId: "datatable-45e9b",
    storageBucket: "datatable-45e9b.appspot.com",
    messagingSenderId: "683421386314",
    appId: "1:683421386314:web:497f7ba245ecbc38fc88b3",
    measurementId: "G-VPZWVYVJWY"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
firebase.analytics()
export default firebase.database().ref('Table');  