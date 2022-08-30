import React from "react";
import "../css/dashboard.css";
import logo from "../asserts/logo.png"
import pic1 from "../asserts/pic1.jpg"
import "../css/addroom.css"



function AddRoom (){


    return(
<div className="container">

<div className="left">
<div>
                    <img src={logo} className="logo"/>
                </div>
                <ul>
                    <li className="active">Dashboard</li>
                    <li>Room List</li>
                    <li>Add Room</li>
                    <li>Booking</li>
                </ul>
                
    </div>


<div className="right">
                <div className="r-top">
                   <div className="info">
                    <input placeholder="Search Here..." />
                    <h1>ADMIN</h1>
                   </div>
                   </div>
                  <div className="r-bottom">
                    7777
                </div>
                
                </div>
                <div className="Text11">
                    <h1>Addroom</h1>
                </div>
          
            
            
            <div className="container-box">
            <div className="inputs">
                <h2>AddRoom</h2>
               
                <input type="text"className="txt" placeholder="Room Name"/><br></br>
                <select defaultValue="">
                <option hidden value="">Room Type</option>
                <option>suit</option>
                 <option>standard</option>
             </select>  <br></br>
                  
             <select defaultValue="">
                <option hidden value="">Number of people</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                </select>
              
                <input type ="text"className="txt" placeholder="Amenties"/><br></br>
                <input type="file"id="file" className="files"/>
                

                
               
                </div>
                <div className="side-imag">
                <img src={pic1} className="side-pic"/>
                <button className="add">Add Room</button>
               
                </div>

             
                </div>
                
               
                </div>




    



    )
}

export default AddRoom;