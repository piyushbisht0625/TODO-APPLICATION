
const Todo = require("../models/Todo");

exports.createTodo = async(req,res) =>{
    try{
            // 1- extract title and description from request body
            const {title,description} = req.body;
            // 2-  create a new Todo Object and insert in DB
            const response = await Todo.create({title,description});
            // 3- send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:"Entry Created Successfully"
                }
            );

    }
    
    catch(err){

        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}
