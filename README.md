📜 Historical Artifacts Tracker


<img src="https://i.ibb.co.com/Q7fghXh3/Screenshot-2025-02-05-184029.png" alt="Mobile Selling Website" />


A web application designed to track, manage, and explore historical artifacts like the Rosetta Stone, Antikythera Mechanism, and more. Users can browse existing entries, view detailed information, contribute their own artifacts, and engage with the community through likes and personal collections.

📚 Table of Contents
Features
Demo
Installation
Usage
Environment Variables
Dependencies
Project Structure
Contributing
License
🚀 Features
📋 Artifact Catalog: Browse through a diverse collection of historical artifacts.
🔍 Detailed View: View comprehensive details for each artifact.
➕ User Contributions: Add your own artifact entries to the system.
❤️ Like System: Like and engage with your favorite artifacts.
🗂️ Personal Tracker: Keep track of artifacts you’ve contributed.
🌐 Responsive Design: Optimized for all devices with a clean, intuitive UI.
💻 Demo
(Optional: Add a link or screenshot of the live demo if available.)

⚙️ Installation
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/ShehabSarar/historical-artifacts-tracker.git
cd historical-artifacts-tracker
Install Dependencies:
Using npm:

bash
Copy
Edit
npm install
Or using yarn:

bash
Copy
Edit
yarn install
Set Up Environment Variables:
Create a .env file in the root directory and add the following:


bash
Copy
Edit
npm run dev
or

bash
Copy
Edit
yarn dev
Build for Production:

bash
Copy
Edit
npm run build
or

bash
Copy
Edit
yarn build

🗝️ Environment Variables
Variable	Description
VITE_apiKey	Firebase API Key
VITE_authDomain	Firebase Auth Domain
VITE_projectId	Firebase Project ID
VITE_storageBucket	Firebase Storage Bucket
VITE_messagingSenderId	Firebase Messaging Sender
VITE_appId	Firebase App ID

Ensure these are kept secure and never exposed publicly.

📦 Dependencies

Production:
React ^18.3.1 – Frontend library

React Router DOM ^7.0.2 – Routing

Firebase ^11.1.0 – Backend services

Axios ^1.7.9 – API requests

MUI ^6.2.1 – UI components

Tailwind CSS ^3.4.16 & DaisyUI ^4.12.22 – Styling

LocalForage ^1.10.0 – Local storage

SweetAlert2 ^11.15.2 – Alert modals

Swiper ^11.1.15 – Carousel/slider functionality



Fork the repository.
Create a new branch: git checkout -b feature/your-feature-name
Make your changes and commit: git commit -m 'Add new feature'
Push to the branch: git push origin feature/your-feature-name
Open a pull request.
📜 License
(Add the appropriate license, e.g., MIT, Apache 2.0, etc.)
This project is licensed under the MIT License.
