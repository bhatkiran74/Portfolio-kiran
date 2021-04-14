import React from 'react'
import Me from '../assets/me.jpg'

const About = () => {
    return (
        <div className="about bg-dark">
            <div className="container py-5 ">
                <div className="row ">
                    <div className="col-lg-6 col-xm-12 ">
                        <div className="photo-wrap mb-5">
                            <img className="profile-img" src={Me} alt="kiran.jpg" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-xm-12">
                        <h1 className="about-heading">Career Objectives</h1>
                        <p className="about-text">
                            To Secure A Position In A Well-Established Organization With Environment Where I Can Maximize My Organizational Skills, Educational Background And Ability To Work Well With People. Enhance The Knowledge And Skills and increases my Knowledge.My aim is to be good fullstack developer
                    </p>
                        <h4 className="about-heading">skills in which i measure myself as a developer </h4>
                        <ul>
                            <li><span >Front-End : </span>HTML , CSS , JAVASCRIPT , REACT & REDUX (MERN Intermediate) </li>
                            <li><span >Back-End : </span>NodeJS (Express Intermediate) </li>
                            <li><span >Database : </span>SQL & NOSQL (MonoDB) </li>

                            <li><span  >Version-Control : </span>Git and Github  </li>
                            <li><span >Devops Tools : </span>Chef , Docker ,Ansible ,Jenkins  </li>
                            <li><span >Operating System : </span>Window & Linux  </li>
                            <li><span >Programming Languages : </span>C , C++ , Java , Python </li>

                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
