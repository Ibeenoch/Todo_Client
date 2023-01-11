import { IconButton, Typography } from '@material-ui/core'
import { Add, ArrowForward, Star } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { findTags } from '../feature/todoSlice'
import MapTags from './MapTags'

const Tags = () => {
  const dispatch = useDispatch();

  const handletag = () => {
    dispatch(findTags())
  }
  return (
    <div style={{ }}>
    <div style={{ border: '1px solid gray', display: 'flex', justifyContent:'space-between', alignItems:'center', padding:'30px' }}>
         <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}>
          <Typography variant='h6'>Tags </Typography>
          <Star style={{ fontSize: '15px', color:'green' }} /> 
        </div>
        <div onClick={handletag} >
          <Typography variant='h9'>All tags</Typography>
          <IconButton>
            <ArrowForward style={{ fontSize: '10px', marginLeft: '5px' }} />
          </IconButton>
       </div>
    </div>
   <div>
   <MapTags />
   </div>
    
</div>
  )
}

export default Tags