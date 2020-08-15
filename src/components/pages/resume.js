import React, { Component } from 'react';
import resume from "../../images/Myrna_Cantando_Resume.pdf"


class Resume extends Component {
    render() {
        return (
        <>
            <div>
            <a href={resume} target="_blank" rel="noopener noreferrer"><h1>Resume Page</h1> </a>
            </div>
        </>
        )
    }
}
export default Resume;