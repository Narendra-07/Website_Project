
var Contact=require('../model/contactUsModel');

module.exports.Contact=(req,res,next)=>{
    var contact=new Contact;
    contact.Mobile=req.body.Mobile;
    contact.email=req.body.email;
    contact.Requirement=req.body.Requirement_Details;

contact.save((err,doc)=> {
    if(!err)
    console.warn(doc);
else {
return next(err);
}
});
}