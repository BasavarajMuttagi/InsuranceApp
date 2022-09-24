import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser'

function Reply() {
    const location = new useLocation()
    const [query,setQuery] = useState('')
    const userName = localStorage.getItem('userName')
    const queryObjectId = location.state.queryId
    const customerId = location.state.customerId
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

    const userNameArray = new Set()
    let groupedByName = []

    getQueries.forEach(eachQuery => {
      userNameArray.add(eachQuery.userName)
    });

    userNameArray.forEach(eachUserName => {
      groupedByName.push([getQueries.map((eachQuery)=>eachQuery.userName === eachUserName)])
    });

    console.log(groupedByName);



  //   const handleMyQuery=async(e)=>{
  //     e.preventDefault()
 
  //     console.log(userName,query);
  //     await axios.post("http://localhost:8888/api/createquery",{role,userName,message}).then(resp =>{
  //             console.log(resp.data);
  //       })
  //       .catch(err=>{
  //         console.log(err.response.data);
  //       })
  // }

    useEffect(()=>{getQueries()},[refresh])

    let replies =(replies)=>Object.values(replies).map((eachReply)=>{
       
       return (<><div >
       <li >(ADMIN): {parse(eachReply.query)}</li>
</div></>)
       
      
        
    })
    let filtered = allQueries.filter((eachQuery => eachQuery.customerId === customerId))
    let allQueriesList = Object.values(filtered).map((eachQuery)=>{
        return(<>
        <div >
        <li className='bg-success '>(Customer):{parse(eachQuery.query)}</li>
        </div>
        <div  >
                    <ul className='list-unstyled'>
                    {replies(eachQuery.replies)}
                    </ul>
        </div>
                    
        </>)
    })

    const handleReply =async(e)=>{
        e.preventDefault()
        console.log(userName,queryObjectId,query);
        await axios.post('http://localhost:8888/api/replyquery',{userName,queryObjectId,query})
        .then((response)=>{
            setRefresh(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    
    return ( <>

<ul className='m-2 list-unstyled'>

    {allQueriesList}
</ul>
<div className="container fixed-bottom">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-10 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Write Your Query Here</h5>
           
            <form onSubmit={handleReply} >
              
              <div  >
              <ReactQuill theme="snow" className="form-control" onChange={e=>setQuery(e)} />
              </div>
             
              <div className="text-end">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Send</button>
              </div>
              <h1-6 m-2>Message :<span className="badge bg-primary m-2">{}</span></h1-6>
            </form>
          </div>
        </div>
      </div>
     
    </div>
    
  </div>

    </> );
}

export default Reply;