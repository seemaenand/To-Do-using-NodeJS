// requiring the schema
const todoSchema=require('../models/schema');

// exporting
module.exports.home=async function(req,res){
    try{
        const tasks=await todoSchema.find({});
        return res.render('home',{
            title:"Home",
            todo_list:tasks
        });
    }catch(err){
        console.log("Found err",err);
    }
}

module.exports.createTodoList =async function(req,res){
    try{
        const newContacts=await todoSchema.create({
            Description:req.body.Description,
            Category:req.body.Category,
            Date:req.body.Date
        });
        return res.redirect('back');
    }catch(err){
        console.log("Found Some Error",err);
    }
}

module.exports.delete = async function (req, res) {
    let id = req.query;
    console.log("objrctID", id);
    let count = Object.keys(id).length;

    for (let i = 0; i < count; i++) {
        try {
            let objectId = Object.keys(id)[i];
            console.log(objectId);

            // Assuming your ID field is '_id' and the ID is in a proper ObjectId format
        
            let result = await todoSchema.findOneAndDelete({ _id: objectId });

            console.log("Deleted document:", result);
        } catch (err) {
            console.error("Error deleting document:", err);
        }
    }

    return res.redirect('back');
}
