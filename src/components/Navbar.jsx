// // // // src/components/Navbar.jsx
// // // import React from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { useAuth } from "../context/AuthContext";

// // // export default function Navbar() {
// // //   const { user, logout } = useAuth();
// // //   const nav = useNavigate();

// // //   async function handleLogout() {
// // //     try {
// // //       await logout();
// // //       nav("/login");
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   }

// // //   return (
// // //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
// // //       <div className="container">
// // //         <Link className="navbar-brand" to="/">RealEstate</Link>
// // //         <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
// // //           <span className="navbar-toggler-icon"></span>
// // //         </button>
// // //         <div className="collapse navbar-collapse" id="nav">
// // //           <ul className="navbar-nav me-auto">
// // //             <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
// // //             <li className="nav-item"><Link to="/listings" className="nav-link">Listings</Link></li>
// // //           </ul>
// // //           <ul className="navbar-nav">
// // //             {user ? (
// // //               <>
// // //                 <li className="nav-item"><span className="nav-link">Hi, {user.email}</span></li>
// // //                 <li className="nav-item"><button className="btn btn-outline-secondary" onClick={handleLogout}>Logout</button></li>
// // //               </>
// // //             ) : (
// // //               <>
// // //                 <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
// // //                 <li className="nav-item"><Link to="/signup" className="nav-link">Signup</Link></li>
// // //               </>
// // //             )}
// // //           </ul>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // }











// // // src/components/Navbar.jsx
// // import React from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext";

// // export default function Navbar() {
// //   const { user, logout } = useAuth();
// //   const navigate = useNavigate();

// //   async function handleLogout() {
// //     try {
// //       await logout();
// //       navigate("/login");
// //     } catch (err) {
// //       console.error("Logout failed:", err);
// //     }
// //   }

// //   return (
// //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
// //       <div className="container">
// //         <Link className="navbar-brand" to="/">RealEstate</Link>

// //         <button
// //           className="navbar-toggler"
// //           type="button"
// //           data-bs-toggle="collapse"
// //           data-bs-target="#navbarSupportedContent"
// //           aria-controls="navbarSupportedContent"
// //           aria-expanded="false"
// //           aria-label="Toggle navigation"
// //         >
// //           <span className="navbar-toggler-icon"></span>
// //         </button>

// //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //             <li className="nav-item">
// //               <Link to="/" className="nav-link">Home</Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link to="/listings" className="nav-link">Listings</Link>
// //             </li>
// //           </ul>

// //           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
// //             {user ? (
// //               <>
// //                 <li className="nav-item">
// //                   <span className="nav-link">Hi, {user.email}</span>
// //                 </li>
// //                 <li className="nav-item">
// //                   <button
// //                     className="btn btn-outline-secondary"
// //                     onClick={handleLogout}
// //                   >
// //                     Logout
// //                   </button>
// //                 </li>
// //               </>
// //             ) : (
// //               <>
// //                 <li className="nav-item">
// //                   <Link to="/login" className="nav-link">Login</Link>
// //                 </li>
// //                 <li className="nav-item">
// //                   <Link to="/signup" className="nav-link">Signup</Link>
// //                 </li>
// //               </>
// //             )}
// //           </ul>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }



























// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function Navbar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   async function handleLogout() {
//     try {
//       await logout();
//       navigate("/login");
//     } catch (err) {
//       console.error("Logout failed:", err);
//     }
//   }

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <Link className="navbar-brand" to="/">RealEstate</Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link to="/" className="nav-link">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/listings" className="nav-link">Listings</Link>
//             </li>
//           </ul>

//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             {user ? (
//               <>
//                 <li className="nav-item">
//                   <span className="nav-link">Hi, {user.email}</span>
//                 </li>
//                 <li className="nav-item">
//                   <button
//                     className="btn btn-outline-secondary"
//                     onClick={handleLogout}
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <Link to="/login" className="nav-link">Login</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/signup" className="nav-link">Signup</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">RealEstate</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/listings" className="nav-link">Listings</Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {user ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">Hi, {user.email}</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-secondary" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
