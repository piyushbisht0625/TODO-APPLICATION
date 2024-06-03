//impoert  the model
const Todo = require("../models/Todo");


exports.getTodo = async(req,res) =>{
    try{
        //fetch all data from database
        const todos = await Todo.find({});
 
        // response update 
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:" Entire Todo Data is fetched Successfully ",
        })
    }
    
    catch(err){
        console.err(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:" Server Error ",
        });

    }
}




// Single todo item  to be fetched by id.


exports.getTodoById = async(req,res) =>{
    try{
       // extract  todo item on basis of id
       const id = req.params.id;
       const todo = await Todo.findById({_id: id})

       // Data for given id not found(Not a valid id)
       if(!todo){
         return res.status(404).json({
            success:false,
            message:"No Data Found with Given Id",

         }) 
        }
         // data for given id is found ( Valid I'd)
         res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
         })
       

    }
    
    catch(err){
        console.err(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:" Server Error ",
        });

    }
}

