import React from "react";
import Me from "../../images/me.JPG";
import "./about.css";


function About() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>This is me!!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <img src={Me} alt="myimage" className="img-thumbnail me" />
                    </div>
                    <div className="col-sm-10">
                        <p>
                            Hi! My name is Myrna Cantando. I am a full stack developer, and I'm very passionate and dedicated to my work and I am always open to learning new technologies and frameworks. I am an ambitious and exceptionally organized developer who is recognized for the ability to communicate effectively, work as part of a team and solve problems creatively. I am active in my community and enjoy giving back. I have a strong background in Real Estate and Mortgages. I have the ability to think through problem coupled with the confidence to make ideas heard. I believe that "Success is a journey, not a destination".
                        </p>
                    </div>
                </div>
            </div>









        </>
    )

}

export default About;







