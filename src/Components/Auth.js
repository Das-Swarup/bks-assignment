import React, { useState } from "react";
import "../styles/Auth.css";
import logo from "./images/logo.svg";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, userStore } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { addDoc } from "firebase/firestore";

export default function Auth() {

  const [userDetails, setUserDetails] = useState({
    email: "abc@example.com",
    password: "abc123456"
  })

  var data = useState({});

  const navigate = useNavigate();

  // const signUpUser = () => {
  //   const { email, password } = userDetails;
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
  // };

  const loginUser = () => {
    const { email, password } = userDetails;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/home')

        fetch("https://mocki.io/v1/cb5dc607-cb8f-45c3-a12c-975633ec3f27")
          .then((response) => response.json())
          .then((actualData) => {
            data = actualData.projects
            console.log(data);
            for (var i = 0; i < data.length; i++) { addDoc(userStore, data[i]) }
          })
          .catch((err) => {
            console.log(err.message);
          });

      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  }

  return (
    <div className="auth-container">
      <img src={logo} alt="" />
      <div className="auth-box">
        <div className="auth-input">
          <label htmlFor="username">USERNAME</label>
          <input type="text" />
        </div>
        <div className="auth-input">
          <label htmlFor="username">PASSWORD</label>
          <input type="text" />
        </div>
        <div className="auth-bottom">
          <u>
            <p>Forgot password?</p>
          </u>
          <u>
            <p>Sign up</p>
          </u>
        </div>
        <button onClick={loginUser}>Login</button>
      </div>
    </div>
  );
}
