import React from "react";
import './LogIn.css'
import { 
  faPen,
  faPhone,
  faBuildingColumns, 
  faComment,    
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function LogIn(){
    return(
      <div className="content">
        <div className="header-img"></div>
        <form action="" className="authentication">
            <section>
                <input type="text" name="username" id="user-name" placeholder="Enter User ID" className="user-choice"
                    required minlength="5" maxlength="12" pattern="[a-zA-Z0-9]+ " />
            </section>
            <section>
                <input type="password" name="password" id="user-password" placeholder="Enter Password"
                    className="user-choice" required minlength="8" maxlength="14" />
            </section>
            <section>
                <label for="remember-user" className="toggle">Remember user ID</label>
                <input type="checkbox" name="rememberUser" id="remember-user" className="user-choice" />
            </section>
            <section>
                <input type="submit" value="Log In" id="log-in" className="user-choice" />
            </section>
            <section>
                <a href="#" className="user-choice" id="forgot">Forgot Your User ID or Password?</a>
            </section>
        </form>
        <div className="enroll">
            <a href="/register.html"><FontAwesomeIcon icon={faPen} alt="Enroll in Bank"/>
                <p>Enroll</p>
            </a>
        </div>
        <div className="help">
            <a href="#"><FontAwesomeIcon icon={faPhone} alt="Contact Us"/>
                <p>Contact Us</p>
            </a>
            <a href="#"><FontAwesomeIcon icon={faBuildingColumns} alt="Location"/>
                <p>Locations</p>
            </a>
            <a href="#"><FontAwesomeIcon icon={faComment} alt="Feedback"/>
                <p>Feedback</p>
            </a>
        </div>
    </div>
    )
}

export default LogIn