import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBQW6kdrp20c5D84l6CnTo93CILDspLGa0",
  authDomain: "voice-note-33ed8.firebaseapp.com",
  projectId: "voice-note-33ed8",
  storageBucket: "voice-note-33ed8.appspot.com",
  messagingSenderId: "458791587254",
  appId: "1:458791587254:web:e6ee23dc49ba2b17f28517",
  measurementId: "G-89M7L25EE7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
