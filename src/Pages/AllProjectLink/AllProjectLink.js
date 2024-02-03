import React, { useEffect, useState } from 'react';
import './AllProjectLink.css'
import AllProject from '../AllProject/AllProject';

const AllProjectLink = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('Projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [projects]);

    // const filterProjects = (categoryProjects) => {
    //     const updatedProjects = projects.filter((curElem) => {
    //         return curElem.category === categoryProjects;
    //     })
    //     setProjects(updatedProjects);
    // }


    return (
        <>
            <div className="all_projects_link">
                <button className='btn'>All Projects</button>
                <button className='btn'>Websites</button>
                <button className='btn'>UI UX Designs</button>
                <button className='btn'>Logo Designs</button>
            </div>
            <div className='card1'>
                {
                    projects.map((pd) => (
                        <AllProject key={pd.id} projects={pd}></AllProject>
                    ))
                }
            </div>

        </>

    )
}

export default AllProjectLink;