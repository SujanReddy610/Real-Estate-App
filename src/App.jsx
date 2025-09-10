// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Listings from "./pages/Listings";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import ProtectedRoute from "./components/ProtectedRoute";

// export default function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Navbar />
//         <main className="container my-5">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/listings" element={<Listings />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login />} />
//             {/* Example protected route */}
//             <Route path="/profile" element={<ProtectedRoute><div>Profile - protected</div></ProtectedRoute>} />
//           </Routes>
//         </main>
//         <Footer />
//       </Router>
//     </AuthProvider>
//   );
// }






import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// PrivateRoute for protected pages
function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h3>Loading...</h3>
      </div>
    );

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

// PublicRoute for login/signup pages
function PublicRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h3>Loading...</h3>
      </div>
    );

  return !isAuthenticated ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <main className="container my-5">
          <Routes>
            {/* Protected routes */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/listings"
              element={
                <PrivateRoute>
                  <Listings />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <div>Profile - protected</div>
                </PrivateRoute>
              }
            />

            {/* Public routes */}
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />

            {/* Catch-all redirect */}
            <Route
              path="*"
              element={
                <Navigate
                  to={useAuth().isAuthenticated ? "/" : "/login"}
                  replace
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}


