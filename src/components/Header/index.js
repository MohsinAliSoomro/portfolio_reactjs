import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';
export default function index() {
    return (
        <header className="header">
            <div className="inner-header">
                <div className="logo">
                    <Link to={"/"}>MA</Link>
                </div>
                <div className="right-links">
                <Link to={"/project"}>Project</Link>
                </div>
            </div>  
        </header>
    )
}
