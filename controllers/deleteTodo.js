
const Todo = require("../models/Todo");

exports.deleteTodo = async(req,res) =>{
    try{
        const {id} = req.params;
        
        await Todo.findByIdAndDelete(id);
        res.json({
            success:true,
            message:"Todo Deleted Successfully",
        })
        

    }
    
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"Server error",
            message:err.message,
        })

    }

       
    

}
