import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBSSDqMAQ4cSvxHX3NSkRfeKfh6b4flGA",
  authDomain: "myis-f3dd6.firebaseapp.com",
  projectId: "myis-f3dd6",
  storageBucket: "myis-f3dd6.firebasestorage.app",
  messagingSenderId: "898194854042",
  appId: "1:898194854042:web:f63310a4ed445a255ccf23",
  measurementId: "G-FH0YLL2QM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Logic for Site Verification: myis-f3dd6-fbd71
console.log("Restaurant System Active on Hosting Site ID: myis-f3dd6-fbd71");

// --- UI Logic ---
window.toggleModal = function(type) {
    const modal = document.getElementById('authModal');
    const title = document.getElementById('modalTitle');
    
    if (type) {
        modal.style.display = 'flex';
        title.innerText = type === 'login' ? 'Staff Login' : 'Register Manager';
    } else {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('authModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form logic
document.getElementById('authForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Connected to Firebase. Authentication for myis-f3dd6-fbd71 in progress...");
});