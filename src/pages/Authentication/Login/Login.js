import React, { useState, useEffect, useContext } from "react";
import gif from "../../../images/lotty.gif";
import "./Login.css";
import axios from "axios";
import { Password } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { GlobalProvider } from "../../../ContextAPI/GlobalProvider";
function Signin() {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(GlobalProvider);

  const [signInUserId, setSignInUserId] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  // useEffect(() => {
  //     if(localStorage.getItem('login')=='true'){
  //       window.location.replace("/Dashboard")
  //     }
  // }, [])
  async function signup() {
    await axios
      .post("http://143.244.140.179:5000/auth/signin", {
        user_id: signInUserId,
        pass: signInPassword,
      })
      .then(async (res) => {
        console.log(res.data);
        if (res.data == "Enter Correct Pass") {
          alert("Enter Correct Userid / Password");
        }
        if (res.data != "Enter Correct Pass") {
          localStorage.setItem("token", res.data);
          localStorage.setItem("user_id", signInUserId);
          setCurrentUser(signInUserId);
          window.location.replace("http://localhost:3002/Dashboard");
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <div className="form-main" >

      <div className="">
        <img style={{width:'48vw'}} src={gif}></img>
      </div>
      <div className="form">
        <center>

        <span className="signin">Signin</span>
        </center>
        <div className="userid-div">
        <div className="userid">User Id</div>
        <input className="input">
        </input>
          
        </div>
        <div className="userid-div">
        <div cclassName="userid">Password</div>
        <input className="input">
        </input>
          
        </div>
        <div className="btn">Sign In</div>
        <div className="btm-text">
              Don't have an account?
              <span style={{color:'#3540A5'}} onClick={() => navigate("/")} className="">
                Sign up
              </span>
            </div>
      </div>
      </div>
    </div>
  );
}

export default Signin;
