import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomerNavBar from "./CustomerNavBar";
function ViewCustomer() {
    const navigation = new useNavigate()
    const [OneCustomer,setOneCustomer] = useState([])
    const [documents,setDocuments] = useState([])
    

    const getOneCustomer =async()=>{
        const userName = localStorage.getItem('userName')
        console.log(userName);
        await axios.post('http://localhost:8888/api/getonecustomer',{userName})
        .then((response)=>{
            setOneCustomer(response.data)
            setDocuments(response.data['documents']);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{getOneCustomer()},[])


  let Customerdata = <>
           <tr className="">

            <td key={OneCustomer.firstName}>{OneCustomer.firstName}</td>
            <td key={OneCustomer.lastName}>{OneCustomer.lastName}</td>
            <td key={OneCustomer.isActive}>{String(OneCustomer.isActive)}</td>
            <td key={OneCustomer._id}><button type="button" className="btn btn-primary" onClick={()=>{navigation('/editcustomer',{state:{userName:OneCustomer.credential.userName}})}}>Edit</button></td>
            </tr>
            </>

  let documentsList= Object.values(documents).map((eachDocument)=>{
    return(
        <tr className="">
        <td key={eachDocument.fileName}>{eachDocument.fileName}</td>
        <td key={eachDocument.fileURL}><a href={eachDocument.fileURL}>View Document</a></td>
        </tr>
    )

  })

    
    return (  
<>
        <CustomerNavBar/>
        <div className="table-responsive m-5">
            <table className="table table-bordered">
                <thead>
                    <tr>
        
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">isActive</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                        {Customerdata}
                     
                </tbody>
            </table>
        </div>
        <div className="table-responsive m-5">
            <table className="table table-bordered">
                <thead>
                    <tr>
        
                        <th scope="col">Document Name</th>
                        <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody>
                        {documentsList}
                </tbody>
            </table>
        </div>
</>
    );
}

export default ViewCustomer;