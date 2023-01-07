const patients=require("../modals/Patients")

exports.modifyData=(req,res)=>{
    const _id=req.params._id
   
    patients.findByIdAndUpdate({ _id: _id }, req.body).then(data=>{
        if (!data){
            res.status(404).send({
                message :`cannot modify may be doesnt exixt in db!`
            });
        }else{
            res.send({
                message:"modified succesfully !"
            });
        }
    })
}