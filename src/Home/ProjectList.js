import React from 'react'
import { Typography } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'


const ProjectList = ({item}) => {
  var length = item.arr.length;

  console.log({checking: length})
  var findimg = item.arr
  console.log({findimg : findimg})

  var img = findimg.map((item) => item.selectedfile)
  
  
  console.log({img : img})
  return (
    <div>
         <div>
        <div style={{ border: '1px solid gray', paddingLeft: '20px' }}>
            <div style={{ display: 'flex',  alignItems: 'center', marginTop: '5px'}}>
            <div sx={{ margin: 0, padding: 0, fontSize: '5px'}} >
              {img.map((it)=> (<img src={it}  style={{ width: '20px', height: '20px', borderRadius: '50%'}} />))}
                
             
            </div>
            </div>
            <div style={{ fontWeight: 800,  }}>
                <Typography style={{ fontSize: '1.5rem' }} variant='h7'>{item.name}</Typography>
                <div style={{ color:'gray', display: 'flex',  alignItems: 'center' }}>
                    <p>{length} tasks open </p>
                    <ArrowForward style={{ fontSize: '12px' }} />
                </div>
                
            </div>
        </div>
       </div>
    </div>
  )
}

export default ProjectList
