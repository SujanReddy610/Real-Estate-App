// // // import React, { useState } from "react";
// // // import { useAuth } from "../context/AuthContext";
// // // import { useNavigate } from "react-router-dom";

// // // export default function Signup(){
// // //   const { signup } = useAuth();
// // //   const nav = useNavigate();
// // //   const [form, setForm] = useState({name:"", email:"", password:"", confirm:""});
// // //   const [error, setError] = useState("");

// // //   async function handleSubmit(e){
// // //     e.preventDefault();
// // //     if(form.password !== form.confirm){ setError("Passwords do not match"); return; }
// // //     try{
// // //       await signup(form.email, form.password);
// // //       nav("/login");
// // //     } catch(err){
// // //       setError(err.message);
// // //     }
// // //   }

// // //   return (
// // //     <div className="col-md-6 offset-md-3">
// // //       <h3>Sign Up</h3>
// // //       {error && <div className="alert alert-danger">{error}</div>}
// // //       <form onSubmit={handleSubmit}>
// // //         <input className="form-control mb-2" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required/>
// // //         <input className="form-control mb-2" type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required/>
// // //         <input className="form-control mb-2" type="password" placeholder="Password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} required/>
// // //         <input className="form-control mb-3" type="password" placeholder="Confirm Password" value={form.confirm} onChange={e=>setForm({...form, confirm:e.target.value})} required/>
// // //         <button className="btn btn-primary w-100" type="submit">Sign Up</button>
// // //       </form>
// // //     </div>
// // //   );
// // // }











// // // src/pages/Signup.jsx
// // import React, { useState } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import { useNavigate } from "react-router-dom";

// // export default function Signup() {
// //   const { signup } = useAuth();
// //   const navigate = useNavigate();
// //   const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     if (form.password !== form.confirm) {
// //       setError("Passwords do not match");
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       await signup(form.email, form.password);
// //       navigate("/login"); // Redirect after successful signup
// //     } catch (err) {
// //       setError(err.message || "Failed to create account");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="col-md-6 offset-md-3 mt-5">
// //       <h3 className="mb-4">Sign Up</h3>
// //       {error && <div className="alert alert-danger">{error}</div>}

// //       <form onSubmit={handleSubmit}>
// //         <input
// //           className="form-control mb-2"
// //           placeholder="Name"
// //           name="name"
// //           value={form.name}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           className="form-control mb-2"
// //           type="email"
// //           placeholder="Email"
// //           name="email"
// //           value={form.email}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           className="form-control mb-2"
// //           type="password"
// //           placeholder="Password"
// //           name="password"
// //           value={form.password}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           className="form-control mb-3"
// //           type="password"
// //           placeholder="Confirm Password"
// //           name="confirm"
// //           value={form.confirm}
// //           onChange={handleChange}
// //           required
// //         />

// //         <button className="btn btn-primary w-100" type="submit" disabled={loading}>
// //           {loading ? "Signing Up..." : "Sign Up"}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }















// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const { signup } = useAuth();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (form.password !== form.confirm) {
//       setError("Passwords do not match");
//       return;
//     }

//     setLoading(true);
//     try {
//       await signup(form.email, form.password);
//       navigate("/login");
//     } catch (err) {
//       setError(err.message || "Failed to create account");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="col-md-6 offset-md-3 mt-5">
//       <h3 className="mb-4">Sign Up</h3>
//       {error && <div className="alert alert-danger">{error}</div>}

//       <form onSubmit={handleSubmit}>
//         <input
//           className="form-control mb-2"
//           placeholder="Name"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="form-control mb-2"
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="form-control mb-2"
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="form-control mb-3"
//           type="password"
//           placeholder="Confirm Password"
//           name="confirm"
//           value={form.confirm}
//           onChange={handleChange}
//           required
//         />

//         <button className="btn btn-primary w-100" type="submit" disabled={loading}>
//           {loading ? "Signing Up..." : "Sign Up"}
//         </button>
//       </form>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await signup(form.email, form.password);
      navigate("/login");
    } catch (err) {
      setError(err.message || "Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-6 offset-md-3 mt-5">
      <h3 className="mb-4">Sign Up</h3>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Name" name="name" value={form.name} onChange={handleChange} required />
        <input className="form-control mb-2" type="email" placeholder="Email" name="email" value={form.email} onChange={handleChange} required />
        <input className="form-control mb-2" type="password" placeholder="Password" name="password" value={form.password} onChange={handleChange} required />
        <input className="form-control mb-3" type="password" placeholder="Confirm Password" name="confirm" value={form.confirm} onChange={handleChange} required />

        <button className="btn btn-primary w-100" type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
