# Real Estate Web Application

A responsive Real Estate web application built with **React (Vite)**, **Firebase Authentication**, and **plain CSS**.  
It fetches property listings dynamically from an API and provides user authentication (Signup/Login).  

---

## Features
- **Firebase Authentication** (Signup/Login/Logout with session persistence).
- **Pages**
  - **Home**: Hero banner, "What We Do" section, Featured Properties, Properties for Sale/Rent, Newsletter, Footer.
  - **Property Listings**: Fetches real estate data from API and allows filtering by Sale / Rent.
  - **Signup**: Register new users with Firebase Auth.
  - **Login**: Authenticate users and manage sessions.
- **API Integration** with [MockAPI Properties](https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing).
- **Responsive UI** using Flexbox & Grid (no Tailwind/Bootstrap).
- **Protected Routes** (only authenticated users can access Listings).

---

## Tech Stack
- [React (Vite)](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Plain CSS (Flexbox & Grid)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

---

## Project Structure
src/
┣ components/
┃ ┣ Navbar.jsx
┃ ┣ Footer.jsx
┃ ┣ PropertyCard.jsx
┃ ┗ ProtectedRoute.jsx
┣ pages/
┃ ┣ Home.jsx
┃ ┣ Listings.jsx
┃ ┣ Login.jsx
┃ ┗ Signup.jsx
┣ services/
┃ ┣ firebase.js
┃ ┗ api.js
┣ App.jsx
┣ index.css
┗ main.jsx


---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/real-estate-app.git
cd real-estate-app

npm install

Firebase Setup

Go to Firebase Console
.

Create a new Web App under your project.

Enable Email/Password Authentication in Authentication settings.

Copy your Firebase config into a .env file in the root of your project.

.env file:

VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here


(Do not commit .env to GitHub. Add it to .gitignore.)

4. Run the Development Server
npm run dev


App will be available at: http://localhost:5173
