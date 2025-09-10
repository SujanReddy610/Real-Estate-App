// // src/pages/Home.jsx
// import React, { useEffect, useState } from "react";
// import { getProperties } from "../services/api";   // ✅ fixed import
// import PropertyCard from "../components/PropertyCard";
// import { Link } from "react-router-dom";

// export default function Home() {
//   const [properties, setProperties] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     getProperties()
//       .then(setProperties)
//       .catch((err) => setError("Failed to load properties: " + err.message));
//   }, []);

//   const featured = properties.slice(0, 4);

//   return (
//     <>
//       <section className="mb-5">
//         <div
//           className="p-5 text-white"
//           style={{
//             backgroundImage: "url(https://picsum.photos/1400/400)",
//             backgroundSize: "cover",
//             borderRadius: 8,
//           }}
//         >
//           <div
//             style={{
//               background: "rgba(0,0,0,0.35)",
//               padding: 30,
//               borderRadius: 8,
//             }}
//           >
//             <h1>Find Your Dream Home</h1>
//             <p>Search properties for rent & sale</p>
//             <Link to="/listings" className="btn btn-primary">
//               Browse Listings
//             </Link>
//           </div>
//         </div>
//       </section>

//       <section className="mb-5">
//         <h3>What We Do</h3>
//         <div className="row">
//           {["Buy & Sell", "Rentals", "Property Management", "Financing"].map(
//             (t, i) => (
//               <div className="col-md-3 mb-3" key={i}>
//                 <div className="card p-3 h-100">
//                   <h5>{t}</h5>
//                   <p className="small text-muted">
//                     Short description about {t.toLowerCase()}.
//                   </p>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </section>

//       <section className="mb-5">
//         <h3>Featured Properties</h3>
//         {error ? (
//           <div className="alert alert-danger">{error}</div>
//         ) : (
//           <div className="row">
//             {featured.map((p) => (
//               <div key={p.id} className="col-md-3 mb-3">
//                 <PropertyCard p={p} />
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       <section className="mb-5">
//         <h3>Newsletter</h3>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             alert("Subscribed!");
//           }}
//         >
//           <div className="row g-2">
//             <div className="col-md-8">
//               <input
//                 className="form-control"
//                 placeholder="Email address"
//                 required
//               />
//             </div>
//             <div className="col-md-4">
//               <button className="btn btn-primary w-100">Subscribe</button>
//             </div>
//           </div>
//         </form>
//       </section>
//     </>
//   );
// }
// src/pages/Home.jsx
// import React, { useEffect, useState } from "react";
// import { fetchProperties } from "../services/api";
// import PropertyCard from "../components/PropertyCard";
// import { Link } from "react-router-dom";

// export default function Home() {
//   const [properties, setProperties] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let mounted = true;
//     fetchProperties()
//       .then((data) => {
//         if (!mounted) return;
//         setProperties(data || []);
//       })
//       .catch((err) => {
//         console.error(err);
//         if (!mounted) return;
//         setError("Failed to load properties.");
//       })
//       .finally(() => {
//         if (!mounted) return;
//         setLoading(false);
//       });
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   // If API returns fewer than 4, this still slices safely.
//   const featured = properties.slice(0, 4);

//   return (
//     <>
//       <section className="mb-5">
//         <div
//           className="p-5 text-white"
//           style={{
//             backgroundImage: "url(https://picsum.photos/1400/400)",
//             backgroundSize: "cover",
//             borderRadius: 8,
//           }}
//         >
//           <div style={{ background: "rgba(0,0,0,0.35)", padding: 30, borderRadius: 8 }}>
//             <h1>Find Your Dream Home</h1>
//             <p>Search properties for rent & sale</p>
//             <Link to="/listings" className="btn btn-primary">
//               Browse Listings
//             </Link>
//           </div>
//         </div>
//       </section>

//       <section className="mb-5">
//         <h3>What We Do</h3>
//         <div className="row">
//           {["Buy & Sell", "Rentals", "Property Management", "Financing"].map((t, i) => (
//             <div className="col-md-3 mb-3" key={i}>
//               <div className="card p-3 h-100">
//                 <h5>{t}</h5>
//                 <p className="small text-muted">Short description about {t.toLowerCase()}.</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="mb-5">
//         <h3>Featured Properties</h3>

//         {loading && <div className="alert alert-info">Loading featured properties...</div>}
//         {error && <div className="alert alert-danger">{error}</div>}

