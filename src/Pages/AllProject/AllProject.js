import React from 'react';
import './AllProject.css';
const AllProject = (props) => {

  // console.log(props.projects)
  const { img, name, category, live_link, client_side_code_link, Server_side_code_link } = props.projects;

  return (
    <div data-aos="fade-up" className='container'>
      <div className="card">
        <img
          className="card__background"
          src={img}
          alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
          width="1920"
          height="2193"
        />
        <div className="card__content | flow">
          <div className="card__content--container | flow">
            <h2 className="card__title">{name}</h2>
          </div>
          <div className='btn1'>
            <a href={live_link} className="card__button">live demo</a>
            <a href={client_side_code_link} className="card__button">code link</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllProject;