import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Followers from "./Followers";
import classes from "./User.module.css";
const User = () => {
  return (
  
      <div className={classes["main-container"]}>
        <Card />
        <Followers />
      </div>
   
  );
};

// const Wrapper = styled.div`
//   padding-top: 2rem;
//   display: grid;
//   gap: 3rem 2rem;
//   @media (min-width: 992px) {
//     grid-template-columns: 1fr 1fr;
//   }
//   /* align-items: start; */
// `;

export default User;
