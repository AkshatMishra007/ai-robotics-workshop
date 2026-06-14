# 🤖 AI & Robotics Summer Workshop

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat\&logo=react\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat\&logo=vite\&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat\&logo=tailwindcss\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4-000000?style=flat\&logo=express\&logoColor=white)

## Project Overview

This project was developed as part of an internship assessment.

The goal was to create a Kidrove-inspired workshop event page for an **AI & Robotics Summer Workshop** and build a simple backend API for handling registration enquiries.

The application allows users to:

* Explore workshop details
* View learning outcomes
* Check pricing and schedule
* Read FAQs and reviews
* Learn about the instructor
* Register for the workshop through a dedicated registration page

---

## Workshop Details

| Detail     | Value                         |
| ---------- | ----------------------------- |
| Workshop   | AI & Robotics Summer Workshop |
| Age Group  | 8–14 Years                    |
| Duration   | 4 Weeks                       |
| Mode       | Online                        |
| Fee        | ₹2,999                        |
| Start Date | 15 July 2026                  |

---

## Features

### Frontend

* Responsive event detail page
* Dedicated registration page
* React Router based navigation
* FAQ accordion
* Reviews section
* Pricing section
* Workshop schedule
* Instructor information
* Form validation
* Loading and success states

### Backend

* Express.js API
* POST `/api/enquiry` endpoint
* Input validation
* JSON responses
* CORS support

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* CORS

---

## Folder Structure

```text
workshop-project/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── routes/
│   │   └── enquiry.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

### Backend

```bash
cd backend
npm install
npm start
```

Backend runs on:

```text
http://localhost:5000
```

---

## API Endpoint

### POST `/api/enquiry`

Request:

```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "phone": "9876543210"
}
```

Success Response:

```json
{
  "success": true,
  "message": "Enquiry submitted successfully"
}
```

Error Response:

```json
{
  "success": false,
  "message": "All fields are required"
}
```

---

## Design Approach

The UI is inspired by Kidrove's event detail pages.

The application uses a component-based architecture where each section of the page is implemented as a reusable React component. A dedicated registration page was created using React Router to keep the registration process separate from the workshop information page.

Tailwind CSS was used to build a responsive layout without writing custom CSS.

---

## Future Improvements

Given more time, I would:

* Store enquiries using MongoDB
* Send registration confirmation emails
* Build an admin dashboard
* Add workshop seat management
* Deploy the application to production
* Connect the "Ask a Question" section to the backend

---

## Author

**Akshat Mishra**

GitHub: https://github.com/AkshatMishra007

Email: [akshat.mishra4050@gmail.com](mailto:akshat.mishra4050@gmail.com)
