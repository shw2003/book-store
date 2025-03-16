# 📚 Book Management CRUD Application

## 🔹 Overview
This project is a **MERN Stack CRUD Application** that allows users to **add, update, delete, and view books** in a database. It features a **React.js frontend**, an **Express.js & Node.js backend**, and **MongoDB for data storage**. The application enables users to manage book details like **name, author, description, price, and cover image**.

---

## 🔹 Features
- ✅ **Add a New Book** – Users can enter book details and submit them to the database.
- ✅ **View All Books** – Displays all available books in a user-friendly UI.
- ✅ **Update Book Details** – Allows users to edit existing book information.
- ✅ **Delete Books** – Users can remove books from the database.
- ✅ **Loading Indicators** – Shows processing states when performing API calls.
- ✅ **Navigation Between Pages** – Users can smoothly switch between adding/updating books.

---

## 🔹 Tech Stack
- **Frontend:** React.js, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **API Handling:** Axios
- **State Management:** useState, useEffect
- **Routing:** React Router

---

## 🔹 Folder Structure
```
/backend
│-- connection/conn.js       # MongoDB connection setup
│-- models/book.models.js    # Mongoose Schema for Books
│-- routes/bookRoutes.js     # CRUD API routes
│-- app.js                   # Express server configuration
│-- package.json             # Backend dependencies

/frontend
│-- src
│   │-- components
│   │   │-- Books.jsx        # Fetches and displays books
│   │   │-- BooksSection.jsx # UI for book cards
│   │   │-- AddBooks.jsx     # Form to add/update books
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

## 🔹 API Endpoints (Backend)
| Method | Endpoint                | Description       |
|--------|-------------------------|-------------------|
| GET    | `/api/v1/getAllBooks`   | Get all books    |
| POST   | `/api/v1/add`           | Add a new book   |
| PUT    | `/api/v1/update/:id`    | Update a book    |
| DELETE | `/api/v1/delete/:id`    | Delete a book    |

---

## 🔹 Future Enhancements
- 🚀 **User Authentication** – Add login/logout functionality.
- 🚀 **Image Uploads** – Allow users to upload book images.
- 🚀 **Search & Filter** – Improve the browsing experience.

---


![image](https://github.com/user-attachments/assets/3eeda441-e4a8-4147-a701-cae662e80993)

![image](https://github.com/user-attachments/assets/0ab3656a-57c4-4e65-9115-eb645cd871ab)

![image](https://github.com/user-attachments/assets/d2e80df5-a5c8-434a-90c3-6272888bfa5c)

![image](https://github.com/user-attachments/assets/25c6b91e-1b17-49be-892c-c85d101aea07)
