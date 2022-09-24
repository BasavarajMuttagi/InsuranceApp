import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser'
import AdminNavBar from './AdminNavBar';


function CustomerQueries() {
    const navigation = new useNavigate()
const [allQueries,setAllQueries] = useState([])
const [message,setQuery] = useState('')

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

   
    useEffect(()=>{getQueries()},[])
    const userNameArray = new Set()
    let groupedByName = []

    allQueries.forEach(eachQuery => {
      userNameArray.add(eachQuery.userName)
    });

    userNameArray.forEach(eachUserName => {
      groupedByName.push([allQueries.filter((eachQuery)=>eachQuery.userName === eachUserName)])
    });

let tempArray = []
    userNameArray.forEach(eachUser => {
        tempArray.push(eachUser)
});



let allUserNames  =   Object.values(tempArray).map(eachUser => {
        return(<>
                <tr>
                    <td>{eachUser}</td>
                    <td><button type="button" class="btn btn-primary" onClick={()=>{navigation('/completechat',{state:{userName:eachUser}})}}>View Queries</button></td>
                </tr>
             </>
           )
    });


    return ( 
    <>
    <AdminNavBar/>
    <div className="table-responsive m-5">
        <table className="table  table-bordered">
            <thead>
                <tr>
                    <th scope="col">Customers</th>
                    <th scope="col">View Queries</th>
                </tr>
            </thead>
            <tbody>
              {allUserNames}
            </tbody>
        </table>
    </div>
  
    </> 
    );
}

export default CustomerQueries;

