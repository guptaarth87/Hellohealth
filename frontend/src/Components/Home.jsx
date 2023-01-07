import React, { Component } from 'react'
import Form from './Form';
import logo from '../logo1.png';
import '../Styles/Home.css';
import { withRouter,  } from 'react-router'
import {Navigate,useNavigate , Link} from 'react-router-dom'



export class Home extends Component {
 
  
  render() {
    return (
      <>
      <div className="nav_home ">
       
          <img src={logo} className="btn btn-secondary main_logo "/>
          <Link to="dashboard" className="dashboard btn btn-primary">Dashboard</Link>
          <Link to="dataread" className="read btn btn-primary">Read data</Link>
          <Link to="datamodify" className="modify btn btn-primary">Modify/Delete data</Link>
          <Link to="dashboard" className="dashboard btn btn-primary">Dashboard</Link>
      </div>
       <div>
         <Form/>
      </div>
      </>
    )
    
  }
}

export default Home;


