import React, { useState } from "react";
import gif from "../../../images/lotty.gif";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Form() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessId, setBusinessId] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [gstno, setGstno] = useState("");
  async function signup() {
    await axios
      .post("http://143.244.140.179:5000/auth/signup", {
        user_id: userId,
        pass: password,
        email: email,
        gst_no: gstno,
        mobile_no: mobileno,
        name: name,
      })
      .then(async (res) => {
        if (res.data == "User already Exists") {
          alert("User already Exists");
        }
        console.log(res.data);
        localStorage.setItem("token", res.data);
        localStorage.setItem("user_id", userId);
        // window.location.replace("http://localhost:3000/Dashboard");
      })
      .catch((err) => console.log(err));
    // navigate("/business");
  }
  return (
    <div className="s-form-main">
      <div>
        <img style={{width:'48vw'}} src={gif}></img>
      </div>
      <div className="s-form">
       <center>

          <span className="s-signin">Sign Up</span>
       </center>
          
            <div className="s-userid-div">
              <div className="s-userid">Name:</div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                
                className="s-input"
              ></input>
            </div>
            <div className="s-userid-div">
              <div className="s-userid">Email</div>
              
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="s-input"
              ></input>
            </div>
            {/* <div>
              <label>Business Id</label>
              <br />
              <input
                value={businessId}
                onChange={(e) => setBusinessId(e.target.value)}
                type="text"
                style={{ width: "440px" }}
              ></input>
            </div> */}
            <div className="s-userid-div" style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div className="userid">Mobile Number</div>
                <input
                  type="text"
                  value={mobileno}
                  onChange={(e) => setMobileno(e.target.value)}
                  className="s-input-2"
                ></input>
              </div>
              <div>
                <div className="userid">GST Number</div>
                <input
                
                  value={gstno}
                  onChange={(e) => setGstno(e.target.value)}
                  type="text"
                  className="s-input-2"></input>
              </div>
            </div>
            <div className="s-userid-div" style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div className="userid">User Id</div>
                <input
                  type="text"
                  value={mobileno}
                  onChange={(e) => setMobileno(e.target.value)}
                  className="s-input-2"
                ></input>
              </div>
              <div>
                <div className="userid">Password</div>
                <input
                
                  value={gstno}
                  onChange={(e) => setGstno(e.target.value)}
                  type="text"
                  className="s-input-2"></input>
              </div>
            </div>
           
            <div className="s-btn" onClick={() => signup()}>
              Sign Up
            </div>
           
            <div className="s-btm-text">
              Alrerady have an account?{" "}
              <span style={{color:'#3540A5'}} onClick={() => navigate("/login")} className="st">
                Signin
              </span>
            </div>
      </div>
    </div>
  );
}

export default Form;
