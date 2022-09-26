import React from "react";
function Home(){
    return(
        <div>
            <div className="menu-container">
      <div className="header-img">
        <div className="overlay">
          <div className="balance">
            <h1>Balance</h1>
            <div>
              <i className="fa-solid fa-dollar-sign"></i>
              <p>3981</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul className="list">
          <li className="item">
            <a href="#">Car Wash</a>
            <p>$24.99</p>
          </li>
          <li className="item">
            <a href="#">Grocery Store</a>
            <p>$208.35</p>
          </li>
          <li className="item">
            <a href="#">FastFood Joint</a>
            <p>$20.00</p>
          </li>
          <li className="item">
            <a href="#">Streaming Subscription</a>
            <p>$16.81</p>
          </li>
        </ul>
      </div>
    </div>
    <div className="selector-menu">
      <a href="#"><i className="fa-solid fa-wallet fa-2x" alt="Accounts"></i></a>
      <a href="#"
        ><i className="fa-solid fa-money-bill-transfer fa-2x" alt="Transfer"></i
      ></a>
      <a href="#"><i className="fa-solid fa-receipt fa-2x" alt="Pay a bill"></i></a>
      <a href="#"><i className="fa-solid fa-camera fa-2x" alt="Deposit"></i></a>
      <a href="#"
        ><i className="fa-solid fa-money-bill-1-wave fa-2x" alt="Send Money"></i
      ></a>
    </div>
        </div>
    )
}

export default Home