// // // // src/pages/Listings.jsx
// // // import React, { useEffect, useState } from "react";
// // // import { fetchProperties } from "../services/api";
// // // import PropertyCard from "../components/PropertyCard";

// // // export default function Listings(){
// // //   const [properties, setProperties] = useState([]);
// // //   const [filter, setFilter] = useState("all");
// // //   const [error, setError] = useState(null);

// // //   useEffect(()=>{
// // //     fetchProperties().then(setProperties).catch(err=>setError(err.message));
// // //   },[]);

// // //   // If API lacks property.type we synthetically assign one for demo:
// // //   const propsWithType = properties.map(p => ({
// // //     ...p,
// // //     type: p.type || (parseInt(p.id,10) % 2 === 0 ? "rent" : "sale")
// // //   }));

// // //   const filtered = propsWithType.filter(p => filter === "all" ? true : p.type === filter);

// // //   return (
// // //     <div>
// // //       <h2>Properties</h2>
// // //       <div className="mb-3">
// // //         <div className="btn-group" role="group">
// // //           <button className={`btn ${filter==="all"?"btn-primary":"btn-outline-primary"}`} onClick={()=>setFilter("all")}>All</button>
// // //           <button className={`btn ${filter==="sale"?"btn-primary":"btn-outline-primary"}`} onClick={()=>setFilter("sale")}>For Sale</button>
// // //           <button className={`btn ${filter==="rent"?"btn-primary":"btn-outline-primary"}`} onClick={()=>setFilter("rent")}>For Rent</button>
// // //         </div>
// // //       </div>

// // //       {error && <div className="alert alert-danger">{error}</div>}

// // //       <div className="row">
// // //         {filtered.map(p => (
// // //           <div key={p.id} className="col-md-4 mb-3">
// // //             <PropertyCard p={p}/>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // // src/pages/Listings.jsx
// // // src/pages/Listings.jsx
// // import React, { useEffect, useState } from "react";
// // import { getProperties } from "../services/api";
// // import PropertyCard from "../components/PropertyCard";

// // export default function Listings() {
// //   const [properties, setProperties] = useState([]);
// //   const [filter, setFilter] = useState("all");
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         const data = await getProperties();
// //         setProperties(data);
// //       } catch (err) {
// //         console.error("Error fetching properties:", err);
// //         setError("Failed to load properties. Please try again later.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
// //     fetchData();
// //   }, []);

// //   // Ensure each property has a `type` (for filtering)
// //   const propsWithType = properties.map((p) => ({
// //     ...p,
// //     type: p.type || (parseInt(p.id, 10) % 2 === 0 ? "rent" : "sale"),
// //   }));

// //   const filtered = propsWithType.filter((p) =>
// //     filter === "all" ? true : p.type === filter
// //   );

// //   return (
// //     <div className="container mt-4">
// //       <h2 className="mb-4">Available Properties</h2>

// //       {/* Filter Buttons */}
// //       <div className="mb-3">
// //         <div className="btn-group" role="group">
// //           {["all", "sale", "rent"].map((type) => (
// //             <button
// //               key={type}
// //               className={`btn ${
// //                 filter === type ? "btn-primary" : "btn-outline-primary"
// //               }`}
// //               onClick={() => setFilter(type)}
// //             >
// //               {type === "all"
// //                 ? "All"
// //                 : type === "sale"
// //                 ? "For Sale"
// //                 : "For Rent"}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Loading / Error / Results */}
// //       {loading && (
// //         <div className="alert alert-info">Loading properties...</div>
// //       )}
// //       {error && <div className="alert alert-danger">{error}</div>}

// //       <div className="row">
// //         {filtered.length > 0 ? (
// //           filtered.map((p) => (
// //             <div key={p.id} className="col-md-4 mb-3">
// //               <PropertyCard p={p} />
// //             </div>
// //           ))
// //         ) : (
// //           !loading && (
// //             <div className="alert alert-warning">No properties found.</div>
// //           )
// //         )}
// //       </div>
// //     </div>
// //   );
// // }



// // // src/pages/Listings.jsx
// // import React, { useEffect, useState } from "react";
// // import { fetchProperties } from "../services/api";
// // import PropertyCard from "../components/PropertyCard";

// // export default function Listings() {
// //   const [properties, setProperties] = useState([]);
// //   const [filter, setFilter] = useState("all");
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     let mounted = true;
// //     fetchProperties()
// //       .then((data) => {
// //         if (!mounted) return;
// //         setProperties(Array.isArray(data) ? data : []);
// //       })
// //       .catch((err) => {
// //         console.error(err);
// //         if (!mounted) return;
// //         setError("Failed to load properties.");
// //       })
// //       .finally(() => {
// //         if (!mounted) return;
// //         setLoading(false);
// //       });
// //     return () => {
// //       mounted = false;
// //     };
// //   }, []);

// //   const propsWithType = properties.map((p) => ({
// //     ...p,
// //     type: p.type || (parseInt(p.id, 10) % 2 === 0 ? "rent" : "sale"),
// //     imageUrl: p.imageUrl || p.image || p.img || "",
// //     title: p.title || p.name || "Property",
// //     location:
// //       p.location ||
// //       [p.buildingNumber, p.city, p.state].filter(Boolean).join(", "),
// //     price: p.price || p.amount || p.rate || null,
// //   }));