//         <div className="row">
//           {featured.length > 0 ? (
//             featured.map((p) => (
//               <div key={p.id} className="col-md-3 mb-3">
//                 {/* pass property object to card; card will handle field names */}
//                 <PropertyCard p={p} />
//               </div>
//             ))
//           ) : (
//             !loading && (
//               // show placeholders if no data from API
//               <>
//                 {[1, 2, 3, 4].map((n) => (
//                   <div key={n} className="col-md-3 mb-3">
//                     <div className="card h-100" style={{ minHeight: 260 }}>
//                       <div
//                         style={{
//                           height: 160,
//                           background: "#f0f0f0",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           color: "#999",
//                         }}
//                       >
//                         No Image
//                       </div>
//                       <div className="card-body">
//                         <h5 className="card-title">No property</h5>
//                         <p className="card-text text-muted">—</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </>
//             )
//           )}
//         </div>
//       </section>

//       <section className="mb-5">
//         <h3>Newsletter</h3>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             alert("Subscribed!");
//           }}
//         >
//           <div className="row g-2">
//             <div className="col-md-8">
//               <input className="form-control" placeholder="Email address" required />
//             </div>
//             <div className="col-md-4">
//               <button className="btn btn-primary w-100">Subscribe</button>
//             </div>
//           </div>
//         </form>
//       </section>
//     </>
//   );
// }



// // src/pages/Home.jsx
// import React, { useEffect, useState } from "react";
// import { fetchProperties } from "../services/api";
// import PropertyCard from "../components/PropertyCard";
// import { Link } from "react-router-dom";

// export default function Home() {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [heroImage, setHeroImage] = useState("");

//   // Array of hero images
//   const heroImages = [
//     "https://source.unsplash.com/1400x400/?house,apartment",
//     "https://source.unsplash.com/1400x400/?real-estate,home",
//     "https://source.unsplash.com/1400x400/?luxury-house",
//     "https://source.unsplash.com/1400x400/?villa",
//     "https://source.unsplash.com/1400x400/?building",
//   ];

//   // Pick random hero image on mount
//   useEffect(() => {
//     const randomIndex = Math.floor(Math.random() * heroImages.length);
//     setHeroImage(heroImages[randomIndex]);
//   }, []);

//   // Fetch properties
//   useEffect(() => {
//     let mounted = true;
//     fetchProperties()
//       .then((data) => {
//         if (!mounted) return;
//         setProperties(Array.isArray(data) ? data : []);
//       })
//       .catch(() => {
//         if (!mounted) return;
//         setError("Failed to load properties.");
//       })
//       .finally(() => {
//         if (!mounted) return;
//         setLoading(false);
//       });

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   // Take first 4 properties for featured section
//   const featured = properties.slice(0, 4);

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="mb-5">
//         <div
//           className="p-5 text-white"
//           style={{
//             backgroundImage: `url(${heroImage || "https://source.unsplash.com/1400x400/?home"})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             borderRadius: 8,
//             minHeight: "400px",
//           }}
//         >
//           <div
//             style={{
//               background: "rgba(0,0,0,0.35)",
//               padding: 30,
//               borderRadius: 8,
//               height: "100%",
//             }}
//           >
//             <h1>Find Your Dream Home</h1>
//             <p>Search properties for rent & sale</p>
//             <Link to="/listings" className="btn btn-primary">
//               Browse Listings
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* What We Do */}
//       <section className="mb-5">
//         <h3>What We Do</h3>
//         <div className="row">
//           {["Buy & Sell", "Rentals", "Property Management", "Financing"].map(
//             (t, i) => (
//               <div className="col-md-3 mb-3" key={i}>
//                 <div className="card p-3 h-100">
//                   <h5>{t}</h5>
//                   <p className="small text-muted">
//                     Short description about {t.toLowerCase()}.
//                   </p>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </section>

//       {/* Featured Properties */}
//       <section className="mb-5">
//         <h3>Featured Properties</h3>
//         {loading && (
//           <div className="alert alert-info">Loading featured properties...</div>
//         )}
//         {error && <div className="alert alert-danger">{error}</div>}

