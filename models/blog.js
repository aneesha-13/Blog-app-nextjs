const mongoose=require('mongoose');

const blogSchema=new mongoose.Schema({
    authorid:{
        type: String
    },
    author:{
        type: String
    },
    title:{
        type: String
    },
    content:{
        type: String
    }

})
module.exports=mongoose.models.blog || mongoose.model('blog',blogSchema);