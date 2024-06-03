const express = require("express");
const app = express();

// Load config from env file
require("dotenv").config();

// Middleware to parse JSON request body  
app.use(express.json());  
 
 
 
// Import Routes for TODO API
const todoRoutes = require("./routes/todos");  
 
// Mount the TODO API routes
app.use("/api/v1", todoRoutes);

// Connect to the database
const dbConnect = require("./config/database");

dbConnect();

// Define the PORT
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Server Started Successfully at  Port ${PORT}`); 
});

// Default Route
app.get("/", (req, res) => {
    res.send(`<h1>This is homepage</h1>`); 
});
