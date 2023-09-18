import React, { useState } from "react";
import {HiOutlineTicket} from "react-icons/hi"
import {FaBus} from "react-icons/fa"
import {TiWeatherPartlySunny} from "react-icons/ti"
import LinesFilter from "./LinesFilter";



function BusFilter() {

const getFilteredItems = (query, items) =>{
   if(!query){
      return items;
   }
   return items.filter(line => line.city.includes(query))
}

const [query,setQuery] = useState("");

const {items} = LinesFilter;
const filteredItems = getFilteredItems(query,items);

  return(
 <div>
<div className="busfilterContent">

<form class="main-form">

     <div className="formdiv2">
        <h3>K&euml;rkoni linj&euml;n e autobusit:</h3>
        <br></br>
        <div class="row">
         <div class="col-md-9">
         <div class="row">
          
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
            <label style={{marginRight:'65px'}}>Destinacioni i Nisjes</label>
            <input class="form-control" placeholder="Nga..."  type="text" name="" onChange={e => setQuery(e.target.value)}></input>
             </div>
<br></br>  
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
             <label style={{marginRight:'33px'}}>Destinacioni i Mb&euml;rritjes</label>
            <input style={{marginRight:'3px'}} class="form-control" placeholder="N&euml;..." type="text" name=""></input>
            </div>
            <br></br>
                                 <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                    <label style={{marginRight:'20px',paddingLeft:'40px'}}> Ora e nisjes</label>
                                    <input style={{marginLeft:'85px',marginRight:'7px'}} class="form-control" placeholder="12:00" type="text" name="00.0"></input>
                                 </div><br></br>
                               
                              </div>
                           </div>
                          
                           <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                              <a style={{textDecoration:'none',fontSize:'16px'}} href="#">K&euml;rko</a>
                           </div>
                           </div>
                        </div>
                     </form>
                     </div>
                    {<div> <LinesFilter/></div>}
                    <div>
 

                    </div>
                   
                     <br></br> <br></br> <br></br> <br></br> <br></br>
                     </div>
                   
      
  );
}

export default <BusFilter/>;
