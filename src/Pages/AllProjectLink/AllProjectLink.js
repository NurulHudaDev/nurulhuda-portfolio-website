import React from 'react';
import { Link } from "react-router-dom";
import './AllProjectLink.css'

const AllProjectLink = () => {

    return (
        <div>
            <div>
                <nav className="container header">
                    <div>
                        <Link to='/all_projects'>All Projects</Link>
                        <Link to='/full_stack_websites'>Websites</Link>
                        <Link to='/ui_ux_designs'>UI UX Designs</Link>
                        <Link to='/logo_designs'>Logo Designs</Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default AllProjectLink;