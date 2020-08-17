import React from "react";
import NavTabs from "./navtabs";
import "./contact.css";


function Contact() {
    return (
        <>
        <NavTabs/>
        <div className="contact">
          
            <div className="row">
                <div className="col-sm-12">
                    <h1>Contact Me</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">

                    <h3>Cell: (909) 800-7888</h3>
                    <br />
                    <h3>Email:<a href="mailto:myrnacantando@gmail.com">myrnacantando@gmail.com</a> </h3>
                    <br />
                    <h3>Github:<a href="https://github.com/Cantando" target="_blank" rel="noopener noreferrer">Cantando</a></h3>
                    <br/>
                    <h3>LinkedIn: <a href="https://www.linkedin.com/in/myrna-cantando-7428781aa/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/myrna-cantando-7428781aa</a></h3>

                </div>
                <div className="col-sm-3"></div>


            </div>


        </div>
        </>
    );
}
export default Contact;  