//         <div className="row">
//           {featured.length > 0 ? (
//             featured.map((p) => (
//               <div key={p.id} className="col-md-3 mb-3">
//                 <PropertyCard p={p} />
//               </div>
//             ))
//           ) : (
//             !loading &&
//             [1, 2, 3, 4].map((n) => (
//               <div key={n} className="col-md-3 mb-3">
//                 <div className="card h-100" style={{ minHeight: 260 }}>
//                   <div
//                     style={{
//                       height: 160,
//                       background: "#f0f0f0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: "#999",
//                     }}
//                   >
//                     No Image
//                   </div>
//                   <div className="card-body">
//                     <h5 className="card-title">No property</h5>
//                     <p className="card-text text-muted">—</p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </section>

//       {/* Newsletter */}
//       <section className="mb-5">
//         <h3>Newsletter</h3>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             alert("Subscribed!");
//           }}
//         >
//           <div className="row g-2">
//             <div className="col-md-8">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email address"
//                 required
//               />
//             </div>
//             <div className="col-md-4">
//               <button className="btn btn-primary w-100">Subscribe</button>
//             </div>
//           </div>
//         </form>
//       </section>
//     </>
//   );
// }
// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { fetchProperties } from "../services/api";
import PropertyCard from "../components/PropertyCard";
import { Link } from "react-router-dom";

// Import hero images
import hero1 from "../assets/imagesdownload.jpg";
import hero2 from "../assets/imagesstart.jpg";
import hero3 from "../assets/images.jpg";
import hero4 from "../assets/gettyimages-1433485090-640x640.jpg";
import hero5 from "../assets/imagesnumber.jpg";
import hero6 from "../assets/download.jpg";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [heroImg, setHeroImg] = useState(hero1);

  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6];

  // Rotate hero image every 5s
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % heroImages.length;
      setHeroImg(heroImages[index]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Fetch properties
  useEffect(() => {
    let mounted = true;
    fetchProperties()
      .then((data) => {
        if (!mounted) return;
        setProperties(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (!mounted) return;
        setError("Failed to load properties.");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const featured = properties.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="mb-5">
        <div
          className="p-5 text-white"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 8,
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.35)",
              padding: 30,
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            <h1>Find Your Dream Home</h1>
            <p>Search properties for rent & sale</p>
            <Link to="/listings" className="btn btn-primary">
              Browse Listings
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="mb-5">
        <h3>What We Do</h3>
        <div className="row">
          {[
            {
              title: "Buy & Sell",
              desc: "Helping you buy and sell properties with ease and confidence.",
            },
            {
              title: "Rentals",
              desc: "Find the perfect rental home or apartment for your lifestyle.",
            },
            {
              title: "Property Management",
              desc: "Comprehensive management services for hassle-free ownership.",
            },
            {
              title: "Financing",
              desc: "Guidance and solutions to finance your dream property.",
            },
          ].map((t, i) => (
            <div className="col-md-3 mb-3" key={i}>
              <div className="card p-3 h-100">
                <h5>{t.title}</h5>
                <p className="small text-muted">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="mb-5">
        <h3>Featured Properties</h3>
        {loading && (
          <div className="alert alert-info">Loading featured properties...</div>
        )}
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="row">
          {featured.length > 0 ? (
            featured.map((p) => (
              <div key={p.id} className="col-md-3 mb-3">
                <PropertyCard
                  p={{
                    ...p,
                    image:
                      Array.isArray(p.images) && p.images.length > 0
                        ? p.images[0]
                        : p.image || "/Placeholder.png",
                  }}
                />
              </div>
            ))
          ) : (
            !loading &&
            [1, 2, 3, 4].map((n) => (
              <div key={n} className="col-md-3 mb-3">
                <div className="card h-100" style={{ minHeight: 260 }}>
                  <div
                    style={{
                      height: 160,
                      background: "#f0f0f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#999",
                    }}
                  >
                    No Image
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">No property</h5>
                    <p className="card-text text-muted">—</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mb-5">
        <h3>Newsletter</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Subscribed!");
          }}
        >
          <div className="row g-2">
            <div className="col-md-8">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                required
              />
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary w-100">Subscribe</button>
            </div>
          </div>
        </form>
      </section>

      {/* Footer */}
      {/* <footer className="bg-dark text-white text-center py-3 mt-4">
        <p>© 2025 RealEstate — Built for assignment</p>
        <div>
          <Link to="/privacy" className="text-white me-3">
            Privacy
          </Link>
          <Link to="/terms" className="text-white me-3">
            Terms
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </div>
      </footer> */}
    </>
  );
}


