import React from 'react'
import { useSelector } from 'react-redux'
import ProjectList from './ProjectList'
import Tags from './Tags'

const MapProject = () => {
  const { project, issearch, projectsearch } = useSelector((state) => state.todo )
  console.log({pro: project, projectsearch: projectsearch, issearch: issearch })
  let newarr = []
  return (
    !project ? (<div> No project</div> ) :(
      <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 50%)' }}>
      {
       issearch ? (  projectsearch[0].map((item) => (
        <ProjectList key={item.id} item={item} />
    )) ) : (  project.map((item) => (
        <ProjectList key={item.id} item={item} />
    )) )
         
      }
     
     
      </div>
      <Tags />  
    </div>
    ) 
  )
}

export default MapProject