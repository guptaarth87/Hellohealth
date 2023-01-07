const patients=require("../modals/Patients")

exports.patientsData=(req,res)=>{
    res.status(200).json({
        message: `everything is fine`,
        Doctors: "good to go"
    });
}

exports.addData=(req,res)=>{
    const {
        name,
        mobileNo,
        age,
        tags,
        medication,
        city,
        AdharNo,
        date,
        description
    } = req.body;
    
    const str_avail=tags;
    var main_lst=[];
    var temp="";
    for (i=0;i<str_avail.length;i++){
       if (str_avail[i]==","){
          main_lst.push(temp)
          temp="";
       }else{
           temp+=str_avail[i];
       }
    }
    console.log(main_lst)

    const str_availx=medication;
    var main_lstx=[];
    var temp="";
    for (i=0;i<str_availx.length;i++){
       if (str_availx[i]==","){
          main_lstx.push(temp)
          temp="";
       }else{
           temp+=str_availx[i];
       }
    }
    console.log(main_lstx)
    //changing name into lower case
    var name_=name.toLowerCase()
    //creating new object to add
    const userObj = new patients({
        name:name_,
        mobileNo:mobileNo,
        age:age,
        tags:main_lst,
        medication:main_lstx,
        city:city,
        AdharNo,
        results:'null',
        date:date,
        description:description

    });

    // we will call a save method on this object
    userObj.save().then(result => {
        console.log('successfully');
        res.status(200).json({
            message: "Patient Registered successfully !!",
            user: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
    });
}