import React from 'react'
import { useSelector } from 'react-redux'
import SearchProjectList from './SearchProjectList';

const SearchProject = () => {
    const { projectsearch } = useSelector((state) => state.todo );
    console.log({SearchProjectmmap: projectsearch})
  return (
    !projectsearch ? (<div> No project found</div> ) :(
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {
            projectsearch.map((item) => (
                <SearchProjectList key={item.id} item={item} />
            ))
        }
        
 
        </div>

      ) 
  )
}

export default SearchProject