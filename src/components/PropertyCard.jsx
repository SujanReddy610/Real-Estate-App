// // // // // src/components/PropertyCard.jsx
// // // // import React from "react";

// // // // export default function PropertyCard({ p }) {
// // // //   return (
// // // //     <div className="card h-100 shadow-sm">
// // // //       {p.image && (
// // // //         <img
// // // //           src={p.image}
// // // //           className="card-img-top"
// // // //           alt={p.title || p.name || "Property"}
// // // //           style={{ height: 200, objectFit: "cover" }}
// // // //         />
// // // //       )}
// // // //       <div className="card-body d-flex flex-column">
// // // //         {/* Title / Name */}
// // // //         <h5 className="card-title">{p.title || p.name}</h5>

// // // //         {/* Location */}
// // // //         {p.location ? (
// // // //           <p className="card-text text-muted mb-2">{p.location}</p>
// // // //         ) : (
// // // //           <p className="card-text mb-2">
// // // //             {p.buildingNumber}, {p.city}, {p.state}
// // // //           </p>
// // // //         )}

// // // //         {/* Country or Extra Info */}
// // // //         {p.country && (
// // // //           <p className="card-text text-muted small mb-2">{p.country}</p>
// // // //         )}

// // // //         {/* Price */}
// // // //         {p.price && (
// // // //           <p className="fw-bold mb-2">₹{p.price.toLocaleString()}</p>
// // // //         )}

// // // //         {/* Owner */}
// // // //         {p.ownerName && (
// // // //           <small className="text-muted mt-auto">Owner: {p.ownerName}</small>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // // src/components/PropertyCard.jsx
// // // // src/components/PropertyCard.jsx
// // // import React from "react";

// // // export default function PropertyCard({ p }) {
// // //   return (
// // //     <div className="card h-100">
// // //       {p.imageUrl ? (
// // //         <img
// // //           src={p.imageUrl}
// // //           className="card-img-top"
// // //           alt={p.title}
// // //           style={{ height: 180, objectFit: "cover" }}
// // //         />
// // //       ) : (
// // //         <div
// // //           style={{
// // //             height: 180,
// // //             background: "#f0f0f0",
// // //             display: "flex",
// // //             alignItems: "center",
// // //             justifyContent: "center",
// // //             color: "#999",
// // //           }}
// // //         >
// // //           No Image
// // //         </div>
// // //       )}

// // //       <div className="card-body d-flex flex-column">
// // //         <h5 className="card-title">{p.title}</h5>
// // //         {p.location && <p className="card-text mb-1">{p.location}</p>}
// // //         {p.price && (
// // //           <p className="card-text text-muted small mb-2">
// // //             ₹{p.price.toLocaleString()}
// // //           </p>
// // //         )}
// // //         <div className="mt-auto">
// // //           {p.bedrooms && p.bathrooms && (
// // //             <small className="text-muted">
// // //               {p.bedrooms} BHK • {p.bathrooms} Bath
// // //             </small>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }





// // // src/components/PropertyCard.jsx
// // import React from "react";

// // export default function PropertyCard({ p }) {
// //   // safe values
// //   const title = p.title || p.name || "Property";
// //   const image = p.imageUrl || p.image || p.img || p.photo || "";
// //   const location = p.location || [p.city, p.state].filter(Boolean).join(", ");
// //   const price = p.price || p.amount || p.rate || null;

// //   return (
// //     <div className="card h-100 shadow-sm">
// //       {image ? (
// //         <img
// //           src={image}
// //           className="card-img-top"
// //           alt={title}
// //           style={{ height: 180, objectFit: "cover" }}
// //           onError={(e) => {
// //             e.currentTarget.onerror = null;
// //             e.currentTarget.src = "https://placehold.co/400x250?text=No+Image";

// //           }}
// //         />
        
// //       ) : (
// //         <div
// //           style={{
// //             height: 180,
// //             background: "#f0f0f0",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             color: "#999",
// //           }}
// //         >
// //           No Image
// //         </div>
// //       )}

