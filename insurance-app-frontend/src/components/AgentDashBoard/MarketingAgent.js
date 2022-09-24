import axios from 'axios';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AgentNavBar from './AgentNavBar';
// darkmatrixin@gmail.com

function MarketingAgent() {
    const [description,setDescription] = useState('')
    const [to,setEmailID] = useState('')
    const [subject,setSubject] = useState('')
    const [attachment,setAttachment] = useState('')
    const [emailStatus,setStatus] = useState('')


    const from = 'basavaraj2770@gmail.com'
    const password = 'setezpppmxibbfbc'
   
    const handleMyEmail=async(e)=>{
        e.preventDefault()
        console.log(from,password,to,subject,description);

        await axios.post("http://localhost:8888/api/sendmail", {from,password,to,subject,description,attachment}).then(resp =>{
                console.log(resp.data);
                setStatus('Email Sent Successfully')
          })
          .catch(err=>{
            setStatus('failed!')
            console.log(err.response.data);
          })
    }


    return (
    <>
    <AgentNavBar/>
    <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-10 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Email Client</h5>
           
            <form onSubmit={handleMyEmail} >
              <div className="form-floating mb-3">
                <input type="email" className="form-control"  onChange={(e) => setEmailID(e.target.value)} id="floatingInput" placeholder="name@example.com" />
                <label >Email ID</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control"  onChange={(e) => setSubject(e.target.value)} id="floatingPassword" placeholder="Password"/>
                <label >Subject</label>
              </div>
              <div  >
                    <ReactQuill theme="snow" className="form-control mb-5 " onChange={e=>setDescription(e)} />
              </div>
              {/* <div className=" mb-3">
                <input type="file" className="form-control"  onChange={(e) => setAttachment(e.target.value)} id="floatingPassword" placeholder="Password"/>
              </div> */}

              <div className="text-end">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Send</button>
              </div>
             
              <h1-6 m-2>Message :<span className="badge bg-primary m-2">{emailStatus}</span></h1-6>
            </form>
          </div>
        </div>
      </div>
     
    </div>
    
  </div>

            
    </>  );
}

export default MarketingAgent;