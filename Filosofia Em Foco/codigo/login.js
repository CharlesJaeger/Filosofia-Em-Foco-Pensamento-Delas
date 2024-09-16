import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, update, ref } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
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

login_btn.addEventListener('click', (e) => {
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        // const dt = new Date();
        // update(ref('users/'+user.uid), {
        //     last_login: dt
        // });
        alert('login efetuado');
        document.location.replace("./landing.html");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
});
// let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

//fazer: enviar dados para a database para efetuar autetenticação
// function checar_credenciais(username, password) {
//     if (username in usuarios && password===usuarios[username]['senha']) {
//         return true;
//     }
//     return false;
// }

// function login() {
//     if (checar_credenciais(email.value, senha.value)) {
//         alert('login efetuado com sucesso');
//         localStorage.setItem("sessao", JSON.stringify(usuarios[email.value]));
//         document.location.replace("./landing.html");
//     } else {
//         alert('nome ou senha errados.');
//     }
// }