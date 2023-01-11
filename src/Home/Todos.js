import { Avatar, IconButton } from '@material-ui/core'
import { Delete, Edit, MoreHoriz } from '@material-ui/icons'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteTodo, getTodo } from '../feature/todoSlice'
import Calender from './Calender'

const Todos = ({item}) => {
    const dispatch = useDispatch()
    const { isdeleted } = useSelector((state) => state.todo )
    const [show, setshow] = useState({ hit: true, run: false})
 
  const  handleDelete = () => {
    dispatch(deleteTodo({id: item.id}))
  }
const { hit, run }  = show
  const handleshow = () => {
    setshow({...show, hit:!hit, run: !run})
    console.log({hit, run})
  }

  if(isdeleted){
    dispatch(getTodo())
  }
    

    return (
        <div>
             <div  style={{ display: 'flex', justifyContent:'space-between', alignItems: 'center', height:'100%'}} >
                <div style={{ display: 'flex', justifyContent:'space-between', alignItems: 'center' }}>
                    <div>
                    <input type="radio" />
                    </div>
                    <div style={{ marginLeft: '10px'}}>
                    <p>{item.todo}</p>
                    </div>
                </div>
                
                <div  style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', alignItems: 'center' }}>
                    <Avatar src={item.selectedfile} style={{ marginRight: '20px' }} />
                    <div onClick={handleshow}>
                        <div onClick={handleshow} style={{ display: ( hit ? 'flex' : 'none' ) }}>
                           <MoreHoriz   style={{ marginRight: '10px' }} />  
                        </div>
                        <div style={{ display: ( run ? 'flex' : 'none' ), justifyContent: 'space-between', cursor: 'pointer', alignItems: 'center' }}>
                           <IconButton  onClick={handleDelete}><Delete /> </IconButton>
                      </div>
                    </div>
                    <div  style={{ marginRight: '40px' }} >{item.gettime}</div>
                    <div  style={{ marginRight: '40px' }} >{item.gettime}</div>
                </div>

              <Calender />
        </div>
       

        </div>
       
    )
}

export default Todos
