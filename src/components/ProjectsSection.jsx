// import React from 'react'
import { useState, React } from 'react'
import '../styles/projectsSection.css'
import ProjectsCard from './ProjectsCard'

const ProjectsSection = () => {

  const [filter, setFilter] = useState('all');

  const projectsList = [
    {
      title:'Project 1',
      description:'A small description here',
      imgUrl:'https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg',
      type:'react'
    },
    {
      title:'Project 2',
      description:'A small description here',
      imgUrl:'https://www.creative.onl/wp-content/uploads/2021/08/web-design-packages-scaled-1200x800.jpg',
      type:'js'
    },
    {
      title:'Project 3',
      description:'A small description here',
      imgUrl:'https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg',
      type:'react'
    },
    {
      title:'Project 4',
      description:'A small description here',
      imgUrl:'https://cdn.mos.cms.futurecdn.net/CT9xCjqrhnPD4ivB6B8Hqe.jpg',
      type:'js'
    },
    {
      title:'Project 5',
      description:'A small description here',
      imgUrl:'https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg',
      type:'react'
    },
  ];

  let projects = projectsList;

    if (filter != 'all') {
      projects = projectsList.filter((element)=>{
        return element.type == filter;
      })
    }else{
      projects = projectsList;
    }
  

  return (
    <div className='projects_section'>
        <h2 className='projects_section_header'>Projects</h2>
        <p style={{fontSize:'18px', width:'700px', margin:'30px auto'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem neque modi iste reiciendis? Incidunt quam, repellat repudiandae optio, voluptatibus ducimus fuga ipsa quasi expedita reprehenderit distinctio, adipisci provident ea accusamus.</p>
        <div className='projects_nav'>
          <div className={`projects_nav_button ${filter == 'all'? 'projects_nav_button--active': ''}`} onClick={()=>{setFilter('all')}}><p>ALL</p></div>
          <div className={`projects_nav_button ${filter == 'react'? 'projects_nav_button--active': ''}`} onClick={()=>{setFilter('react')}}><p>REACT</p></div>
          <div className={`projects_nav_button ${filter == 'js'? 'projects_nav_button--active': ''}`} onClick={()=>{setFilter('js')}}><p>JS/CSS/HTML</p></div>
        </div>
        <div className='projects_section_container'>
          {
            projects.map((project)=>{

              return <ProjectsCard key={project.title} title={project.title} description={project.description} imgUrl={project.imgUrl}/>;
            })
          }
        </div>
    </div>
  )
}

export default ProjectsSection