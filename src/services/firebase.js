// // // // src/services/firebase.js
// // // import { initializeApp } from "firebase/app";
// // // import { getAuth } from "firebase/auth";
// // // import { getFirestore } from "firebase/firestore";

// // // const firebaseConfig = {
// // //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
// // //   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
// // //   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
// // //   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
// // //   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
// // //   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// // // };

// // // // Initialize Firebase
// // // const app = initializeApp(firebaseConfig);

// // // // Export auth and firestore
// // // export const auth = getAuth(app);
// // // export const db = getFirestore(app);















// // // src/services/firebase.js
// // import { initializeApp } from "firebase/app";
// // import { getAuth } from "firebase/auth";
// // import { getFirestore } from "firebase/firestore";
// // import { getStorage } from "firebase/storage"; // optional if you use storage
// // import { getFunctions } from "firebase/functions"; // optional if you use cloud functions

// // // Firebase config from environment variables
// // const firebaseConfig = {
// //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
// //   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
// //   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
// //   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
// //   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
// //   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// // };

// // // Initialize Firebase app
// // const app = initializeApp(firebaseConfig);

// // // Auth instance
// // export const auth = getAuth(app);

// // // Firestore instance
// // export const db = getFirestore(app);

// // // Optional exports for storage & functions
// // export const storage = getStorage(app);
// // export const functions = getFunctions(app);

// // // Optional default export
// // export default app;





























// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Firebase config from environment variables
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Auth instance
// export const auth = getAuth(app);

// // Firestore instance
// export const db = getFirestore(app);

// export default app;
// src/services/firebase.js
// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
