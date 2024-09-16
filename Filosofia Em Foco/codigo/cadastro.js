// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjjoZzpBRBzH8QLnzCYitcjWJDgGJ9pfo",
  authDomain: "authentication-enem.firebaseapp.com",
  projectId: "authentication-enem",
  storageBucket: "authentication-enem.appspot.com",
  messagingSenderId: "247429617720",
  appId: "1:247429617720:web:102e31d171b2f0bb952ecd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

let email = document.getElementById('email');
let senha = document.getElementById('password');
// let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

cadastro_btn.addEventListener('click', async (e) => {
  await createUserWithEmailAndPassword(auth, email.value, password.value)
  .then( async (userCredential) => {
    // Signed in 
    const user = userCredential.user;
    await sendEmailVerification(user);
    // set(ref(database, 'users/'+ user.uid),{
    //   email: email.value
    // });
    alert("usuario criado");
    document.location.replace("./landing.html");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });

});
// function cadastro() {
//     if (email.value in usuarios) {
//       alert("email ja em uso.");
//     } else {
//         //mais tarde reimplementar usando firebasse
//         usuarios[email.value] = {'email': email.value, 'senha': senha.value};
//         localStorage.setItem('usuarios', JSON.stringify(usuarios));
//         localStorage.setItem("sessao", JSON.stringify(usuarios[email.value]));
//         alert('usuario criado');
//         document.location.replace("./landing.html");
//     }
// }