import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import {
  ExampleChart,
  Pie3D,
  Column3D,
  Bar3D,
  Doughnut2D,
} from "./Charts/index";
import classes from "./Repos.module.css";
import { useContext } from "react";
import { toHaveAttribute } from "@testing-library/jest-dom";
const Repos = () => {
  const { repos } = useContext(GithubContext);

  const languages = repos.reduce((acc, current, index, arr) => {
    const { language, stargazers_count } = current;
    if (!language) return acc;

    if (!acc[language]) {
      acc[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      acc[language] = {
        ...acc[language],
        value: acc[language].value + 1,
        stars: acc[language].stars + stargazers_count,
      }; //very importante we are here copy the object and then edit the proparity we want  go to lecture 263
    }

    return acc;
  }, {});

  // console.log(languages)  ==> {JavaScript: {…}, CSS: {…}, HTML: {…}}
  //Object.values()  ==> this convert the object values we have to an array  [{…}, {…}, {…}] so it give us the value of the proparities  and put them in an array

  const mostUsed = Object.values(languages).sort((a, b) => {
    // console.log("a.value===>");
    // console.log(a.value);

    // console.log("b.value===>");
    // console.log(b.value);

    //1. if the return value is < 0 ...a coms first
    //2. =0 nothing will be changed
    //3. >0 ... b comes firts
    // return a.value - b.value;   all of the above talks about this return witch give us a sorted array assinding 1 2 3 4
    //but i need the array to be dessinding  5 4 3 2 1 so the return shuld be return b.value - a.value;

    return b.value - a.value;
  }).slice(0, 5);


  //most stars per language
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      // item.value=item.stars;
      return { ...item, value: item.value };
    }).slice(0, 5);

  // console.log(mostPopular);


  //stars, forks
  let { stars, forks } = repos.reduce(
    (acc, current, index, arr) => {

      const {stargazers_count,name,forks}=current;
       acc.stars[stargazers_count]={label:name,value:stargazers_count};
       acc.forks[forks]={label:name,value:forks};
       return acc;
    },
      
    { stars: {}, forks: {} }
  );

  forks=Object.values(forks).slice(-5).reverse()
stars=Object.values(stars).slice(-5).reverse()


// const starAndForks = repos.reduce((acc, curr) => {
//   const { name, stargazers_count, forks } = curr
//   acc[name] = { stars: stargazers_count, forks }
//   return acc
// }, {})
 
// const sortByStarAndFork = (identifier) => {
//   return Object.entries(starAndForks)
//     .map((item) => {
//       const [key, info] = item
//       return { label: key, value: info[identifier] }
//     })
//     .sort((a, b) => b.value - a.value)
//     .slice(0, 5)
// }

  return (
    <section className={classes.section}>
      <div className={classes["section-center"]}>
        <Pie3D data={mostUsed} />
        <Doughnut2D data={mostPopular} />
        <Column3D data={stars} />
        <Bar3D data={forks} />
      </div>
    </section>
  );
};

export default Repos;
