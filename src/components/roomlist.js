import React from "react";
import "../css/dashboard.css";
import logo from "../asserts/logo.png"
import room1 from "../images/room1.jpg"
import Room2 from "../images/Room2.jpg"
import room4 from "../images/room4.jpg"
import room5 from "../images/room5.jpg"
import room6 from "../images/room6.jpg"
import room8 from "../images/room8.jpg"
import room9 from "../images/room9.jpg"
import room10 from "../images/room10.jpg"

import standard4 from "../images/standard4.jpg"
import standard5 from "../images/standard5.jpg"
import standard6 from "../images/standard6.jpg"
import standard7 from "../images/standard7.jpg"
import standard8 from "../images/standard8.jpg"
import standard9 from "../images/standard9.jpg"
import standard from "../images/standard.jpg"

import twobedstandard from "../images/twobedstandard.jpg"
import twobedstandard4 from "../images/twobedstandard4.jpg"
import twostarndard2 from "../images/twostarndard2.jpg"

import twobedsuite from "../images/twobedsuite.jpg"
import twobedsuite4 from "../images/twobedsuite4.jpg"
import twobedsuite5 from "../images/twobedsuite5.jpg"
import twobedsute3 from "../images/twobedsute3.jpg"
import twosuite from "../images/twosuite.jpg"

import "../css/roomList.css"

