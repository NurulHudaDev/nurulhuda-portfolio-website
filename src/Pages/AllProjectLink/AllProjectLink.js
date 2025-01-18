import React, { useEffect, useState } from 'react';
import './AllProjectLink.css'
// import AllProject from '../AllProject/AllProject';
// import Projects from '../../../public/Projects.json';
import AllProject from '../../Projects.json';

const AllProjectLink = () => {

    const [projects, setProjects] = useState(AllProject);
    console.log(projects);

    // useEffect(() => {
    //         fetch('Projects.json')
    //             .then(res => res.json())
    //             .then(data => setProjects(data))
    //     }, [projects]);

    const filterProjects = (catItem) => {
        const updateItems = AllProject.filter((curItem) => {
            return curItem.category === catItem
        });
        setProjects(updateItems)
    }

    // const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //     fetch('Projects.json')
    //         .then(res => res.json())
    //         .then(data => setProjects(data))
    // }, [projects]);

    // const filterProjects = (categoryProjects) => {
    //     const updatedProjects = projects.filter((curElem) => {
    //         return curElem.category === categoryProjects;
    //     })
    //     setProjects(updatedProjects);
    // }


    return (
        <>
            <div className="all_projects_link">
                <button className='btn' onClick={() => setProjects(AllProject)}>All Project</button>
                <button className='btn' onClick={() => filterProjects('web_site')}>WebSite</button>
                <button className='btn' onClick={() => filterProjects('logo_design')}>Logo & Branding</button>
                <button className='btn' onClick={() => filterProjects('ui_ux_design')}>UI/UX</button>
                <button className='btn' onClick={() => filterProjects('logo_design')}>Business Card</button>
                <button className='btn' onClick={() => filterProjects('social_media_post_design')}>Social Media Post</button>
            </div>
            <div className='card1'>
                {
                    projects.map((val) => (
                        <div data-aos="fade-up" className='container'>
                            <div className="card">
                                <img
                                    className="card__background"
                                    src={val.img}
                                    alt=""
                                />
                                <div className="card__content">
                                    <div className="card__content--container">
                                        <h2 className="card__title">{val.name}</h2>
                                    </div>
                                    <div className='btn1'>
                                        <a href={val.live_link} className="card__button">demo behance</a>
                                        {/* <a href={val.client_side_code_link} className="card__button">code link</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>

    )
}

export default AllProjectLink;