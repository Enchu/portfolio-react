import React from 'react';
import './btngithub.css'
import gitHubIcon from '../../image/icons/gitHub-black.svg'
import {NavLink} from "react-router-dom";

const BtnGitHub = ({link}) => {
    return (
        <NavLink to={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gitHubIcon} alt="GitHub"/>
            GitHub repo
        </NavLink>
    );
};

export default BtnGitHub;