function RoomList(){
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
                    <h1 className="admin">ADMIN</h1>
                   </div>
                </div>


                <div className="r-bottom">
                    <div className="select">
                        <select>
                            <option>Suite</option>
                            <option>Standard</option>
                        </select>
                    </div>


                    <div className = "rm">
                        
                        <img src ={room1} className="room1"/>
                        <br></br>
                        <label className="rom">room1      </label>
                        <label className="price"> R1500/night</label>
                        <br></br>
                        <br></br>
                        <label className="name">Suite</label>
                        <br></br>
                        <p className="para">ghhghlhjkkhjkhk</p>
                        <button className="remove" >remove</button>
                        <button className="edit" >Edit</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        
                    </div>
                    <div className = "rm">
                        
                        <img src ={Room2} className="room1"/>
                        <br></br>
                        <label className="rom">room1      </label>
                        <label className="price"> R1500/night</label>
                        <br></br>
                        <br></br>
                        <label className="name">Suite</label>
                        <br></br>
                        <p className="para">ghhghlhjkkhjkhk</p>
                        <button className="remove" >remove</button>
                        <button className="edit" >Edit</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        
                    </div>
                    <div className = "rm">
                        
                        <img src ={room4} className="room1"/>
                        <br></br>
                        <label className="rom">room2      </label>
                        <label className="price"> R1500/night</label>
                        <br></br>
                        <br></br>
                        <label className="name">Suite</label>
                        <br></br>
                        <p className="para">ghhghlhjkkhjkhk</p>
                        <button className="remove" >remove</button>
                        <button className="edit" >Edit</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        
                    </div>
                   
                    <div>
                        
                    </div>

                    
                      




               
                
                <div className = "rm">
                        
                        <img src ={room6} className="room1"/>
                        <br></br>
                        <label className="rom">room1      </label>
                        <label className="price"> R1500/night</label>
                        <br></br>
                        <br></br>
                        <label className="name">Suite</label>
                        <br></br>
                        <p className="para">ghhghlhjkkhjkhk</p>
                        <button className="remove" >remove</button>
                        <button className="edit" >Edit</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        
                    </div>
                    <div className = "rm">
                        
                        <img src ={room8} className="room1"/>
                        <br></br>
                        <label className="rom">room1      </label>
                        <label className="price"> R1500/night</label>
                        <br></br>
                        <br></br>
                        <label className="name">Suite</label>
                        <br></br>
                        <p className="para">ghhghlhjkkhjkhk</p>
                        <button className="remove" >remove</button>
                        <button className="edit" >Edit</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        
                    </div>
                    <div className = "rm">
                        
                        <img src ={room9} className="room1"/>
                        <br></br>
                        <label className="rom">room1      </label>
                        <label className="price"> R1500/night</label>
                        <br></br>
                        <br></br>
                        <label className="name">Suite</label>
                        <br></br>
                        <p className="para">ghhghlhjkkhjkhk</p>
                        <button className="remove" >remove</button>
                        <button className="edit" >Edit</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        
                    </div>
                    <div className = "rm">
                        
                        <img src ={room10} className="room1"/>
                        <br></br>
                        <label className="rom">room1      </label>
                        <label className="price"> R1500/night</label>
                        <br></br>
                        <br></br>
                        <label className="name">Suite</label>
                        <br></br>
                        <p className="para">ghhghlhjkkhjkhk</p>
                        <button className="remove" >remove</button>
                        <button className="edit" >Edit</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        
                    </div>
                    
                    
                <div className = "r">
                        
                        <img src ={room6} className="room1"/>
                        <br></br>
                        <label className="rom">room1      </label>
                        <label className="price"> R1500/night</label>
                        <br></br>
                        <br></br>
                        <label className="name">standard</label>
                        <br></br>
                        <p className="para">ghhghlhjkkhjkhk</p>
                        <button className="remove" >remove</button>
                        <button className="edit" >Edit</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        
                    </div>
                    <div className = "rm">
                        
                        <img src ={room8} className="room1"/>
                        <br></br>
                        <label className="rom">room1      </label>
                        <label className="price"> R1500/night</label>
                        <br></br>
                        <br></br>
                        <label className="name">Suite</label>
                        <br></br>
                        <p className="para">ghhghlhjkkhjkhk</p>
                        <button className="remove" >remove</button>
                        <button className="edit" >Edit</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        
                    </div>
                    <div className = "rm">
                        
                        <img src ={room9} className="room1"/>
                        <br></br>
                        <label className="rom">room1      </label>
                        <label className="price"> R1500/night</label>
                        <br></br>
                        <br></br>
                        <label className="name">Suite</label>
                        <br></br>
                        <p className="para">ghhghlhjkkhjkhk</p>
                        <button className="remove" >remove</button>
                        <button className="edit" >Edit</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        
                    </div>
                    <div className = "rm">
                        
                        <img src ={standard} className="room1"/>
                        <br></br>
                        <label className="rom">room1      </label>
                        <label className="price"> R1500/night</label>
                        <br></br>
                        <br></br>
                        <label className="name">Suite</label>
                        <br></br>
                        <p className="para">ghhghlhjkkhjkhk</p>
                        <button className="remove" >remove</button>
                        <button className="edit" >Edit</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        
                    </div>
                    <div className = "rm">
                        
                        <img src ={standard} className="room1"/>
                        <br></br>
                        <label className="rom">room1      </label>
                        <label className="price"> R1500/night</label>
                        <br></br>
                        <br></br>
                        <label className="name">Standard</label>
                        <br></br>
                        <p className="para">ghhghlhjkkhjkhk</p>
                        <button className="remove" >remove</button>
                        <button className="edit" >Edit</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        
    
                    </div>
                    <div className = "rm">
                        
                        <img src ={standard4} className="room1"/>
                        <br></br>
                        <label className="rom">room1      </label>
                        <label className="price"> R1500/night</label>
                        <br></br>
                        <br></br>
                        <label className="name">Suite</label>
                        <br></br>
                        <p className="para">ghhghlhjkkhjkhk</p>
                        <button className="remove" >remove</button>
                        <button className="edit" >Edit</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        
                    </div>
                    <div className = "rm">
                        
                        <img src ={standard5} className="room1"/>
                        <br></br>
                        <label className="rom">room1      </label>
                        <label className="price"> R1500/night</label>
                        <br></br>
                        <br></br>
                        <label className="name">Suite</label>
                        <br></br>
                        <p className="para">ghhghlhjkkhjkhk</p>
                        <button className="remove" >remove</button>
                        <button className="edit" >Edit</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        
                    </div>
                    <div className = "rm">
                        
                        <img src ={standard6} className="room1"/>
                        <br></br>
                        <label className="rom">room1      </label>
                        <label className="price"> R1500/night</label>
                        <br></br>
                        <br></br>
                        <label className="name">Suite</label>
                        <br></br>
                        <p className="para">ghhghlhjkkhjkhk</p>
                        <button className="remove" >remove</button>
                        <button className="edit" >Edit</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        </div>
                        <div className = "rm">
                        
                        <img src ={standard7} className="room1"/>
                        <br></br>
                        <label className="rom">room1      </label>
                        <label className="price"> R1500/night</label>
                        <br></br>
                        <br></br>
                        <label className="name">Suite</label>
                        <br></br>
                        <p className="para">ghhghlhjkkhjkhk</p>
                        <button className="remove" >remove</button>
                        <button className="edit" >Edit</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        </div>
                        
                    </div>

                <div className = "bottom">
                        
                        <div className="contain">
                        
                        <label className="rom">Suite     </label>
                        <label className="price"> 30</label>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                        <div className="contain">
                        
                        <label className="rom">Standard    </label>
                        <label className="price"> 50</label>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                    </div>
                    

            
                        
            </div>
        </div>
            

        
    )
}

export default RoomList;
