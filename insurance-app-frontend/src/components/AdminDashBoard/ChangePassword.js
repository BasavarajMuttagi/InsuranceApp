import axios from 'axios';
import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import CustomerNavBar from '../CustomerDashBoard/CustomerNavBar';
import AgentNavBar from '../AgentDashBoard/AgentNavBar';
import EmployeeNavBar from '../EmployeeDashBoard/EmployeeNavBar';
import AdminNavBar from './AdminNavBar';


function ChangePassWord() {
    const navigation = new useNavigate()
    const [oldPassword, updateOldPassword] = useState("")
    const [newPassword, updateNewPassword] = useState("")
    const [confirmPassword, updateConfirmPassword] = useState("")
    const [loginStatus, updateloginStatus] = useState("")
    const role = localStorage.getItem('user')
    
    const handleChangePassWord = async(e) =>{
        e.preventDefault()

       const userName =  localStorage.getItem('userName')

        await axios.put("http://localhost:8888/api/changepassword",{userName,oldPassword,newPassword,confirmPassword}).then(resp=>{
          
            updateloginStatus(resp.data)
            console.log(resp.data)
            
        }).catch(err=>{
          updateloginStatus(err.response.data)
          console.log(err.response.data);
        })
      
    }
    
return (
 <>
 { role === 'customer'? <CustomerNavBar/> : role === 'agent'? <AgentNavBar/> : role === 'employee'?  <EmployeeNavBar/> : role === 'admin'?<AdminNavBar/> : ''
 }
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Change Password</h5>
            <form onSubmit={handleChangePassWord} >
              <div className="form-floating mb-3">
                <input type="text" className="form-control" onChange={(e) => updateOldPassword(e.target.value)} id="floatingInput" placeholder="name@example.com" />
                <label >Old Password</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" onChange={(e) => updateNewPassword(e.target.value)} id="floatingPassword" placeholder="Password"/>
                <label >New Password</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control"  onChange={(e) => updateConfirmPassword(e.target.value)} id="floatingInput" placeholder="name@example.com" />
                <label >Confirm Password</label>
              </div>

              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Change Password</button>
              </div>
              <h1-6 m-2>Message :<span className="badge bg-primary m-2">{loginStatus}</span></h1-6>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  </>
    );
}

export default ChangePassWord;