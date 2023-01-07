import axios from 'axios';
import React, { Component } from 'react';
import Modal from 'react-modal';
import '../Styles/Card.css';
import { API_URL } from '../Contants';



export class Cardtwo extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           modifytab:false,
           deletetab:false,
           deleteid:'',
           modifyid:'',
           patient:[],
           name:"",
           mobileNo:"",
           age:0,
           tags:"",
           medication:"",
           city:"",
           AdharNo:"",
           date:""
        }
      }
  
    handleDelete=(id)=>{
        const {deletetab,deleteid} = this.state;
        this.setState({
          deletetab:true,
          deleteid:id
        })
          console.log("sab badiya ")
          console.log(id);
          console.log(deletetab)  
        }
     handleConfirm=async ()=>{
        const {deleteid}=this.state;
       await axios.delete(`${API_URL}/deleteData/${deleteid}`)
       
          this.setState({
            deleteid:'',
            deletetab:false
        
        })
        window.location.reload();
      }
    handleCancel=()=>{
      const {deletetab,modifytab} = this.state;
      this.setState({
        deletetab:false,
        modifytab:false
      })
    }

    handleModify= (_id)=>{
      const { modifytab,modifyid}=this.state;
      this.setState({
        modifytab:true,
        modifyid:_id
      });
       console.log(_id);
       axios({
        method: 'GET',
       url: `${API_URL}/getdata/${_id}`,
       headers: { 'Content-Type': 'application/json' }
    }).then(result => {
      console.log(result.data.patient);
      console.log(result.data.patient[0].name)
        this.setState({
          patient:result.data.patient,
          name:result.data.patient[0].name,
          mobileNo:result.data.patient[0].mobileNo,
          age:result.data.patient[0].age,
          tags:result.data.patient[0].tags,
          medication:result.data.patient[0].medication,
          city:result.data.patient[0].city,
          AdharNo:result.data.patient[0].AdharNo,
          date:result.data.patient[0].date
        });
       
    }).catch(err => {
        console.log(err); 
    });

    }


    handleChange = (e, field) => {
      const val = e.target.value;
      this.setState({
          [field]: val
      })
  }

    handleConfirmModify=()=>{
      const {name,mobileNo,age,tags,medication,city,AdharNo,date ,modifyid, modifytab}=this.state;
      const req = {
        name:name,
        mobileNo:mobileNo,
        age:age,
        tags:tags,
        medication:medication,
        city:city,
        AdharNo:AdharNo,
        date:date
      }
    
    axios.put(`${API_URL}/modifyData/${modifyid}`,req).then(()=>{
           window.alert("Information changed succesfully!")
            this.setState({modifytab: false});
       
    })
           
    window.location.reload();
      //write logic for modify request here

    }
   
  render() {
    const {patients}=this.props;
    const {modifytab, deletetab,patient,date,name,mobileNo,age,tags,medication,city,AdharNo}=this.state
    return <div>
      {
      deletetab?
      <>
     
       <div className="card popup col-lg-6">
               <span className="popup_text pad">Confirm that you want to delete this Record !</span>
               <span className="row">
                    <button type="submit" onClick={()=>this.handleConfirm()} className="btn btn-success butx col-3">Yes,I'm Confirm</button>
                   
                    <button type="cancel" onClick={()=>this.handleCancel()} className="btn btn-danger butxx col-2">Cancel</button>
               </span>
       </div>
      </>
      : modifytab?
      <div className="card popup_modify col-lg-6">
      <div className="container">
  
        
       <form className="row g-3 form_modify col-lg-12" >
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
                    <label for="inputtags" className="form-label">Date</label>
                    <input type="date" className="form-control" id="inputtags" placeholder="Enter tags" value={date} onChange={(e) => this.handleChange(e, 'date')}/>
                  </div>
                  <div className="col-12">
                    <label for="inputmedication" className="form-label">Medication</label>
                    <input className="form-control" id="exampleFormControlTextarea1" placeholder="Provided medication" rows="3" value={medication} onChange={(e) => this.handleChange(e, 'medication')}/>
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
       </form>
    
      <button type="submit" onClick={()=>this.handleConfirmModify()} class="btn btn-success butx2">Yes,I'm Confirm</button>
      <button type="cancel" onClick={()=>this.handleCancel()} class="btn btn-danger butx1">Cancel</button>
      </div>
     </div>
      :
      patients.map((item,index) => {
        console.log(item.tags[0][1])
        return<>
            <div key={index} className="details_section">
                   <span className="patient_name"><strong>{item.name}</strong></span>
                   <span className="mobile_no"><strong>Mobile No :</strong> {item.mobileNo}</span>
                   <span className="age"><strong>Age:</strong>{item.age} </span>
                   <span className="date"><strong>Date :</strong> {item.date}</span>
                   <span className="AdharNo"><strong>AdharNo :</strong> {item.AdharNo}</span>
                   <button onClick={()=>this.handleDelete(item._id)} className="iconx bi-trash"></button>
                   <button  onClick={()=>this.handleModify(item._id)} className="iconx bi-pencil-square"></button>
                   <span className="tags"><br/><strong>Tags: </strong>{item.tags.map((itemx, ind)=>{return `${itemx} ,`})}</span>
                  <span className="medication"><br/><strong>Medication :</strong>{item.medication.map((itemx, ind)=>{return `${itemx} ,`})}</span>
                  
                  <hr className="line"></hr>
            </div>
            </>
            
      })
       
  }
    </div>;
  }
}

export default Cardtwo;
