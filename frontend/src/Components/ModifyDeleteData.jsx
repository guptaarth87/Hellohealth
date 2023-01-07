import React, { Component } from 'react';
import Cardtwo from './Cardtwo';
import "../Styles/ReadData.css"
import Header from './Header';
import { API_URL } from '../Contants';
const axios = require('axios');


export class ModifyDeleteData extends Component {
  constructor() {
    super();
    this.state = {
       patients:[],
       start_date:'x',
       end_date:'x',
       name:'x',
       mobileNo:'x',
       age:0,
       tags:[],
       medication:'',
       city:'',
       AdharNo:'x',
       date:''
    }
  }
  
  componentDidMount() {
     this.filterData();
  };
  
  componentDidUpdate(){
    this.filterData();
  };
  handleFilter=()=>{
    const {
      mobileNo,
      AdharNo,
      name,
      start_date,
      end_date
    } = this.state;
  
   this.filterData();
  }
 async filterData() {
    // logic to filter the patients
    const {
      mobileNo,
      AdharNo,
      name,
      start_date,
      end_date
    } = this.state;

    const req={

    };
    // make API call to filter the patients
    if (name.length>0){
      req.name= name;
    }else{
      req.name='x';
    }
    
    if (start_date.length > 0) {
        req.start_date= start_date;
    }else{
      req.start_date='x';
    }

    if (end_date.length > 0) {
      req.end_date= end_date;
  }else{req.end_date='x'}

    if(start_date.length<0){
        req.start_date='x';
    }else{req.start_date='x'}

    if (AdharNo.length >0){
      req.AdharNo=AdharNo;
    }else{req.AdharNo='x'}

    if (mobileNo.length > 0){
      req.mobileNo= mobileNo;
    }else{req.mobileNo='x'}
    
    axios({
      method: 'GET',
     url: `${API_URL}/filterparam/${req.name}/${req.mobileNo}/${req.AdharNo}/${req.start_date}/${req.end_date}`,
    // url:`${API_URL}/filterparam/x/x/x/x/x`,
      headers: { 'Content-Type': 'application/json' }
      // data: JSON.stringify({name:"goku"})
  }).then(result => {
    console.log(result.data.patients);
      this.setState({
         patients:result.data.patients
      });
      //window.location.reload();
  }).catch(err => {
      console.log(err); 
  });
  }

  handleChange(event,category) {
    const {start_date,end_date,AdharNo,mobileNo,name} = this.state;
       if (category=="start_date"){ 
           if((event.target.value).length<0){
            this.setState({start_date:'x' })  
           }else{
            this.setState({
              start_date:event.target.value
            })  
           }
      }
     else if(category=="end_date"){
        this.setState({
          end_date:event.target.value
      })
    }
   else if(category=="name"){
      this.setState({
      name:event.target.value
    })
   }
  else if(category=="mobileNo"){
    this.setState({
      mobileNo:event.target.value
  })
 }
 else if(category=="AdharNo"){
  this.setState({
    AdharNo:event.target.value
})
}

  }


    
  render() {
    const {patients,start_date,end_date,AdharNo,mobileNo,name} = this.state;
    return <div >
                <div className="main_div ">
         <div className="head_body col-lg-12">
    <br/>
    <div className="row">

      <div className="col-lg-2">
        <label for="startdate" className="form-label">Start date</label>
        <input type="date"
         className="form-control inp_wid"  id="startdate" 
        onChange={(e) => this.handleChange(e,"start_date")} 
         />
      </div>
      <div className="col-lg-2">
      <label for="enddate" className="form-label">End date</label>
        <input type="date" className="inp_wid form-control" id="enddate" 
         onChange={(e) => this.handleChange(e,"end_date")} 
        />
      </div>
      <div className="col-lg-2">
        <label for="name_inp" className="form-label">Name</label>
        <input type="text" className="form-control inp_wid" placeholder="Enter name" id="name_inp"
         onChange={(e) => this.handleChange(e,"name")} 
        />
      </div>
      <div className="col-lg-3">
        <label for="number_inp" className="form-label">Number</label>
        <input type="text" className="form-control inp_wid" placeholder="Enter number" id="number_inp"
        onChange={(e) => this.handleChange(e,"mobileNo")} 
        />
      </div>
      <div className="col-lg-2">
        <label for="adhar_inp" className="form-label">Adhar No.</label>
        <input type="text" className="form-control inp_wid" placeholder="Enter Adhar" id="adhar_inp"
        
        onChange={(e) => this.handleChange(e,"AdharNo")} 
        />
      </div>
      
      <button className="col-lg-2 btn btn-primary inp_wid apply" onClick={()=>this.handleFilter()}>Apply Filters</button>
    </div>

    </div>
    </div>
       <div className="container">
       <Cardtwo patients={patients}/>
        
       </div>
        
    </div>;
  }
}

export default ModifyDeleteData;
