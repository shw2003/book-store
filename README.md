# 📚 Book Management & Payment Integration (MERN)

## 🔹 Overview
This project is a **MERN Stack CRUD Application** that allows users to **add, update, delete, and view books** in a database. It features a **React.js frontend**, an **Express.js & Node.js backend**, and **MongoDB for data storage**. Additionally, it includes **Razorpay Payment Integration**, allowing users to purchase books securely.

---

## 🔹 Features
- ✅ **Add a New Book** – Users can enter book details and submit them to the database.
- ✅ **View All Books** – Displays all available books in a user-friendly UI.
- ✅ **Update Book Details** – Allows users to edit existing book information.
- ✅ **Delete Books** – Users can remove books from the database.
- ✅ **Buy Now (Payment Integration)** – Users can pay for books using Razorpay.
- ✅ **Order Creation & Verification** – Secure backend API to process payments.
- ✅ **Loading Indicators** – Shows processing states when performing API calls.
- ✅ **Navigation Between Pages** – Users can smoothly switch between adding/updating books.
- ✅ **Thank You & Failure Pages** – Users are redirected based on payment status.

---

## 🔹 Tech Stack
- **Frontend:** React.js, Bootstrap, Axios
- **Backend:** Node.js, Express.js, Razorpay
- **Database:** MongoDB, Mongoose
- **API Handling:** Axios
- **State Management:** useState, useEffect
- **Routing:** React Router
- **Payment Gateway:** Razorpay

---

## 🔹 Folder Structure
```
/backend
│-- connection/conn.js       # MongoDB connection setup
│-- models/book.models.js    # Mongoose Schema for Books
│-- routes/bookRoutes.js     # CRUD API routes
│-- routes/paymentRoutes.js  # Payment API routes (Razorpay)
│-- app.js                   # Express server configuration
│-- package.json             # Backend dependencies

/frontend
│-- src
│   │-- components
│   │   │-- Books.jsx        # Fetches and displays books
│   │   │-- BooksSection.jsx # UI for book cards with Buy Now
│   │   │-- AddBooks.jsx     # Form to add/update books
│   │   │-- PaymentButton.jsx # Razorpay Payment integration
│   │   │-- ThankYou.jsx     # Success Page after payment
│   │   │-- Failure.jsx      # Failure Page if payment fails
│   │-- App.js               # Main React component
│-- package.json             # Frontend dependencies
```

---

## 🔹 How It Works

### 1️⃣ Start the Backend:
```
cd backend
npm install
node app.js   # or nodemon app.js
```

### 2️⃣ Start the Frontend:
```
cd frontend
npm install
npm start
```

---

## 🔹 Payment Flow
1. **User clicks "Buy Now"** → Calls the **create-order** API.
2. **Razorpay opens payment gateway** → User enters payment details.
3. **Upon successful payment**:
   - The backend **verifies the payment**.
   - If valid → Redirects to **Thank You page**.
   - If failed → Redirects to **Payment Failed page**.

---

## 🔹 API Endpoints (Backend)

### 📖 Book Management
| Method | Endpoint                | Description       |
|--------|-------------------------|-------------------|
| GET    | `/api/v1/getAllBooks`   | Get all books    |
| POST   | `/api/v1/add`           | Add a new book   |
| PUT    | `/api/v1/update/:id`    | Update a book    |
| DELETE | `/api/v1/delete/:id`    | Delete a book    |

### 💳 Payment Integration
| Method | Endpoint                     | Description            |
|--------|------------------------------|------------------------|
| POST   | `/api/payment/create-order`  | Create Razorpay order |
| POST   | `/api/payment/verify-payment`| Verify Razorpay payment |

---

## 🔹 Future Enhancements
- 🚀 **User Authentication** – Add login/logout functionality.
- 🚀 **Image Uploads** – Allow users to upload book images.
- 🚀 **Search & Filter** – Improve the browsing experience.
- 🚀 **Order History** – Track user purchases.

---

![image](https://github.com/user-attachments/assets/af7166a4-47fd-431a-8569-c9052737336c)

![image](https://github.com/user-attachments/assets/79a2104c-b06a-4c23-a68d-33a18598cb76)

![image](https://github.com/user-attachments/assets/ee649b6e-1d9b-4845-9719-5a2858a80342)

![image](https://github.com/user-attachments/assets/cccb9416-bf92-4a31-a527-9d4aee3b8e69)

![image](https://github.com/user-attachments/assets/5f10b554-89c7-4fea-adc5-039c6b5fc736)

![image](https://github.com/user-attachments/assets/10baad7a-2444-420d-87ea-99bc4cbcbefa)

![image](https://github.com/user-attachments/assets/a68448a2-fb13-47d1-9046-25f418728aa9)









