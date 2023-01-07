import React, { Component } from 'react'
import axios from 'axios';
import '../Styles/Form.css';
const API_URL = require('../Contants').API_URL;


class Form extends Component {

  constructor() {
    super()
  
    this.state = {
      name:"",
      mobileNo:"",
      age:0,
      tags:"",
      medication:"",
      city:"",
      AdharNo:"",
      results:"",
      date:"",
      description:"",
    }
  }
   
  handleChange = (e, field) => {
    const val = e.target.value;
    this.setState({
        [field]: val
    })
    console.log(val);
}

  handleSubmit=()=>{
    const {name,mobileNo,age,tags,medication,results,city,AdharNo,date,description}=this.state;
    console.log("hehehehehe!")
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = yyyy+'-'+mm +'-'+dd;
    const req = {
      name:name,
      mobileNo:mobileNo,
      age:age,
      tags:tags,
      medication:medication,
      city:city,
      AdharNo:AdharNo,
      date:today,
      description:description
    }

    //making request
    axios({
        method: 'POST',
        url: `${API_URL}/addData`,
        headers: { 'Content-Type': 'application/json' },
        data: req
    }).then(
      
      axios.put(`${API_URL}/addresult/${AdharNo}/${mobileNo}/${results}`).then(()=>{
        console.log("Done!");
        window.alert('Success!');
   
 })
      // console.log("success")
      
      ).catch(err => {
        console.log(err)
    });

  } 

    render() {
      const {name,mobileNo,age,tags,medication,city,results,AdharNo,description}=this.state;
        return (
            <div>
                <form className="row g-3 form col-lg-8" >
                  <div className="col-md-6">
                    <label for="inputname" className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" id="inputname" value={name} onChange={(e) => this.handleChange(e, 'name')}/>
                  </div>
                  <div className="col-md-6">
                    <label for="inputmobile" className="form-label">Number</label>
                    <input type="text" className="form-control" id="inputmobile" value={mobileNo} onChange={(e) => this.handleChange(e, 'mobileNo')} />
                  </div>
                  <div className="col-12">
                    <label for="inputtags" className="form-label">Tags (separate with commas)</label>
                    <input type="text" className="form-control" id="inputtags" placeholder="Enter tags" value={tags} onChange={(e) => this.handleChange(e, 'tags')}/>
                  </div>
                  <div className="col-12">
                    <label for="inputresults" className="form-label">Results from last visit.</label>
       
                    <select id="inputresults"  className="form-control" placeholder="Enter" value={results} onChange={(e) => this.handleChange(e, 'results')}>  
                       <option>null</option> 
                       <option>neutral</option> 
                       <option> positive </option>  
                       <option> negetive </option>   
                      
                     </select>  
                 
                  </div>
                  <div className="col-12">
                    <label for="inputmedication" className="form-label">Medication (separate with commas without spaces between 2 tag)</label>
                    <input className="form-control" id="exampleFormControlTextarea1" placeholder="Provided medication" rows="3" value={medication} onChange={(e) => this.handleChange(e, 'medication')}/>
                  </div>
                  <div className="col-12">
                    <label for="inputdescription" className="form-label">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Description" rows="3" value={description} onChange={(e) => this.handleChange(e, 'description')}></textarea>
                  </div>
                  <div className="col-md-2">
                    <label for="inputAge" className="form-label">Age </label>
                    <input type="text" className="form-control" placeholder="Enter Age" id="inputAge" value={age} onChange={(e) => this.handleChange(e, 'age')}/>
                  </div>
                  <div className="col-md-4">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" placeholder="Enter city" id="inputCity" value={city} onChange={(e) => this.handleChange(e, 'city')}/>
                  </div>
                  <div className="col-md-6">
                    <label for="inputAdhar" className="form-label">Adhar No.</label>
                    <input type="number" className="form-control" placeholder="Enter Adhar" id="inputAdhar" value={AdharNo} onChange={(e) => this.handleChange(e, 'AdharNo')}/>
                  </div>
                  
                 
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={()=>this.handleSubmit()}>Add data</button>
                  </div>
                </form>
                 
            
            </div>
        )
    }
}

export default Form
