const patients=require("../modals/Patients")

exports.addresults=(req,res)=>{
    const {AdharNo,MobileNo,result}=req.params;
    let main_array=[];
    patients.find({"$or":[{AdharNo:AdharNo} , {mobileNo:MobileNo }]}).then(Answer=>{ 
       console.log(Answer);
       main_array=Answer
       let nearest_date= main_array[0].date;
       let index=0;
       let  sec_index=0;
       let sec_near;
       for(i=1;i<main_array.length;i++){
           if (main_array[i].date>nearest_date){
                sec_near=nearest_date;
                sec_index=index;
                nearest_date=main_array[i].date;
                index=i;
           }else{
              continue;
           }
       }
     let required_data=  main_array[sec_index];
     const {
        _id,
        name,
        mobileNo,
        age,
        tags,
        medication,
        city,
        AdharNo,
        date
    }=required_data;
    patients.findByIdAndUpdate({ _id: _id }, 
        {   _id:_id,
            name:name,
            mobileNo:mobileNo,
            age:age,
            tags:tags,
            medication:medication,
            city:city,
            AdharNo:AdharNo,
            results:result,
            date:date
        }
        ).then(data=>{
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

    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
       })
}

