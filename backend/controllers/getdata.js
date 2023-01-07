const patients=require("../modals/Patients")

exports.get=(req,res)=>{
    const {_id}=req.params;

    patients.find({_id}).then(result=>{
        res.status(200).json({
            message: `Filtered Results fetched`,
           patient:result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
       })
}
