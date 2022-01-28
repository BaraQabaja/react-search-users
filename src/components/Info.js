import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { useContext } from "react";
import classes from "./Info.module.css";

const UserInfo = () => {
  const { githubUser } = useContext(GithubContext);
  const { public_repos, followers, following, public_gists } = githubUser;
  const data = [
    {
      id: 1,
      iconName: <GoRepo className={classes.icon}/>,
      number: public_repos,
      name: "repos",
      color: "pink",
    },
    {
      id: 2,
      iconName: <FiUsers className={classes.icon}/>,
      number: followers,
      name: "followers",
      color: "green",
    },
    {
      id: 3,
      iconName: <FiUserPlus className={classes.icon}/>,
      number: following,
      name: "following",
      color: "blue",
    },
    {
      id: 4,
      iconName: <GoGist className={classes.icon}/>,
      number: public_gists,
      name: "gists",
      color: "yellow",
    },
  ];

  

  return (
    <section className={classes["info-main-section"]}>
      <div className={classes["info-section"]}>
        {data.map((info) => {
          const { iconName, number, name, id, color } = info;

          return (
            <div key={id} className={classes["info-card"]}>
              <span className={classes[color]}>{iconName}</span>
              <div className={classes["info-content"]}>
                <h3>{number}</h3>
                <p>{name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// const Wrapper = styled.section`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   gap: 1rem 2rem;
//   @media (min-width: 640px) {
//     grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
//   }
//   .item {
//     border-radius: var(--radius);
//     padding: 1rem 2rem;
//     background: var(--clr-white);
//     display: grid;
//     grid-template-columns: auto 1fr;
//     column-gap: 3rem;
//     align-items: center;
//     span {
//       width: 3rem;
//       height: 3rem;
//       display: grid;
//       place-items: center;
//       border-radius: 50%;
//     }
//     .icon {
//       font-size: 1.5rem;
//     }
//     h3 {
//       margin-bottom: 0;
//       letter-spacing: 0;
//     }
//     p {
//       margin-bottom: 0;
//       text-transform: capitalize;
//     }
//     .pink {
//       background: #ffe0f0;
//       color: #da4a91;
//     }
//     .green {
//       background: var(--clr-primary-10);
//       color: var(--clr-primary-5);
//     }
//     .purple {
//       background: #e6e6ff;
//       color: #5d55fa;
//     }
//     .yellow {
//       background: #fffbea;
//       color: #f0b429;
//     }
//   }
// `;

export default UserInfo;
