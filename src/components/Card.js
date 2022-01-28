import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
import { useContext } from "react";
import classes from "./Card.module.css";
const Card = () => {
  const { githubUser } = useContext(GithubContext);

  const { avatar_url, name, twitter_username, bio, company, location, blog } =
    githubUser;

  const items = [
    { id: 1, icon: <MdBusiness />, title: company },
    { id: 2, icon: <MdLocationOn />, title: location },
    { id: 3, icon: <MdLink />, title: blog },
  ];

  return (
    <section className={classes["user-container"]}>
      <div className={classes.header}>

        <div className={classes.leftSide}>

          <img src={avatar_url} alt="" />


          <div className={classes.nameInfo}>
            <h2>{name}</h2>
            <h4>@{twitter_username}</h4>
          </div>


        </div>

        <button className={classes["follow-btn"]}>follow</button>

      </div>

      <p className={classes.bio}>{bio}</p>

      <div className={classes.body}>
     
            <div className={classes.item}>
              <span className={classes.icon}><MdBusiness /></span>
              <span className={classes.title}>{company}</span>
            </div>
            <div  className={classes.item}>
              <span className={classes.icon}><MdLocationOn /></span>
              <span className={classes.title}>{location}</span>
            </div>
            <div className={classes.item}>
              <span className={classes.icon}><MdLink /></span>
              <a className={classes.blog} href={`https://${blog}`}>{blog}</a>
            </div>
      
      </div>
    </section>
  );
};
// const Wrapper = styled.article`
//   background: var(--clr-white);
//   padding: 1.5rem 2rem;
//   border-top-right-radius: var(--radius);
//   border-bottom-left-radius: var(--radius);
//   border-bottom-right-radius: var(--radius);
//   position: relative;
//   &::before {
//     content: 'user';
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
//   header {
//     display: grid;
//     grid-template-columns: auto 1fr auto;
//     align-items: center;
//     column-gap: 1rem;
//     margin-bottom: 1rem;
//     img {
//       width: 75px;
//       height: 75px;
//       border-radius: 50%;
//     }
//     h4 {
//       margin-bottom: 0.25rem;
//     }
//     p {
//       margin-bottom: 0;
//     }
//     a {
//       color: var(--clr-primary-5);
//       border: 1px solid var(--clr-primary-5);
//       padding: 0.25rem 0.75rem;
//       border-radius: 1rem;
//       text-transform: capitalize;
//       letter-spacing: var(--spacing);
//       transition: var(--transition);
//       cursor: pointer;
//       &:hover {
//         background: var(--clr-primary-5);
//         color: var(--clr-white);
//       }
//     }
//   }
//   .bio {
//     color: var(--clr-grey-3);
//   }
//   .links {
//     p,
//     a {
//       margin-bottom: 0.25rem;
//       display: flex;
//       align-items: center;
//       svg {
//         margin-right: 0.5rem;
//         font-size: 1.3rem;
//       }
//     }
//     a {
//       color: var(--clr-primary-5);
//       transition: var(--transition);
//       svg {
//         color: var(--clr-grey-5);
//       }
//       &:hover {
//         color: var(--clr-primary-3);
//       }
//     }
//   }
// `;
export default Card;
