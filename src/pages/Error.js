import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import classes from './Error.module.css'
const Error = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.ErrorTitle}>404</h1>
        <h3 className={classes.ErrorMessage}>sorry, the page you tried cannot be found</h3>
        <Link to="/" className={classes.BackHomeBtn}>Go Home</Link>
      </div>
    </section>
  );
};



// const Wrapper = styled.section`
//   min-height: 100vh;
//   display: grid;
//   place-items: center;
//   background: var(--clr-primary-10);
//   text-align: center;
//   h1 {
//     font-size: 10rem;
//   }
//   h3 {
//     color: var(--clr-grey-3);
//     margin-bottom: 1.5rem;
//   }
// `;
export default Error;
