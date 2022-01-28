import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";
import { createContext } from "react";

const rootUrl = "https://api.github.com";

//A) create context
const GithubContext = createContext();

//B) Provider , Consumer - GitubContext-Provider

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [error, setError] = useState({ show: false, msg: "" });
  //request loading
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  //search
  const searchHandler = async (user) => {
    errorHandler();
    setIsLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((error) =>
      console.log(error)
    );
    console.log(user);
    if (response) {
      setGithubUser(response.data);
      const { followers_url, login } = response.data;

      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ])
        .then((results) => {
          const [repos, followers] = results;
          const status = "fulfilled";
          if (repos.status === status) {
            setRepos(repos.value.data);
          }

          if (followers.status === status) {
            setFollowers(followers.value.data);
          } if(followers.status !== status ||repos.status !== status) {
            errorHandler(
              true,
              "sorry, repos or followers may not be correct, there is a problem in the request."
            );
          }
        })
        .catch((error) => console.log(error));

      //another way to work on followers and repos
      // followerHandler(user);
      // reposHandler(user)
    } else {
      errorHandler(true, "no user with this name ! ");
    }

    checkRequests();
    setIsLoading(false);
  };

  //followers
  //   const followerHandler = async (user) => {
  //     const followerResponse = await axios(
  //       `${rootUrl}/users/${user}/followers`
  //     ).catch((error) => console.log(error));
  //     setFollowers(followerResponse.data)
  //   };

  // //repos
  // const reposHandler = async(user)=>
  // {
  // const reposResponse=await axios(`${rootUrl}/users/${user}/repos?per_page=100`).catch((error)=>console.log(error))
  // setRepos(reposResponse.data)

  // }

  //error
  const errorHandler = (show = false, msg = "") => {
    setError({ show, msg });
  };

  //check rate
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          errorHandler(true, "you exceeded the number of requests per hour.");
        }
      })
      .catch((error) => console.log(error));
  };

  //error
  useEffect(() => {
    checkRequests();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchHandler,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
