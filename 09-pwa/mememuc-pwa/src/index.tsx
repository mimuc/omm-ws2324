import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// --- PWA stuff ---
// window.addEventListener("DOMContentLoaded", async event => {
//     checkRegistration();
// });
//
// // Check a service worker registration status
// async function checkRegistration() {
//     if ('serviceWorker' in navigator) {
//         const registration = await navigator.serviceWorker.getRegistration();
//         if (registration) {
//             console.log("Service worker was registered on page load")
//         } else {
//             console.log("No service worker is currently registered")
//             register();
//         }
//     } else {
//         console.log("Service workers API not available");
//     }
// }
//
// // Registers a service worker
// async function register() {
//     if ('serviceWorker' in navigator) {
//         try {
//             // Change the service worker URL to see what happens when the SW doesn't exist
//             const registration = await navigator.serviceWorker.register("myserviceworker.js");
//             console.log("Service worker registered");
//
//         } catch (error) {
//             console.error("Error while registering: ", error.message);
//         }
//     } else {
//         console.log("Service workers API not available");
//     }
// };

window.addEventListener("online",  function(){
    console.log("You are online!");
});
window.addEventListener("offline", function(){
    console.log("Oh no, you lost your network connection.");
});


// new pwa stuff
if ('serviceWorker' in navigator) {
    // Wait for the 'load' event to not block other work
    window.addEventListener('load', async () => {
        // Try to register the service worker.
        try {
            // Capture the registration for later use, if needed
            let reg;

            // Use ES Module version of our Service Worker in development
            if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){//import.meta.env?.DEV) {
                reg = await navigator.serviceWorker.register('/myserviceworker.js', {
                    type: 'module',
                });
            } else {
                // In production, use the normal service worker registration
                reg = await navigator.serviceWorker.register('/myserviceworker.js');
            }

            console.log('Service worker registered! 😎', reg);
        } catch (err) {
            console.log('😥 Service worker registration failed: ', err);
        }
    });
}
