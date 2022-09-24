import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser'

function ViewReply() {
    const location = new useLocation()
    const [query,setQuery] = useState('')
    const userName = localStorage.getItem('userName')
    const [allQueries,setAllQueries] = useState([])
    const [refresh,setRefresh] = useState([])

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

    useEffect(()=>{getQueries()},[refresh])
    useEffect(()=>{getOneCustomer()},[])

    console.log(OneCustomer._id);
    let allchat = Object.values(allQueries).map((eachQuery)=>{
  
        return(<>

<div>{eachQuery.query}</div>

        </>)
      
    
    }
    )
    
    return ( <>
    <div>
        {allchat}
    </div>
    </> );
}

export default ViewReply;