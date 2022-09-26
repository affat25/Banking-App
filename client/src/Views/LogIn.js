import React from "react";


function LogIn(){
    return(
    <div className="content" >
      <div className ="header-img"></div>
      <form action="" className="authentication">
        <section>
          <input
            type="text"
            name="username"
            id="user-name"
            placeholder="Enter User ID"
            class="user-choice"
            required
            minlength="5"
            maxlength="12"
            pattern="[a-zA-Z0-9]+ "
          />
        </section>
        <section>
          <input
            type="password"
            name="password"
            id="user-password"
            placeholder="Enter Password"
            class="user-choice"
            required
            minlength="8"
            maxlength="14"
          />
        </section>
        <section>
          <label for="remember-user" className="toggle">Remember user ID</label>
          <input
            type="checkbox"
            name="rememberUser"
            id="remember-user"
            class="user-choice"
          />
        </section>
        <section>
          <input type="submit" value="Log In" id="log-in" class="user-choice" />
        </section>
        <section>
          <a href="#" className="user-choice" id="forgot"
            >Forgot Your User ID or Password?</a
          >
        </section>
      </form>
      <div className="enroll">
        <a href="/register.html"
          ><i class="fa-solid fa-pen" alt="Enroll in Bank"></i>
          <p>Enroll</p></a
        >
      </div>
      <div className="help">
        <a href="#"
          ><i class="fa-solid fa-phone" alt="Contact Us"></i>
          <p>Contact Us</p></a
        >
        <a href="#"
          ><i className="fa-solid fa-building-columns" alt="Locations"></i>
          <p>Locations</p></a
        >
        <a href="#"
          ><i className="fa-solid fa-comment" alt="Feedback"></i>
          <p>Feedback</p></a
        >
      </div>
    </div>
    )
}

export default LogIn