import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { useEffect, useState } from "react";
import parse from 'html-react-parser'
import { useLocation } from 'react-router-dom';


function ChatsInAdmin() {
const location = new useLocation()
const [allQueries,setAllQueries] = useState([])
const [message,setQuery] = useState('')
const [status,setStatus] = useState('')

    const getQueries =async()=>{

        await axios.get('http://localhost:8888/api/getallqueries',{})
        .then((response)=>{
            setAllQueries(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

   

    const handleMyQuery=async(e)=>{
        
        console.log(location.state.userName,message);
        await axios.post("http://localhost:8888/api/createquery",{role:'admin',userName:location.state.userName,message:message}).then(resp =>{
                setStatus(resp.data)
                console.log(resp.data);
          })
          .catch(err=>{
            console.log(err.response.data);
          })
    }


    
    useEffect(()=>{getQueries()},[status])
    
    let groupedByName = []
  
      groupedByName.push([allQueries.filter((eachQuery)=>eachQuery.userName === location.state.userName)])
      console.log(groupedByName);





let allchats

allchats = Object.values(groupedByName).map((eachGroup)=>{
    
    return Object.values(eachGroup).map((eachCustomer)=>{
     
     return Object.values(eachCustomer).map((eachCustomerDepth)=>{
       if(eachCustomerDepth.role === 'admin'){
           return(<>
           <div className='text-end m-5' >
                        
                         <p>{parse(eachCustomerDepth.role)}</p>
                         <p className='text-primary'>{parse(eachCustomerDepth.message)}</p>
            </div>
              </>)
       }
       else{
        if(eachCustomerDepth.role === 'customer'){
            return(<>
            <div className='text-start m-5'>
    
                         <p>{parse(eachCustomerDepth.userName)}</p>
                         <p className='text-success'>{parse(eachCustomerDepth.message)}</p>
             </div>
               </>)
        }
       }
       })
    })

})

console.log(allchats);
 
   


  



    return ( 
    <>
    <div className="table-responsive m-5 border border-3" style={{height:'60vh'}}>  
              {allchats}
    </div>
    <div className='fixed-bottom'>
        <ReactQuill theme="snow" className="form-control  " onChange={(e)=>{setQuery(e)}}/>
        <div className='text-end'>
        <button type="button" class="btn btn-primary text-end m-3" onClick={()=>{handleMyQuery()}}>Send</button>
        </div>
    </div>
    
    
    </> 
    );
}

export default ChatsInAdmin;

