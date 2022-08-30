import React from "react";
import "../css/dashboard.css";
import logo from "../asserts/logo.png";
import room1 from "../asserts/room1.jpg";
import room2 from "../asserts/room2.jpg";
import room3 from "../asserts/room3.jpg";

function Dashboard(){
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
                    <div className="trending">

                        <h1>TRENDING</h1>
                        <div className="t-info">
                            <div className="list">
                                <div className="category">
                                    <img src={room1} className="image"/>
                                    <div>
                                        <div className="r-type">
                                            <h1>ROOM1</h1>
                                            <h1>R10000</h1>
                                        </div>
                                        <div className="info">
                                            <span>Suit</span>
                                            <p>Pet Friendly Hotel room<br/>
                                            4-5 people</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="list">
                                <div className="category">
                                    <img src={room1} className="image"/>
                                    <div>
                                        <div className="r-type">
                                            <h1>ROOM1</h1>
                                            <h1>R10000</h1>
                                        </div>
                                        <div className="info">
                                            <span>Suit</span>
                                            <p>Pet Friendly Hotel room<br/>
                                            4-5 people</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="list">
                                <div className="category">
                                    <img src={room1} className="image"/>
                                    <div>
                                        <div className="r-type">
                                            <h1>ROOM1</h1>
                                            <h1>R10000</h1>
                                        </div>
                                        <div className="info">
                                            <span>Suit</span>
                                            <p>Pet Friendly Hotel room<br/>
                                            4-5 people</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="bottom-bottom">
                        <div className="resent">
                            <h3>RESENT BOOKINGS</h3>
                            <table>
                                <tr>
                                    <th>ROOMS</th>
                                    <th>DESCRIPTION</th>
                                    <th>PRICE</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Suit</td>
                                    <td>R10000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Suit</td>
                                    <td>R10000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Suit</td>
                                    <td>R10000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Suit</td>
                                    <td>R10000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Suit</td>
                                    <td>R10000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Suit</td>
                                    <td>R10000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Suit</td>
                                    <td>R10000</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Suit</td>
                                    <td>R10000</td>
                                </tr>
                                
                            </table>
                            <button className="button">View More</button>
                        </div>
                        <div className="reviews">
                           <h3>REVIEWS</h3>
                           <div className="people">
                                <div className="person">
                                    <img src={room1}/>
                                    <div className="message">
                                        <div className="name">Desmond Milani</div>
                                        <p>"beautiful rooms"</p>
                                    </div>
                                </div>
                                <div className="person">
                                    <img src={room1}/>
                                    <div className="message">
                                        <div className="name">Desmond Milani</div>
                                        <p>"beautiful rooms"</p>
                                    </div>
                                </div>
                                <div className="person">
                                    <img src={room1}/>
                                    <div className="message">
                                        < div className="name">Desmond Milani</div>
                                        <p>"beautiful rooms"</p>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;