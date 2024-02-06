const express = require("express");
const router = express.Router();  // Fix: Use express.Router() with an uppercase 'R'

// import controller
const { createTodo } = require("../controllers/createTodo");
const {getTodo, getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");



// define API routes
router.post("/createTodo", createTodo); 
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);





module.exports = router;
