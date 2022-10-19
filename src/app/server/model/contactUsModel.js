var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var contactSchema=Schema({
    Mobile:{
        type:String
    },
    email:{
        type:String
    },
    Requirement:{
type:String
    }
})


module.exports=mongoose.model("contact",contactSchema);
