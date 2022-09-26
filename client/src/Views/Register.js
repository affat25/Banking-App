import React from "react";
function Register(){
    return(
    <div>
        <form action="" className="registration">
          <section>
            <input
              type="text"
              name="firstname"
              id="first-name"
              placeholder="Enter First Name"
              className="user-choice"
              required
              minlength="5"
              maxlength="12"
              pattern="[a-zA-Z]+ "
            />
            <input
              type="text"
              name="lastname"
              id="last-name"
              placeholder="Enter Last Name"
              className="user-choice"
              required
              minlength="5"
              maxlength="12"
              pattern="[a-zA-Z]+ "
            />
          </section>
          <section>
            <input
              type="text"
              name="username"
              id="user-name"
              placeholder="Enter User ID"
              className="user-choice"
              required
              minlength="5"
              maxlength="12"
              pattern="[a-zA-Z0-9]+ "
            />
            <input
              type="password"
              name="password"
              id="user-password"
              placeholder="Enter Password"
              className="user-choice"
              required
              minlength="8"
              maxlength="14"
            />
          </section>
          <section>
            <input
              type="text"
              name="phonenumber"
              id="phone-number"
              placeholder="Enter Phone Number"
              className="user-choice"
              required
              minlength="9"
              maxlength="9"
              pattern="[0-9]+"
            />
            <input
              type="text"
              name="emailaddress"
              id="email-address"
              placeholder="Enter E-mail Address"
              className="user-choice"
              required
              minlength="8"
              maxlength="30"
            />
          </section>
          <section>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter Full Address"
              className="user-choice"
              required
              minlength="15"
              maxlength="25"
            />
          </section>
          <section>
            <input type="submit" value="submit" id="submit" className="user-choice" />
          </section>
        </form>
    </div>
    )
}

export default Register