// //   const filtered = propsWithType.filter(
// //     (p) => filter === "all" || p.type === filter
// //   );

// //   return (
// //     <div className="container mt-4">
// //       <h2 className="mb-4">Available Properties</h2>

// //       <div className="mb-3">
// //         <div className="btn-group" role="group">
// //           {["all", "sale", "rent"].map((f) => (
// //             <button
// //               key={f}
// //               className={`btn ${filter === f ? "btn-primary" : "btn-outline-primary"}`}
// //               onClick={() => setFilter(f)}
// //             >
// //               {f === "all" ? "All" : f === "sale" ? "For Sale" : "For Rent"}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {loading && <div className="alert alert-info">Loading properties...</div>}
// //       {error && <div className="alert alert-danger">{error}</div>}

// //       <div className="row">
// //         {filtered.length > 0 ? (
// //           filtered.map((p) => (
// //             <div key={p.id} className="col-md-4 mb-3">
// //               <PropertyCard p={p} />
// //             </div>
// //           ))
// //         ) : (
// //           !loading && <div className="alert alert-warning">No properties found.</div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }






































// // src/pages/Listings.jsx
// import React, { useEffect, useState } from "react";
// import { fetchProperties } from "../services/api";
// import PropertyCard from "../components/PropertyCard";

// export default function Listings() {
//   const [properties, setProperties] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let mounted = true;
//     fetchProperties()
//       .then((data) => {
//         if (!mounted) return;
//         setProperties(Array.isArray(data) ? data : []);
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

//   // Normalize property fields for display
//   const propsWithType = properties.map((p) => ({
//     ...p,
//     type: p.type || (parseInt(p.id, 10) % 2 === 0 ? "rent" : "sale"),
//     title: p.title || p.name || "Property",
//     location:
//       p.location ||
//       [p.buildingNumber, p.city, p.state].filter(Boolean).join(", ") ||
//       "Location not available",
//     price: p.price || p.amount || p.rate || null,
//     imageUrl: p.imageUrl || p.image || p.img || null,
//   }));

//   const filtered = filter === "all" ? propsWithType : propsWithType.filter((p) => p.type === filter);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Available Properties</h2>

//       {/* Filter Buttons */}
//       <div className="btn-group mb-3">
//         {["all", "sale", "rent"].map((t) => (
//           <button
//             key={t}
//             className={`btn ${filter === t ? "btn-primary" : "btn-outline-primary"}`}
//             onClick={() => setFilter(t)}
//           >
//             {t === "all" ? "All" : t === "sale" ? "For Sale" : "For Rent"}
//           </button>
//         ))}
//       </div>

//       {/* Loading/Error Messages */}
//       {loading && <div className="alert alert-info">Loading properties...</div>}
//       {error && <div className="alert alert-danger">{error}</div>}

//       {/* Property Grid */}
//       <div className="row">
//         {filtered.length > 0 ? (
//           filtered.map((p) => (
//             <div key={p.id} className="col-md-4 mb-3">
//               <PropertyCard p={p} />
//             </div>
//           ))
//         ) : (
//           !loading && <div className="alert alert-warning">No properties found.</div>
//         )}
//       </div>
//     </div>
//   );
// }













import React, { useEffect, useState, useRef } from "react";
import { fetchProperties } from "../services/api";
import PropertyCard from "../components/PropertyCard";

export default function Listings() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all"); // all / sale / rent

  // Placeholder images
  const placeholders = [
    "/Placeholder1.png",
    "/Placeholder2.png",
    "/Placeholder3.png",
    "/Placeholder4.png",
  ];

  // Store placeholder assignment for each property ID
  const placeholderMap = useRef({});

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

  // Filter properties based on type
  const filteredProperties =
    filter === "all"
      ? properties
      : properties.filter((p) => p.type?.toLowerCase() === filter);

  // Get property image or assign a consistent placeholder
  const getImage = (property) => {
    if (property.image) return property.image;
    if (!placeholderMap.current[property.id]) {
      const randIndex = Math.floor(Math.random() * placeholders.length);
      placeholderMap.current[property.id] = placeholders[randIndex];
    }
    return placeholderMap.current[property.id];
  };

  return (
    <div className="container mt-4">
      <h2>Property Listings</h2>

      {/* Filter Buttons */}
      <div className="mb-3">
        <span className="me-2">Filter by type:</span>
        {["all", "sale", "rent"].map((t) => (
          <button
            key={t}
            className={`btn btn-sm me-2 ${
              filter === t ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setFilter(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Status messages */}
      {loading && <div className="alert alert-info">Loading properties...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Property List */}
      <div className="row">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((p) => (
            <div key={p.id} className="col-md-3 mb-3">
              <PropertyCard
                p={{
                  name: p.name || "Unnamed Property",
                  city: p.city || "Unknown City",
                  state: p.state || "Unknown State",
                  ownerName: p.ownerName || "Unknown Owner",
                  image: getImage(p),
                }}
              />
            </div>
          ))
        ) : (
          !loading && <p>No properties available.</p>
        )}
      </div>
    </div>
  );
}




