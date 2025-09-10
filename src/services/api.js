// // // // src/services/api.js
// // // const BASE = "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing";

// // // export async function fetchProperties() {
// // //   const res = await fetch(BASE);
// // //   if (!res.ok) throw new Error("Failed to load properties");
// // //   const data = await res.json();
// // //   return data;
// // // }
// // // src/services/api.js
// // // src/services/api.js
// // // import { collection, getDocs } from "firebase/firestore";
// // // import { db } from "./firebase";

// // // /**
// // //  * Fetch all properties from Firestore
// // //  * @returns {Promise<Array>} List of properties
// // //  */
// // // export async function getProperties() {
// // //   try {
// // //     const querySnapshot = await getDocs(collection(db, "properties"));
// // //     return querySnapshot.docs.map((doc) => ({
// // //       id: doc.id,
// // //       ...doc.data(),
// // //     }));
// // //   } catch (error) {
// // //     console.error("Error fetching properties:", error);
// // //     return [];
// // //   }
// // // }

// // // // src/services/api.js
// // // // Primary: fetchProperties -> required MockAPI endpoint (assignment).
// // // // Secondary: getProperties -> Firestore helper (optional, only if you use Firestore).

// // // // --- MockAPI fetch (required by assignment) ---
// // // const MOCKAPI_BASE =
// // //   "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing";

// // // /**
// // //  * Fetch properties from the provided MockAPI endpoint.
// // //  * Returns an array of property objects or throws.
// // //  */
// // // export async function fetchProperties() {
// // //   try {
// // //     const res = await fetch(MOCKAPI_BASE, { cache: "no-store" });
// // //     if (!res.ok) {
// // //       const text = await res.text().catch(() => "");
// // //       throw new Error(`MockAPI error ${res.status}: ${text || res.statusText}`);
// // //     }
// // //     const data = await res.json();
// // //     // Normalize field names slightly so PropertyCard can use same fields:
// // //     // Many mock items use `image` and `name` fields — keep them as-is.
// // //     return Array.isArray(data) ? data : [];
// // //   } catch (err) {
// // //     console.error("fetchProperties failed:", err);
// // //     throw err;
// // //   }
// // // }

// // // // --- Optional Firestore helper (only if you initialized Firestore) ---
// // // /*
// // //   Keep this if you previously used Firestore and want to keep that code.
// // //   It assumes src/services/firebase.js exports `db` from getFirestore(app).
// // // */
// // // import { db } from "./firebase";
// // // import { collection, getDocs } from "firebase/firestore";

// // // /**
// // //  * getProperties - fetch from Firestore 'properties' collection
// // //  * (Optional: used only if you prefer Firestore; fallback not automatic)
// // //  */
// // // export async function getProperties() {
// // //   try {
// // //     const snapshot = await getDocs(collection(db, "properties"));
// // //     return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
// // //   } catch (err) {
// // //     console.error("getProperties (Firestore) failed:", err);
// // //     return [];
// // //   }
// // // }














// // // src/services/api.js
// // export async function fetchProperties() {
// //   try {
// //     const res = await fetch("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing");
// //     if (!res.ok) throw new Error("Failed to fetch properties");
// //     const data = await res.json();
// //     return data;
// //   } catch (err) {
// //     console.error("API Error:", err);
// //     return [];
// //   }
// // }



































// export async function fetchProperties() {
//   try {
//     const res = await fetch(
//       "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing"
//     );
//     if (!res.ok) throw new Error("Failed to fetch properties");
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     console.error("API Error:", err);
//     return [];
//   }
// }


// src/services/api.js
export async function fetchProperties() {
  try {
    const res = await fetch(
      "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing"
    );

    if (!res.ok) {
      // Include the HTTP status in the error for debugging
      throw new Error(`Failed to fetch properties. Status: ${res.status}`);
    }

    const data = await res.json();

    // Ensure data is an array
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("API Error:", err.message);
    // Return empty array so UI doesn't break
    return [];
  }
}
