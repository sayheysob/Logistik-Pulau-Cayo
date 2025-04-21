<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDOXziUIMbGk7c1l7YaMqAvTyJfp5kwXZA",
    authDomain: "nansu-11ce1.firebaseapp.com",
    projectId: "nansu-11ce1",
    storageBucket: "nansu-11ce1.firebasestorage.app",
    messagingSenderId: "1058895539834",
    appId: "1:1058895539834:web:52c83ca16c3d995ccc55c3",
    measurementId: "G-L7R4F1XW5G"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
