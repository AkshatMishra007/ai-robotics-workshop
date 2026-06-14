# 🤖 AI & Robotics Summer Workshop


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

# 🚀 Deployment

The application is deployed and accessible online.

## Live Demo

### Frontend (Vercel)

https://your-vercel-url.vercel.app

### Backend API (Render)

https://ai-robotics-workshop-zinu.onrender.com

---

## Architecture

```text
React (Vercel)
       │
       │ Axios Requests
       ▼
Express API (Render)
       │
       ▼
Form Validation & Enquiry Processing
```

---

## API Endpoint

### Submit Enquiry

```http
POST /api/enquiry
```

#### Request Body

```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "phone": "9876543210"
}
```

#### Success Response

```json
{
  "success": true,
  "message": "Enquiry submitted successfully"
}
```

#### Error Response

```json
{
  "success": false,
  "message": "All fields are required"
}
```

---

## Deployment Configuration

### Frontend

* Platform: Vercel
* Framework: Vite
* Build Command: `npm run build`
* Output Directory: `dist`

### Backend

* Platform: Render
* Runtime: Node.js
* Start Command: `npm start`

---

## Future Enhancements

* Store enquiries in MongoDB
* Email notifications using Nodemailer
* Admin dashboard for enquiry management
* Dynamic workshop management system
* Authentication and role-based access
* Seat availability tracking
* Real-time registration analytics


## Author

**Akshat Mishra**

GitHub: https://github.com/AkshatMishra007

Email: [akshat.mishra4050@gmail.com](mailto:akshat.mishra4050@gmail.com)
