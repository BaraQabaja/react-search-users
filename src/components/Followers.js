import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import classes from "./Followers.module.css";
import { useContext } from "react";
import { Login } from "../pages";
import items from "../context/mockData.js/mockFollowers";

const Followers = () => {
  // const followerContext = useContext(GithubContext);
  // const {login,avatar_url,html_url}=followerContext;
  const {followers}=useContext(GithubContext)
  return (
    <section className={classes["followers-container"]}>
      <div className={classes["person-container"]}>
        {followers.map((item) => {
          const { id, login, avatar_url, html_url } = item;

          return (
            <div key={id} className={classes.person}>
              <img src={avatar_url} alt="avatar_img" />
              <div className={classes["follower-data"]}>
                <h3>{login}</h3>
                <a href={html_url}>{html_url}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// const Wrapper = styled.article`
//   background: var(--clr-white);
//   border-top-right-radius: var(--radius);
//   border-bottom-left-radius: var(--radius);
//   border-bottom-right-radius: var(--radius);
//   position: relative;

//   &::before {
//     content: ' followers';
//     position: absolute;
//     top: 0;
//     left: 0;
//     transform: translateY(-100%);
//     background: var(--clr-white);
//     color: var(--clr-grey-5);
//     border-top-right-radius: var(--radius);
//     border-top-left-radius: var(--radius);
//     text-transform: capitalize;
//     padding: 0.5rem 1rem 0 1rem;
//     letter-spacing: var(--spacing);
//     font-size: 1rem;
//   }
//   .followers {
//     overflow: scroll;
//     height: 260px;
//     display: grid;
//     grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
//     gap: 1.25rem 1rem;
//     padding: 1rem 2rem;
//   }
//   article {
//     transition: var(--transition);
//     padding: 0.15rem 0.5rem;
//     border-radius: var(--radius);
//     display: grid;
//     grid-template-columns: auto 1fr;
//     align-items: center;
//     column-gap: 1rem;
//     img {
//       height: 100%;
//       width: 45px;
//       border-radius: 50%;
//       object-fit: cover;
//     }
//     h4 {
//       margin-bottom: 0;
//     }
//     a {
//       color: var(--clr-grey-5);
//     }
//   }
// `;
export default Followers;
