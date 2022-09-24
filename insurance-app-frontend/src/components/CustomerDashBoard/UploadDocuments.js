import axios from 'axios';
import PocketBase from 'pocketbase'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CustomerNavBar from './CustomerNavBar';
const client = new PocketBase('http://127.0.0.1:8090');


function UploadDocuments() {

    const [customerdocuments,setcustomerdocuments] = useState('')
    const [status,setStatus] = useState('')
    const [documentName,setDocumentName] = useState('')
    let createLink
   const  handleMyLoginUpload =async(e)=>{
    e.preventDefault()
    console.log(documentName);
    try {
     
        const formdata =  new FormData()
         formdata.append('customerfiles',customerdocuments)
        const createdRecord = await client.records.create('documents',formdata)
        console.log(createdRecord);
        createLink =  'http://127.0.0.1:8090/api/files/'+createdRecord['@collectionId']+'/'+createdRecord['id']+'/'+createdRecord['customerfiles']
        console.log(createLink);
        setStatus('Upload Successful!')
        
      } catch (error) {
        setStatus('Upload Failed!')
          console.log(error);
      }
      const userName = localStorage.getItem('userName')
      const property = 'documents'
      const value = {
        fileURL :     createLink,
        fileID   : uuidv4(),
        fileName:documentName
      }
      await axios.put('http://localhost:8888/api/addpolicy',{userName,property,value})
      .then((response)=>{
          
          console.log(response);
      })
      .catch((error)=>{
          console.log(error);
      })

   }

    return ( <>
    <CustomerNavBar/>
    <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Upload Documents</h5>
            <form onSubmit={handleMyLoginUpload} >
             <div class="mb-3">
               <label for="" class="form-label"  >Document Type</label>
               <select class="form-control"  onChange={e=>setDocumentName(e.target.value)} required>
                 <option value={"Aadhar Card"}>Aadhar Card</option>
                 <option value={"Pan Card"}>Pan Card</option>
                 <option value={"Drivers License"}>Drivers License</option>
               </select>
             </div>

              <div className="form-floating mb-3">
              
                <input type="file" accept="image/*,.pdf" className="form-control"  onChange={(e) => setcustomerdocuments(e.target.files[0])}  placeholder="name@example.com" />
              
              </div>
          

              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">upload</button>
              </div>
              <h1-6 m-2>Message :<span className="badge bg-primary m-2">{status}</span></h1-6>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  </div>
    </> );
}

export default UploadDocuments;