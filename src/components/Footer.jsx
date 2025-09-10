// // src/components/Footer.jsx
// import React from "react";

// export default function Footer(){
//   return (
//     <footer className="bg-light py-4 mt-5">
//       <div className="container text-center">
//         <small>© {new Date().getFullYear()} RealEstate — Built for assignment</small>
//       </div>
//     </footer>
//   );
// }

// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-light py-4 mt-5 border-top">
      <div className="container text-center">
        <p className="mb-1">
          © {new Date().getFullYear()} RealEstate — Built for assignment
        </p>
        <div>
          <a href="#!" className="mx-2 text-decoration-none text-muted">Privacy</a>
          <a href="#!" className="mx-2 text-decoration-none text-muted">Terms</a>
          <a href="#!" className="mx-2 text-decoration-none text-muted">Contact</a>
        </div>
      </div>
    </footer>
  );
}
