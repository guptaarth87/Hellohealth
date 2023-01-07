const patients=require("../modals/Patients")

exports.deleteData=(req,res)=>{
    const _id=req.params._id
     
    patients.findByIdAndRemove({ _id: _id }).then(data=>{
        if (!data){
            res.status(404).send({
                message :`cannot delete may be doesnt exixt in db!`
            });
        }else{
            res.send({
                message:"deleted succesfully !"
            });
        }
    })

}