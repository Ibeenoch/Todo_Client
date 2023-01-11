import React from 'react'
//import { Avatar, AvatarGroup } from '@mui/material'
import { Typography } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'


const SearchProjectList = ({item}) => {
  return (
    <div>
    <div>
   <div style={{ border: '1px solid gray', display: 'flex', justifyContent: 'flex', alignItems: 'center', flexDirection: 'column' }}>
       <div style={{ display: 'flex', justifyContent: 'flex', alignItems: 'center', padding: '10px' }}>
       <div sx={{ margin: 0, padding: 0, fontSize: '5px'}} >
           <img src={item.selectedfile}  style={{ maxWidth: '100px', width: 'auto', height: 'auto'}} />
           <img src={item.selectedfile} style={{ maxWidth: '100px', width: 'auto', height: 'auto'}} />
           <img src={item.selectedfile}  style={{ maxWidth: '100px', width: 'auto', height: 'auto'}}/>
       </div>
       </div>
       <div style={{ fontWeight: 800,  padding: '10px' }}>
           <Typography variant='h7'>{item.title}</Typography>
           <div style={{ color:'gray', display: 'flex',  alignItems: 'center' }}>
               <p>6 tasks open </p>
               <ArrowForward style={{ fontSize: '12px' }} />
           </div>
           
       </div>
   </div>
  </div>
</div>
  )
}

export default SearchProjectList