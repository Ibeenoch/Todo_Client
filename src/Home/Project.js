import { Typography } from '@material-ui/core'
import { Add, ArrowForward } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findProject, getProject } from '../feature/todoSlice'
import MapProject from './MapProject'

const Project = () => {
  const dispatch = useDispatch()
  const { issearch, projectsearch } = useSelector((state) => state.todo );

  const handleAllproject = () => {
      dispatch(getProject())
  }
  return (
    <div style={{ }}>
        <div style={{ border: '1px solid gray', height: '100%', display: 'flex', justifyContent:'space-between', alignItems:'center', padding:'30px' }}>
             <div onClick={handleAllproject} style={{ display: 'flex', justifyContent:'center', alignItems: 'center', cursor: 'pointer'}}>
              <Typography variant='h6'>Projects </Typography>
              <Add style={{ fontSize: '15px', color:'red' }} /> 
            </div>
            <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center', }}>
              <Typography variant='h9'>{issearch && projectsearch ? 'Searched project' : (<div onClick={handleAllproject}>All project</div> ) }</Typography>
              <ArrowForward style={{ fontSize: '10px', marginLeft: '5px' }} />
           </div>
        </div>
        <div >
            <MapProject />
        </div>
     
        
    </div>
  )
}

export default Project