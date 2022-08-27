import React from "react";
import "../css/dashboard.css";
import logo from "../asserts/logo.png"

function Dashboard(){
    return(
        <div className="container">
            <div className="left">
                <div>
                    <img src={logo} className="logo"/>
                </div>
                <ul>
                    <li>Dashboard</li>
                    <li>Room List</li>
                    <li>Add Room</li>
                    <li>Booking</li>
                </ul>
                
            </div>
            <div className="right">
                <div className="r-top">
                    <input placeholder="Search Here..." />
                    <h1>ADMIN</h1>
                </div>
                <div className="r-bottom">
                    7777
                </div>
            </div>
        </div>
    )
}

export default Dashboard;