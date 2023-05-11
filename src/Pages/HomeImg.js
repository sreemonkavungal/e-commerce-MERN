import React from "react";
import image from "../img/bg_1.jpg";



function HomeImg(){


    return (
        <>
        <div className="home-main">
        <div style={{ backgroundImage:`url(${image})`, backgroundSize:'cover',backgroundRepeat: 'no-repeat',
         height:'650px',width:'100%',display:'flex',alignItems:'center',
         justifyContent:'center',flexDirection:'column'}}>
        <h1 style={{textAlign:'center',fontFamily:'Comic Sans MS',fontSize:'50px'}}>
        WE SERVE FRESH VEGETABLES & <span><br></br></span>FRUITS</h1>
        <label style={{color:'#ffff'}}>WE DELIVER ORGANIC VEGETABLES & FRUITS</label>
        <br></br>
        <button className="home-btn">View Details</button>
        </div>
        </div>
        <div className="quick-bar">
        <div className="quick-tab">
            <div className="quick-tab-1"></div>
            <label className="label-quick">FREE SHIPPING</label>
            <label className="label-quick-1">ON ORDER OVER $100</label>
        </div>
        <div className="quick-tab">
        <div className="quick-tab-2"></div>
        <label className="label-quick">ALWAYS FRESH</label>
        <label className="label-quick-1">PRODUCT WELL PACKAGE</label>
        </div>
        <div className="quick-tab">
        <div className="quick-tab-3"></div>
        <label className="label-quick">SUPERIOR QUALITY</label>
        <label className="label-quick-1">QUALITY PRODUCTS</label>
        </div>
        <div className="quick-tab">
        <div className="quick-tab-4"></div>
        <label className="label-quick">SUPPORT</label>
        <label className="label-quick-1">24/7 SUPPORT</label>
        </div>
        </div>
        </>
    )
}

export default HomeImg;