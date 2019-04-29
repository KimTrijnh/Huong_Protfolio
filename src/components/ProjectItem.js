import React from 'react'
import './Modals.css'

const ProjectItem = (props) =>
{
  const title = props.project.name.split('-').join(' ').slice(7).toUpperCase()
  return(
  <div className="project-item card">
  <div className="card-header">
  <a href={ props.project.url} className="text-white">
  <h4 className="title">{ title }</h4>
  </a>
  </div>
<div className="card-body">
<a href={ props.project.url} target="blank">
  <button className="btn btn-primary btn-sm">Live Demo</button>
  </a>
  <a href={props.project.build_settings.repo_url} target="blank"> 
  <button className="ml-2 btn btn-success btn-sm">Github Repo</button>
  </a>  
</div>
  </div>
)}

export default ProjectItem