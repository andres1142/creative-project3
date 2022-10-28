import React from 'react';
import gitLogo from './images/GitHub-Mark.png';
import aboutImage from './images/student.jpeg';


export function GitLogo() {
    return <img src={gitLogo} width={'100px'} alt="Logo" />;
}

export function AboutImage() {
    return <img className={'about_image'} src={aboutImage}  alt="Logo" />;
}

