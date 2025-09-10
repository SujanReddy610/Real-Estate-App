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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <main className="container my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <div>Profile - protected</div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}
