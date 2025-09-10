// // src/components/ProtectedRoute.jsx
// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function ProtectedRoute({ children }) {
//   const { user } = useAuth();
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// }


// src/components/ProtectedRoute.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return children;
}
