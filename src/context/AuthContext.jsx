// // // // src/context/AuthContext.jsx
// // // import React, { createContext, useState, useEffect, useContext } from "react";
// // // import { auth } from "../services/firebase";
// // // import {
// // //   createUserWithEmailAndPassword,
// // //   signInWithEmailAndPassword,
// // //   signOut,
// // //   onAuthStateChanged
// // // } from "firebase/auth";

// // // const AuthContext = createContext();

// // // export function useAuth() {
// // //   return useContext(AuthContext);
// // // }

// // // export function AuthProvider({ children }) {
// // //   const [user, setUser] = useState(() => {
// // //     try {
// // //       return JSON.parse(localStorage.getItem("user")) || null;
// // //     } catch {
// // //       return null;
// // //     }
// // //   });
// // //   const [loading, setLoading] = useState(true);

// // //   function signup(email, password) {
// // //     return createUserWithEmailAndPassword(auth, email, password);
// // //   }

// // //   function login(email, password) {
// // //     return signInWithEmailAndPassword(auth, email, password);
// // //   }

// // //   function logout() {
// // //     return signOut(auth);
// // //   }

// // //   useEffect(() => {
// // //     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
// // //       if (firebaseUser) {
// // //         const u = { uid: firebaseUser.uid, email: firebaseUser.email };
// // //         setUser(u);
// // //         localStorage.setItem("user", JSON.stringify(u));
// // //       } else {
// // //         setUser(null);
// // //         localStorage.removeItem("user");
// // //       }
// // //       setLoading(false);
// // //     });
// // //     return unsubscribe;
// // //   }, []);

// // //   const value = { user, signup, login, logout };

// // //   return (
// // //     <AuthContext.Provider value={value}>
// // //       {!loading && children}
// // //     </AuthContext.Provider>
// // //   );
// // // }




















// // // src/context/AuthContext.jsx
// // import React, { createContext, useState, useEffect, useContext } from "react";
// // import { auth } from "../services/firebase";
// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword,
// //   signOut,
// //   onAuthStateChanged,
// // } from "firebase/auth";

// // const AuthContext = createContext();

// // export function useAuth() {
// //   return useContext(AuthContext);
// // }

// // export function AuthProvider({ children }) {
// //   const [user, setUser] = useState(() => {
// //     try {
// //       return JSON.parse(localStorage.getItem("user")) || null;
// //     } catch {
// //       return null;
// //     }
// //   });
// //   const [loading, setLoading] = useState(true);

// //   // Signup new user
// //   async function signup(email, password) {
// //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //     const firebaseUser = userCredential.user;
// //     const u = { uid: firebaseUser.uid, email: firebaseUser.email };
// //     setUser(u);
// //     localStorage.setItem("user", JSON.stringify(u));
// //     return u;
// //   }

// //   // Login existing user
// //   async function login(email, password) {
// //     const userCredential = await signInWithEmailAndPassword(auth, email, password);
// //     const firebaseUser = userCredential.user;
// //     const u = { uid: firebaseUser.uid, email: firebaseUser.email };
// //     setUser(u);
// //     localStorage.setItem("user", JSON.stringify(u));
// //     return u;
// //   }

// //   // Logout user
// //   function logout() {
// //     return signOut(auth).then(() => {
// //       setUser(null);
// //       localStorage.removeItem("user");
// //     });
// //   }

// //   // Listen for Firebase auth state changes
// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
// //       if (firebaseUser) {
// //         const u = { uid: firebaseUser.uid, email: firebaseUser.email };
// //         setUser(u);
// //         localStorage.setItem("user", JSON.stringify(u));
// //       } else {
// //         setUser(null);
// //         localStorage.removeItem("user");
// //       }
// //       setLoading(false);
// //     });

// //     return unsubscribe;
// //   }, []);

// //   const value = { user, signup, login, logout };

// //   return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
// // }



// import React, { createContext, useState, useEffect, useContext } from "react";
// import { auth } from "../services/firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(() => {
//     try {
//       return JSON.parse(localStorage.getItem("user")) || null;
//     } catch {
//       return null;
//     }
//   });
//   const [loading, setLoading] = useState(true);

//   async function signup(email, password) {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const firebaseUser = userCredential.user;
//     const u = { uid: firebaseUser.uid, email: firebaseUser.email };
//     setUser(u);
//     localStorage.setItem("user", JSON.stringify(u));
//     return u;
//   }

//   async function login(email, password) {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     const firebaseUser = userCredential.user;
//     const u = { uid: firebaseUser.uid, email: firebaseUser.email };
//     setUser(u);
//     localStorage.setItem("user", JSON.stringify(u));
//     return u;
//   }

//   async function logout() {
//     await signOut(auth);
//     setUser(null);
//     localStorage.removeItem("user");
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//       if (firebaseUser) {
//         const u = { uid: firebaseUser.uid, email: firebaseUser.email };
//         setUser(u);
//         localStorage.setItem("user", JSON.stringify(u));
//       } else {
//         setUser(null);
//         localStorage.removeItem("user");
//       }
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   const value = { user, signup, login, logout };

//   return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
// }
import React, { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  // Signup function
  async function signup(email, password) {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (trimmedPassword.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      trimmedEmail,
      trimmedPassword
    );
    const firebaseUser = userCredential.user;
    const u = { uid: firebaseUser.uid, email: firebaseUser.email };
    setUser(u);
    localStorage.setItem("user", JSON.stringify(u));
    return u;
  }

  // Login function
  async function login(email, password) {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const userCredential = await signInWithEmailAndPassword(
      auth,
      trimmedEmail,
      trimmedPassword
    );
    const firebaseUser = userCredential.user;
    const u = { uid: firebaseUser.uid, email: firebaseUser.email };
    setUser(u);
    localStorage.setItem("user", JSON.stringify(u));
    return u;
  }

  // Logout function
  function logout() {
    return signOut(auth).then(() => {
      setUser(null);
      localStorage.removeItem("user");
    });
  }

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const u = { uid: firebaseUser.uid, email: firebaseUser.email };
        setUser(u);
        localStorage.setItem("user", JSON.stringify(u));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = { user, isAuthenticated, loading, signup, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
