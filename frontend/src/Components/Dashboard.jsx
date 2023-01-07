
import React, { Component } from 'react'
import '../Styles/Dashboard.css';
const axios = require('axios');


export class Dashboard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       url:'https://datasaltdashboard.herokuapp.com',
       Pstart_date:'x',
       Pend_date:'x',
       positive_data:[],
       data_by_date:[]

    }
  }
  handleDataByDate=() => {
      const {
        Pstart_date,
        Pend_date,
        positive_data
      }= this.state
      console.log(Pstart_date+" "+Pend_date);
      this.fetch_ByDate();

  }
  async  fetch_ByDate(){
    const { 
        url,
        Pstart_date,
        Pend_date,
        data_by_date
    }= this.state
    console.log("function called");
    axios({
        method: 'GET',
        url: `${url}/databydate/${Pstart_date}/${Pend_date}`,
        headers: { 'Content-Type': 'application/json' }
    }).then(result => {
      console.log(result);
        this.setState({
            data_by_date :result
        });
    }).catch(err => {
        console.log(err); 
    });

  }

  async fetch_positive() {
    const { 
        url,
        positive_data
    }= this.state
    axios({
        method: 'GET',
        url: `${url}/databyeffect/positive`,
        headers: { 'Content-Type': 'application/json' }
    }).then(result => {
      console.log(result);
        this.setState({
           positive_data:result
        });
    }).catch(err => {
        console.log(err); 
    });
    }

  handleChange(event,category) {
    const {start_date,end_date,AdharNo,mobileNo,name} = this.state;
       if (category=="Pstart_date"){     
            this.setState({
              Pstart_date:event.target.value
            })      
            console.log("event.target.value="+event.target.value);
      }
     else if(category=="Pend_date"){
        this.setState({
          Pend_date:event.target.value
      })
      console.log("event.target.value="+event.target.value);
    }
}
  render() {
    return (
        <div className="container">Dashboard<br/>
        <div className="row">
            <div className="positive_table col-lg-12">
            <table class="table table-striped">
               <thead>
                 <tr>
                 <th scope="col">S.no</th>
                   <th scope="col">Tags</th>
                   <th scope="col">Medication</th>
                   <th scope="col">date</th>
                 </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
            </div>
           <div className="frequency_tags col-lg-5 col-md-5 col-sm-12">
            <div className="row">
           <div className="col-lg-4 ">
                   <label for="startdate" className="form-label">Start date</label>
                   <input type="date"
                    className="form-control inp_wid"  id="startdate" 
                   onChange={(e) => this.handleChange(e,"Pstart_date")} 
                    />
                 </div>
                 <div className="col-lg-4">
                 <label for="enddate" className="form-label">End date</label>
                   <input type="date" className="form-control inp_wid" id="enddate" 
                    onChange={(e) => this.handleChange(e,"Pend_date")} 
                   />
                 </div>
                 <div className="btn btn-primary botton col-3" onClick={()=>this.handleDataByDate()}>submit</div>
                 </div>
           </div>
           <div className="frequency_tags_date col-lg-5 col-md-5 col-sm-12">
               hello
           </div>
           <div className="tags col-lg-5 col-md-5 col-sm-12">
               hello
           </div>
           <div className="medication col-lg-5 col-md-5 col-sm-12">
               hello
           </div>

        </div>
    </div>
    )
  }
}

export default Dashboard