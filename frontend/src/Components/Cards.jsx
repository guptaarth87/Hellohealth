import React, { Component } from 'react';
import '../Styles/Card.css'

export class Cards extends Component {
  render() {
    const {patients}=this.props;
    return <div>
      {
        patients.map((item, index) =>{
         return<>          
         <div className="details_section">
          <span className="patient_name"><strong>{item.name}</strong></span>
          <span className="mobile_no"><strong>Mobile No :</strong> {item.mobileNo}</span>
          <span className="age"><strong>Age:</strong>{item.age} </span>
          <span className="date"><strong>Date :</strong> {item.date}</span>
          <span className="AdharNo"><strong>AdharNo :</strong> {item.AdharNo}</span>
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

export default Cards;