// //       <div className="card-body d-flex flex-column">
// //         <h5 className="card-title">{title}</h5>

// //         {location && <p className="card-text mb-1 text-muted">{location}</p>}

// //         {price ? (
// //           <p className="fw-bold mb-2">₹{Number(price).toLocaleString("en-IN")}</p>
// //         ) : (
// //           <p className="text-muted small mb-2">Price not available</p>
// //         )}

// //         <div className="mt-auto">
// //           {p.ownerName && <small className="text-muted">Owner: {p.ownerName}</small>}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // src/components/PropertyCard.jsx
// // import React from "react";

// // export default function PropertyCard({ p }) {
// //   // Safe defaults
// //   const title = p.title || p.name || "Property";
// //   const image = p.imageUrl || p.image || p.img || p.photo || "";
// //   const location = p.location || [p.city, p.state].filter(Boolean).join(", ");
// //   const price = p.price || p.amount || p.rate || null;

// //   // Fallback image URL (unique per property)
// //   const fallbackImage = `https://source.unsplash.com/400x250/?house,apartment&sig=${p.id}`;

// //   return (
// //     <div className="card h-100 shadow-sm">
// //       <img
// //         src={image || fallbackImage}
// //         className="card-img-top"
// //         alt={title}
// //         style={{ height: 180, objectFit: "cover" }}
// //         onError={(e) => {
// //           e.currentTarget.onerror = null;
// //           e.currentTarget.src = fallbackImage;
// //         }}
// //       />

// //       <div className="card-body d-flex flex-column">
// //         <h5 className="card-title">{title}</h5>

// //         {location && <p className="card-text mb-1 text-muted">{location}</p>}

// //         {price ? (
// //           <p className="fw-bold mb-2">₹{Number(price).toLocaleString("en-IN")}</p>
// //         ) : (
// //           <p className="text-muted small mb-2">Price not available</p>
// //         )}

// //         <div className="mt-auto">
// //           {p.ownerName && <small className="text-muted">Owner: {p.ownerName}</small>}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }






















// import React from "react";

// export default function PropertyCard({ p }) {
//   // Title fallback
//   const title = p.title || p.name || "Property";

//   // Location fallback
//   const location = p.location || [p.city, p.state].filter(Boolean).join(", ") || "Location not available";

//   // Price fallback
//   const price = p.price || p.amount || p.rate || null;

//   // Image fallback
//   const fallbackImage = `https://source.unsplash.com/400x250/?house,apartment&sig=${p.id}`;
//   const image = p.imageUrl || p.image || p.img || p.photo || fallbackImage;

//   return (
//     <div className="card h-100 shadow-sm">
//       <img
//         src={image}
//         className="card-img-top"
//         alt={title}
//         style={{ height: 180, objectFit: "cover" }}
//         onError={(e) => { e.currentTarget.src = fallbackImage; }}
//       />
//       <div className="card-body d-flex flex-column">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text mb-1 text-muted">{location}</p>
//         <p className="fw-bold mb-2">{price ? `₹${Number(price).toLocaleString("en-IN")}` : "Price not available"}</p>
//         {p.ownerName && <small className="text-muted mt-auto">Owner: {p.ownerName}</small>}
//       </div>
//     </div>
//   );
// }
// src/components/PropertyCard.jsx
// src/components/PropertyCard.jsx
import React from "react";

export default function PropertyCard({ p }) {
  return (
    <div className="card h-100">
      <div style={{ height: 160, overflow: "hidden" }}>
        <img
          src={p.image || "/Placeholder.png"} // fallback to local placeholder
          alt={p.name || "Property Image"}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => { e.target.src = "/Placeholder.png"; }} // ensure correct fallback
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{p.name || "Unnamed Property"}</h5>
        <p className="card-text text-muted">
          {p.city || "Unknown City"}, {p.state || "Unknown State"}
        </p>
        <p className="card-text">Owner: {p.ownerName || "Unknown Owner"}</p>
        <p className="card-text">Price: Not available</p>
      </div>
    </div>
  );
}
