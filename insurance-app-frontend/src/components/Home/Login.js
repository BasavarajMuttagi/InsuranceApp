import axios from 'axios';
import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import HomeNavBar from './HomeNavBar';

function Login() {
    const navigation = new useNavigate()
    const [userName, updateUsername] = useState("")
    const [password, updatePassword] = useState("")
    const [loginStatus, updateloginStatus] = useState("")

    
    const handleMyLogin = async(e) =>{
        e.preventDefault()
        console.log(userName,password);
        await axios.post("http://localhost:8888/api/login",{userName,password}).then(resp=>{
          
            localStorage.setItem('user', resp.data)
            localStorage.setItem('userName',userName)
            console.log(resp.data);

            if(resp.data === 'admin'){
                navigation('/admin')
            }
            if(resp.data === 'agent'){
                navigation('/agent')
            }
            if(resp.data === 'customer'){
                navigation('/customer')
            }
            if(resp.data === 'employee'){
                navigation('/employee')
            }
            
        }).catch(err=>{
          updateloginStatus(err.response.data)
          console.log(err.response.data);
        })
      
    }
    
return (
 <>
 
 <HomeNavBar value={true}/>
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Login</h5>
            <form onSubmit={handleMyLogin} >
              <div className="form-floating mb-3">
                <input type="text" className="form-control" value={userName} onChange={(e) => updateUsername(e.target.value)} id="floatingInput" placeholder="name@example.com" />
                <label >Username</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" value={password} onChange={(e) => updatePassword(e.target.value)} id="floatingPassword" placeholder="Password"/>
                <label >Password</label>
              </div>

              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Login</button>
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

export default Login;