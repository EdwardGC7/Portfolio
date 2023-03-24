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
      type:'react',
      demo:'https://www.youtube.com/',
      repository:'https://github.com/'
    },
    {
      title:'Project 2',
      description:'A small description here',
      imgUrl:'https://www.creative.onl/wp-content/uploads/2021/08/web-design-packages-scaled-1200x800.jpg',
      type:'js',
      demo:'https://www.youtube.com/',
      repository:'https://github.com/'
    },
    {
      title:'Project 3',
      description:'A small description hereA small description hereA small description hereA small description hereA small description hereA small description here',
      imgUrl:'https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg',
      type:'react',
      demo:'https://www.youtube.com/',
      repository:'https://github.com/'
    },
    {
      title:'Project 4',
      description:'A small description here',
      imgUrl:'https://cdn.mos.cms.futurecdn.net/CT9xCjqrhnPD4ivB6B8Hqe.jpg',
      type:'js',
      demo:'https://www.youtube.com/',
      repository:'https://github.com/'
    },
    {
      title:'Project 5',
      description:'A small description here',
      imgUrl:'https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg',
      type:'react',
      demo:'https://www.youtube.com/',
      repository:'https://github.com/'
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

  const [selectedItem, setSelectedItem] = useState('ALL');
  const [isOpen, setIsOpen] = useState(false);
  
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  

  return (
    <div className='projects_section'>
        <h2 id='projects' className='projects_section_header'>Projects</h2>
        <p className='projects_description' >Take a look at some of my recent projects. These examples demonstrate my ability to create dynamic and interactive user interfaces, as well as my skill in using React and other technologies to manage complex structures. With custom animations, responsive design, and seamless functionality, these projects highlight my growing proficiency in web development with these essential tools.</p>

        <div className="dropdown">
          <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
            {selectedItem} <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
          </div>
          {isOpen && (
            <div className="dropdown-list">
              <div className="dropdown-item" onClick={() => {handleItemClick('ALL'); setFilter('all');}}>ALL</div>
              <div className="dropdown-item" onClick={() => {handleItemClick('REACT'); setFilter('react');}}>REACT</div>
              <div className="dropdown-item" onClick={() => {handleItemClick('JS/CSS/HTML'); setFilter('js');}}>JS/CSS/HTML</div>
            </div>
          )}
        </div>

        <div className='projects_nav'>
          <div className={`projects_nav_button ${filter == 'all'? 'projects_nav_button--active': ''}`} onClick={()=>{setFilter('all')}}><p>ALL</p></div>
          <div className={`projects_nav_button ${filter == 'react'? 'projects_nav_button--active': ''}`} onClick={()=>{setFilter('react')}}><p>REACT</p></div>
          <div className={`projects_nav_button ${filter == 'js'? 'projects_nav_button--active': ''}`} onClick={()=>{setFilter('js')}}><p>JS/CSS/HTML</p></div>
        </div>
        <div className={(window.innerWidth > 1024 && projects.length<=2)?'projects_section_container2':'projects_section_container'}>
          {
            projects.map((project)=>{

              return <ProjectsCard key={project.title} title={project.title} description={project.description} imgUrl={project.imgUrl} demo={project.demo} repository={project.repository}/>;
            })
          }
        </div>
    </div>
  )
}

export default ProjectsSection