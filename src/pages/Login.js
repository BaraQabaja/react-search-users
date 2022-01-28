import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";
import classes from './Login.module.css'
const Login = () => {
  const {loginWithRedirect}=useAuth0()
  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <img src={loginImg} alt="loginImg"/>
        <h1>github user</h1>
        <button className={classes["login-btn"]} onClick={loginWithRedirect}>login / sign up</button>
      </div>
    </section>
  );
};

// const Wrapper = styled.section`
//   min-height: 100vh;
//   display: grid;
//   place-items: center;
//   .container {
//     width: 90vw;
//     max-width: 600px;
//     text-align: center;
//   }
//   img {
//     margin-bottom: 2rem;
//   }
//   h1 {
//     margin-bottom: 1.5rem;
//   }
// `;
export default Login;