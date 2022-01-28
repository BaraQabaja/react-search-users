import React,{useState,useEffect,useContext} from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
import { useAuth0 } from '@auth0/auth0-react';
import classes from "./Dashboard.module.css"
const Dashboard = () => {
  const {isLoading}=useContext(GithubContext)
  
  
if(isLoading)
{

  return( 
    <main className={classes["main-for-loading"]}>
    <Navbar/>
    <Search/>
    <div className={classes["loading-container"]}><img src={loadingImage} alt='loading' className={classes["loading-img"]}></img></div>
    </main>
    
    )
}
  return (
    <main>
      <Navbar/>
      <Search/>
      <Info/>
      <User/>
      <Repos/>
       
    </main>
  );
};

export default Dashboard;
