import React from "react";
import { Helmet } from "react-helmet-async";
import HeaderPage from "../components/HeaderPage";
import NavBar from "../components/NavBar";
import image_about from "../img/category-1.jpg";

function AboutPage(){


    return (
        <>
        <Helmet>
            <title>About</title>
        </Helmet>
        <div className="about-main-div">
        <HeaderPage/>
        <NavBar/>
        <div style={{ backgroundImage:`url(${image_about})`,backgroundSize:'cover',backgroundRepeat: 'no-repeat',
         height:'350px',width:'100%',display:'flex',alignItems:'center',
         justifyContent:'center',flexDirection:'column'}}>
        
        <label style={{color:'#ffff'}}>HOME ABOUT US</label>

        <h1 style={{textAlign:'center',fontFamily:'Comic Sans MS',color:'#ffff',fontSize:'50px'}}>
        ABOUT US</h1>
        
        
        </div>
        </div>
        </>
    )
}

export default AboutPage;