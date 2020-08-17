import React, { Component } from 'react';
import NavTabs from "./navtabs";
import project1 from "../../images/project1.png";
import project2 from "../../images/Project2.png";
import quizgame from "../../images/Quizgame.png";
import weatherapp from "../../images/Weatherapp.png";
import notetaker from "../../images/Notetaker.png";
import generatepassword from "../../images/Generatepassword.png";





class Projects extends Component {
    render() {
        return (
            <div className="container-fluid">
                    <NavTabs/>
                <div><h1>Projects</h1></div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card-deck">
                            <div className="card">
                                <img src={project1} className="card-img-top" alt="project1" />
                                <div className="card-body">
                                    <h5 className="card-title">Project 1</h5>
                                    <p className="card-text">This project was event tracker with destination options..</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={notetaker} className="card-img-top" alt="notetaker" />
                                <div className="card-body">
                                    <h5 className="card-title">Note Taker</h5>
                                    <p className="card-text">This app is a Note taker app which allows you take notes and log and delete notes.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={project2} className="card-img-top" alt="project2" />
                                <div className="card-body">
                                    <h5 className="card-title">Project 2</h5>
                                    <p className="card-text">This project is about unheard stories about drug overdose across america.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card-deck">
                            <div className="card">
                                <img src={quizgame} className="card-img-top" alt="quizgame" />
                                <div className="card-body">
                                    <h5 className="card-title">Quiz Game</h5>
                                    <p className="card-text">This app is a quiz game that will tally up your scores and comparetoward other players.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={weatherapp} className="card-img-top" alt="weatherapp" />
                                <div className="card-body">
                                    <h5 className="card-title">Weather app</h5>
                                    <p className="card-text">This is a app that displays weather conditions. </p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img src={generatepassword} className="card-img-top" alt="generatepassword" />
                                <div className="card-body">
                                    <h5 className="card-title">Generate password</h5>
                                    <p className="card-text"> This app generates a random password.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}
export default Projects;