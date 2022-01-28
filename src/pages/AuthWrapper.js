import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loadingGif from "../images/preloader.gif";
import styled from "styled-components";
function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return <h2>loading...</h2>;
  }

  if (error) {
    return <h2>oops...{error.message}</h2>;
  }
  return <>{children}</>;
}

// const Wrapper = styled.section`
//   min-height: 100vh;
//   display: grid;
//   place-items: center;
//   img {
//     width: 150px;
//   }
// `;
export default AuthWrapper;
