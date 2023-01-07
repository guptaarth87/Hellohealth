const express=require('express');
const router=express.Router()

const data=require('../controllers/Patients');
const filteredData=require('../controllers/filterData')
const modifyData=require('../controllers/modifyData')
const deleteData=require('../controllers/deleteData')
const getdata=require('../controllers/getdata');
const addResult=require('../controllers/addResults');

router.get('/test',data.patientsData)

router.post('/addData',data.addData)
router.put('/addresult/:AdharNo/:MobileNo/:result',addResult.addresults);
router.get('/filter',filteredData.datafilteration)
router.get('/getdata/:_id',getdata.get)
router.get('/filterparam/:name/:mobileNo/:AdharNo/:start_date/:end_date',filteredData.datafilterPAR)
router.put('/modifyData/:_id',modifyData.modifyData)
router.delete('/deleteData/:_id',deleteData.deleteData)

// export the router
module.exports = router; 
//:mobileNo/AdharNo/:start_date/:end_date