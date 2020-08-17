import React from 'react';
import NavTabs from "./navtabs"
import "./home.css";


function Home() {
  return (
    <>
    <NavTabs/>
    <div id="background-home" className="container-fluid">
      
      <div className="row">
        <div className="col-sm-3"> </div>
        <div className="col-sm-6">
          <div className="home-title-backg">
          <h1 className="home-title">Myrna Cantando</h1>
          <br></br>
          <h2 className="home-title">Full Stack Web Developer</h2>
          <br></br>
          <h3 className="home-title"> West Palm Beach, Florida</h3>
          </div>
        </div>
        <div className="col-sm-3"> </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
        <a href="https://www.linkedin.com/in/myrna-cantando-7428781aa/"><i className="fab fa-linkedin fa-4x linkedin home-media-tag" ></i></a>
        </div>
        <div className="col-sm-6">
        <a href="https://github.com/cantando"><i className="fab fa-github fa-4x github home-media-tag"></i></a>
        </div>
      </div>
      
    </div>

    </>
  );
}

export default Home;