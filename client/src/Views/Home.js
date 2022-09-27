
import React from "react";
//import {Link} from 'react-router-dom'
import './Home.css'
import SelectorMenu from '../Components/SelectorMenu'
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home(){
    return(
        <div>
            <div>
                <div className="menu-container">
                    <div className="header-img">
                        <div className="overlay">
                            <div className="balance">
                                <h1>Balance</h1>
                                <div>
                                    <FontAwesomeIcon icon={faDollarSign} />
                                    <p>3981</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul className="list">
                            <li className="item">
                                Car Wash
                                <p>$24.99</p>
                            </li>
                            <li className="item">
                                Grocery Store
                                <p>$208.35</p>
                            </li>
                            <li className="item">
                                FastFood Joint
                                <p>$20.00</p>
                            </li>
                            <li className="item">
                                Streaming Subscription
                                <p>$16.81</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <SelectorMenu />
            </div>
        </div>
    )
}

export default Home