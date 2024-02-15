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
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid} from 'recharts';


const AdminDashboard = () => {

    const data=[
     {name:'Prishtine', value: 54},
     {name:'Prizren', value: 43},
     {name:'Peje', value: 41},
     {name:'Gjakove', value: 34},
     {name:'Ferizaj', value: 19},
     {name:'Istog', value: 26},
    ];

    const data2 = [
        {
          name: '2019',
          Number: 728,
        
        },
        {
            name: '2020',
            Number: 1267,
        },
        {
            name: '2021',
       
            Number: 1965,
        },
        {
            name: '2022',
          
            Number: 1869,
        },
        {
            name: '2023',
           
            Number: 2340,
        },
    
       
      ];

    return (
        
  
<div className="admin-content">
  
<ul>
<li><a href="/dashboard" style={{textDecoration:'none',color:'white',fontFamily:"Inter"}}>Dashboard <AiOutlineDashboard size='25px' style={{paddingLeft:'1px'}}></AiOutlineDashboard></a> </li>
<li><a href="/location" style={{textDecoration:'none',color:'white',fontFamily:"Inter"}}>Lokacionet <HiLocationMarker size='25px' style={{paddingLeft:'3px',paddingTop:'3px'}}></HiLocationMarker></a></li>
<li><a href="/company" style={{textDecoration:'none',color:'white',fontFamily:"Inter"}}>Kompanite <MdOutlineWork size='25px' style={{paddingLeft:'3px',paddingTop:'3px'}}></MdOutlineWork></a></li>
<li><a href="/busItinerary" style={{textDecoration:'none',color:'white',fontFamily:"Inter"}}>Itineraret <AiOutlineFieldTime size='25px' style={{paddingLeft:'3px',paddingTop:'3px'}}></AiOutlineFieldTime></a></li>
<li><a href="/busLines" style={{textDecoration:'none',color:'white',fontFamily:"Inter"}}>Linjat <BsBusFrontFill size='25px' style={{paddingLeft:'3px',paddingTop:'3px'}}></BsBusFrontFill></a></li>
{/*<li><a href="/"style={{textDecoration:'none',color:'white',fontFamily:"Inter"}}>Users <AiOutlineUser size='25px' style={{paddingLeft:'3px',paddingTop:'3px'}}>
          </AiOutlineUser></a></li>*/}
          
          <li><a href="/allfeedbacks" style={{textDecoration:'none',color:'white',fontFamily:"Inter"}}>Feedback <TfiWrite size='25px' style={{paddingLeft:'3px',paddingTop:'3px'}}>
          </TfiWrite></a></li>
</ul>
    
        <div className="admin-one">
            <h1 style={{color:'darkslategray',fontFamily:'Inter',fontSize:'36px'}}>Welcome to your Admin Dashboard!</h1>
            <br></br><br></br><br></br><br></br>
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
            <br></br>

            <div className="chart">

<div className="chart3">
    <h3 style={{fontFamily:'Inter',color:'darkslategray'}}>Pasqyra e linjave te regjistruara per qytete:</h3>
<ResponsiveContainer width="100%" height="100%">
        <PieChart width={600} height={600}>
          <Pie
            
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={150}
            fill="#8884d8"
            label
            dataKey="value">
           
        </Pie>
          <Tooltip />
        </PieChart>
        </ResponsiveContainer>
<div className="piecities">
    <div className="cities1">
        <h4 style={{fontFamily:'Inter',color:'darkslategray'}}>Prishtine - 54</h4>
        <h4 style={{fontFamily:'Inter',color:'darkslategray'}}>Prizren - 43</h4>
        <h4 style={{fontFamily:'Inter',color:'darkslategray'}}>Peje - 41</h4>

        </div>

        <div className="cities2">
        <h4 style={{fontFamily:'Inter',color:'darkslategray'}}>Ferizaj - 19</h4>
        <h4 style={{fontFamily:'Inter',color:'darkslategray'}}>Gjakove - 34</h4>
        <h4 style={{fontFamily:'Inter',color:'darkslategray'}}>Istog - 26</h4>

        </div>
        </div>
</div>
<br></br>
<div className="chart2">
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={700}
          data={data2}
          margin={{
            top: 6,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Number" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      <h3 style={{fontFamily:'Inter',color:'darkslategray',  marginTop: '60px', width:'400px', height:'40px'}}>Pasqyra e numrit te perdoruesve nder vite:</h3>

      </div>






        </div>

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

  </div>



  </div>  
    );
  }
  
  export default  <AdminDashboard/>;