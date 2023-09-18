import React from "react";
import {BsBusFrontFill} from "react-icons/bs"
import {HiLocationMarker} from "react-icons/hi"
import {MdOutlineWork} from "react-icons/md"
import {GrUserAdmin} from "react-icons/gr"
import {AiOutlineDashboard} from "react-icons/ai"
import {AiOutlineFieldTime} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BsTicket} from "react-icons/bs"
import {FcStatistics} from "react-icons/fc"
import {RiNumbersFill} from "react-icons/ri"
import {TfiWrite} from "react-icons/tfi"

const AdminDashboard = () => {
    return (
        
  
<div className="admin-content">
  
<ul>
<li><a href="/dashboard" style={{textDecoration:'none',color:'white',fontFamily:"Inter"}}>Dashboard <AiOutlineDashboard size='25px' style={{paddingLeft:'1px'}}></AiOutlineDashboard></a> </li>
<li><a href="/location" style={{textDecoration:'none',color:'white',fontFamily:"Inter"}}>Lokacionet <HiLocationMarker size='25px' style={{paddingLeft:'3px',paddingTop:'3px'}}></HiLocationMarker></a></li>
<li><a href="/company" style={{textDecoration:'none',color:'white',fontFamily:"Inter"}}>Kompanite <MdOutlineWork size='25px' style={{paddingLeft:'3px',paddingTop:'3px'}}></MdOutlineWork></a></li>
<li><a href="/busItinerary" style={{textDecoration:'none',color:'white',fontFamily:"Inter"}}>Itineraret <AiOutlineFieldTime size='25px' style={{paddingLeft:'3px',paddingTop:'3px'}}></AiOutlineFieldTime></a></li>
<li><a href="/busLines" style={{textDecoration:'none',color:'white',fontFamily:"Inter"}}>Linjat <BsBusFrontFill size='25px' style={{paddingLeft:'3px',paddingTop:'3px'}}></BsBusFrontFill></a></li>
<li><a href="/"style={{textDecoration:'none',color:'white',fontFamily:"Inter"}}>Users <AiOutlineUser size='25px' style={{paddingLeft:'3px',paddingTop:'3px'}}>
          </AiOutlineUser></a></li>
          
          <li><a href="/feedback" style={{textDecoration:'none',color:'white',fontFamily:"Inter"}}>Feedback <TfiWrite size='25px' style={{paddingLeft:'3px',paddingTop:'3px'}}>
          </TfiWrite></a></li>
</ul>
    
        <div className="admin-one">
            <br></br><br></br>
            <div className="admin-sq">
               
                <div className="small">
                <FcStatistics size='40px' style={{marginLeft:'50px'}}></FcStatistics>
                    <h3>1360 Users</h3>
                   
                    </div>

                    <div className="small">
                    < RiNumbersFill size='40px' style={{marginLeft:'50px'}}></RiNumbersFill>
                    <h3>78 Linja</h3>
                    </div>

                    <div className="small">
                    <FcStatistics size='40px' style={{marginLeft:'50px'}}></FcStatistics>
                    <h3>140 Rezervime day/avg</h3>
                    </div>

                    <div className="small">
                    < RiNumbersFill size='40px' style={{marginLeft:'50px'}}></RiNumbersFill>
                    <h3 style={{color:'red'}}>12 Lost Users</h3>
                    </div>

            </div>
            <br></br><br></br><br></br>
        <div className="admin-two">
<div className="admin-box">
<br></br>
<a href="/location" style={{textDecoration:'none', color:'rgb(47, 47, 47)'}}><h2>Lokacionet</h2></a> 
    <br></br>
    <HiLocationMarker size='55px' style={{alignItems:'center',marginLeft:'85px'}}>
          </HiLocationMarker>
</div>

<div className="admin-box">
    <br></br>
    <a href="/busLines" style={{textDecoration:'none', color:'rgb(47, 47, 47)'}}><h2>Linjat</h2></a>
    <br></br>
    <BsBusFrontFill size='55px' style={{alignItems:'center',marginLeft:'85px'}}>
          </BsBusFrontFill>
 
</div>
</div>

<div className="admin-three">
<div className="admin-box">

<a href="/company" style={{textDecoration:'none', color:'rgb(47, 47, 47)'}}><h2>Kompanite</h2></a>
    <br></br>
    <MdOutlineWork size='55px' style={{alignItems:'center',marginLeft:'85px'}}>
          </MdOutlineWork>
</div>

<div className="admin-box">

<a href="/" style={{textDecoration:'none', color:'rgb(47, 47, 47)'}}><h2>Admin</h2></a>
    <br></br>
    <GrUserAdmin size='55px' style={{alignItems:'center',marginLeft:'85px'}}>
          </GrUserAdmin>
</div>
</div>
<br></br><br></br><br></br>
  </div>
  </div>  
    );
  }
  
  export default  <AdminDashboard/>;