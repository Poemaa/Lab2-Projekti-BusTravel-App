import React from "react";


function WelcomeBack() {
  return (
    <div className="welcome-content">
        <div className="welcome-one">
<div classname="welcome-text">
<h2 style={{fontSize:'26px'}}>Mir&euml; se vini n&euml; KosovaTour!</h2>
<br>
</br>
<p style={{fontSize:'20px'}}>Shijoni udh&euml;timin tuaj me nj&euml;
    <br></br> eksperienc&euml; t&euml; paharrueshme</p><br></br>
   <div className="welcome-Buttons-one">
    <a href='' style={{textDecoration:'none'}}><button id="welcome-button" style={{fontFamily:'Inter',width:'220px', height:'50px', marginBottom:'30px'}}>Shiko Linjat</button></a>
    <a href='' style={{textDecoration:'none'}}><button id="welcome-button" style={{fontFamily:'Inter',width:'220px', height:'50px', marginBottom:'30px', marginLeft:'40px'}}>Profili im</button></a>
    </div>
    <div className="welcome-Buttons-two">
    <a href='' style={{textDecoration:'none'}}><button style={{fontFamily:'Inter',width:'220px', height:'50px'}}>Shiko Rekomandimet</button></a>
    <a href="/feedbackpage" style={{textDecoration:'none'}}><button id="welcome-button" style={{fontFamily:'Inter',width:'220px', height:'50px', marginBottom:'30px', marginLeft:'40px'}}>Sh&euml;no Feedback</button></a>
    </div>
</div>
<div classname="welcome-picture">
<img src="./images/w1.svg" alt="foto" width={"510"} height={"480"} style={{marginLeft:'230px'}} />
</div>
        </div>
<br></br>
 <div className="welcome-two">
    <h2 style={{fontSize:'27px',marginBottom:'60px'}}>Vendet m&euml; t&euml; vizituara n&euml; Kosov&euml;</h2>
<br></br>

<div className="mostVisited">

<div>
<img src="./images/prizren.jpg" alt="foto" width={"300"} height={"300"} style={{marginRight:'35px', borderRadius:'40px', border: 'solid darkgrey 4px',boxShadow: '10px 10px 5px #C9C9C9'}} />
    <p style={{backgroundColor:'#C4D4E8', fontSize:'16px', color:'#2D478C', borderRadius:'60px', height:'25px', width:'150px', paddingTop:'3px', marginLeft:'75px'}}>Prizreni</p>
</div>
<div>
<img src="./images/Radavc.jpg" alt="foto" width={"300"} height={"300"} style={{marginRight:'35px',borderRadius:'40px',border: 'solid darkgrey 4px',boxShadow: '10px 10px 5px #C9C9C9'}} />
<p style={{backgroundColor:'#C4D4E8', fontSize:'16px', color:'#2D478C', borderRadius:'60px', height:'25px', width:'150px', paddingTop:'3px', marginLeft:'75px'}}>Radavci</p>
</div>

<div>
<img src="./images/Prishtina.jpg" alt="foto" width={"300"} height={"300"} style={{marginRight:'35px',borderRadius:'40px',border: 'solid darkgrey 4px',boxShadow: '10px 10px 5px #C9C9C9'}} />
<p style={{backgroundColor:'#C4D4E8', fontSize:'16px', color:'#2D478C', borderRadius:'60px', height:'25px', width:'150px', paddingTop:'3px', marginLeft:'75px'}}>Prishtina</p>
</div>

<div>
<img src="./images/Brezovica.jpg" alt="foto" width={"300"} height={"300"} style={{borderRadius:'40px',border: 'solid darkgrey 4px',boxShadow: '10px 10px 5px #C9C9C9'}} />
<p style={{backgroundColor:'#C4D4E8', fontSize:'16px', color:'#2D478C', borderRadius:'60px', height:'25px', width:'150px', paddingTop:'3px', marginLeft:'75px'}}>Brezovica</p>
</div>

</div>
<br></br><br></br><br></br><br></br><br></br><br></br>
</div>





</div>


    );
}

export default <WelcomeBack/>;