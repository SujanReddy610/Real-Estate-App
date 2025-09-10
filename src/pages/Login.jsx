// // // import React, { useState } from "react";
// // // import { useAuth } from "../context/AuthContext";
// // // import { useNavigate } from "react-router-dom";

// // // export default function Login(){
// // //   const { login } = useAuth();
// // //   const nav = useNavigate();
// // //   const [form, setForm] = useState({email:"", password:""});
// // //   const [error, setError] = useState("");

// // //   async function handleSubmit(e){
// // //     e.preventDefault();
// // //     try{
// // //       await login(form.email, form.password);
// // //       nav("/");
// // //     } catch(err){
// // //       setError(err.message);
// // //     }
// // //   }

// // //   return (
// // //     <div className="col-md-6 offset-md-3">
// // //       <h3>Login</h3>
// // //       {error && <div className="alert alert-danger">{error}</div>}
// // //       <form onSubmit={handleSubmit}>
// // //         <input className="form-control mb-2" type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required/>
// // //         <input className="form-control mb-3" type="password" placeholder="Password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} required/>
// // //         <button className="btn btn-primary w-100" type="submit">Login</button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

















// // // src/pages/Login.jsx
// // import React, { useState } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import { useNavigate } from "react-router-dom";

// // export default function Login() {
// //   const { login } = useAuth();
// //   const navigate = useNavigate();
// //   const [form, setForm] = useState({ email: "", password: "" });
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setLoading(true);

// //     try {
// //       await login(form.email, form.password);
// //       navigate("/"); // Redirect to homepage after login
// //     } catch (err) {
// //       setError(err.message || "Failed to login");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="col-md-6 offset-md-3 mt-5">
// //       <h3 className="mb-4">Login</h3>
// //       {error && <div className="alert alert-danger">{error}</div>}

// //       <form onSubmit={handleSubmit}>
// //         <input
// //           className="form-control mb-2"
// //           type="email"
// //           name="email"
// //           placeholder="Email"
// //           value={form.email}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           className="form-control mb-3"
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           value={form.password}
// //           onChange={handleChange}
// //           required
// //         />

// //         <button className="btn btn-primary w-100" type="submit" disabled={loading}>
// //           {loading ? "Logging in..." : "Login"}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }




// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       await login(form.email, form.password);
//       navigate("/"); // redirect to homepage after login
//     } catch (err) {
//       setError(err.message || "Failed to login");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="col-md-6 offset-md-3 mt-5">
//       <h3 className="mb-4">Login</h3>
//       {error && <div className="alert alert-danger">{error}</div>}

//       <form onSubmit={handleSubmit}>
//         <input
//           className="form-control mb-2"
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="form-control mb-3"
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           required
//         />

//         <button className="btn btn-primary w-100" type="submit" disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(form.email, form.password);
      navigate("/"); // Redirect to homepage after successful login
    } catch (err) {
      // Handle Firebase error codes
      if (err.code === "auth/user-not-found") {
        setError("No user found with this email");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password");
      } else {
        setError(err.message || "Failed to login");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-6 offset-md-3 mt-5">
      <h3 className="mb-4">Login</h3>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-3"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button
          className="btn btn-primary w-100"
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

