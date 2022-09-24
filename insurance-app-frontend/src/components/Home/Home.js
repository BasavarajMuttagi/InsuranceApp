
import Footer from "../AdminDashBoard/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import HomeNavBar from "./HomeNavBar";

 function Home() {
    const [allplans,setAllPlans] = useState([])

    const getAllPlanTypes =async()=>{
       await axios.get('http://localhost:8888/api/getallplans')
        .then((response)=>{
            setAllPlans(response.data)
            console.log(response.data);
            const user = localStorage.getItem('userName')
            console.log(user + "hello");
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{getAllPlanTypes()},[])
    // let fadeImages = []
    // allplans.forEach(element => {
    //     fadeImages.push(element.planImage)
    // });

   
    
    return ( 
    <>
    <HomeNavBar/>
    <div className="slide-container ">
      <Fade>
        {allplans.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
             <a href={`/singlePlanTypeRender/${fadeImage.planType.plantype}`} target="_blank" ><img src={fadeImage.planImage} style={{width: "100%",height:'700px'}}/></a> 
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
    <Footer/>
    </> 
    );
}

export default Home;