import { Avatar, Button, TextField } from '@material-ui/core'
import { CalendarToday, PhotoCamera, PublicSharp, Send, Timelapse, TimeToLeave } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createContext } from 'react'
import { createProject, createTodo, getTodo, pushToProject } from '../feature/todoSlice'

const NewTodo = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const fileRef = useRef();
    const fileRefs = useRef()
    const timeRef = useRef();
    const dateRef = useRef();


    const [time, setTime] = useState()
    const [gettime, setgetTime] = useState()
    const [dates, setDate] = useState()
    const [photo, setPhoto] = useState({ selectedfile: ''})


    const [formdata, setFormdata] = useState({
        todo:'', title: '', tags: '', name: '',
      })

      const { todo, title, tags, name } = formdata

      const handlefiles = (e) => {
        e.preventDefault()
        const time = new Date().getSeconds()
        const random = Math.random()
        const id = `${time}${random}`

      
      const  projectdata = { name, time, dates, tags, title, gettime, todo, selectedfile, id}
       dispatch(pushToProject({projectdata}))
      }
   
      const handleimage = () => {
        fileRefs.current.click()
      }
      
        const handleChange = (e) => {
        const { name, value } = e.target
        setFormdata({...formdata, [name]:value })
        console.log(formdata)
        }

        const handlesubmits = (e) => {
          e.preventDefault();
          const projectdata = {name}
          dispatch(createProject({projectdata}))
          
    }

    const handlefile = (e) => {
      fileRef.current.click()
      console.log(time)
    }

    const handletime = (e) => {
        timeRef.current.click()
        console.log(gettime)
      }

      const handledate = (e) => {
        dateRef.current.click()
        console.log(dates)
      }

const { selectedfile } = photo

    const handleimgChange = (e) => {
       e.preventDefault();
        console.log(e.target.files)
        setPhoto({...photo, selectedfile: URL.createObjectURL(e.target.files[0])})
        const check = URL.createObjectURL(e.target.files[0]);
        console.log({photo: check})
    }
       console.log({photoz: photo.selectedfile})

      const handlesubmit = (e) => {
        e.preventDefault()
        const time = new Date().getSeconds()
        const random = Math.random()
        const id = `${time}${random}`

      const  tododata = {
        time,
        dates,
        tags,
        title,
        gettime,
        todo,
        selectedfile,
        id
        }
        console.log({tododata: tododata})

       
            dispatch(createTodo({tododata}))
            navigate('/')
  
      }
      
console.log({tags: tags})

          const gettodo = () => {
     dispatch(getTodo())
      }

     return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Create A Project</h1>
    </div>
    <div >
        <form  onSubmit={handlesubmits}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
    
                <div style={{ display: 'flex' }}>
                <TextField  variant='outlined' fullWidth label="what's your project name" name='name' value={formdata.name} onChange={handleChange} />              

     
                <Button  color='primary' variant='contained' type='submit'  >Create
                </Button>

                </div>
               
            </div>
        </form>
    </div>
</div>
           
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1>Create A Task</h1>
            </div>
            <div >
                <form  onSubmit={handlesubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex' }}>
                        <TextField  variant='outlined' fullWidth label="title" name='title' value={formdata.title} onChange={handleChange} />
                        <TextField  variant='outlined' fullWidth label="add tags" name='tags' value={formdata.tags} onChange={(e) => setFormdata({...formdata, tags: e.target.value.split(',| ') })} />
                        </div>
                        <div style={{ display: 'flex' }}>
                        <TextField  variant='outlined' fullWidth label="what's the name of the existing project you want to add it to" name='name' value={formdata.name} onChange={handleChange} />
                        <TextField  variant='outlined' fullWidth label="what's your plan" name='todo' value={formdata.todo} onChange={handleChange} />
                        </div>
                        <div style={{ display:'flex'}}>
                             <Button  color='secondary' variant='contained' startIcon={ <Timelapse />} onClick={handletime} >Start
                             <input style={{ background: 'inherit',  }} onBlur={(e) => setgetTime(e.target.value)} ref={timeRef}   type="time" />
                        </  Button>
                        <Button color='secondary' variant='contained' startIcon={ <Timelapse />} onClick={handlefile}>End
                             <input style={{ background: 'inherit',  }}  onBlur={(e) => setTime(e.target.value)} ref={fileRef} type="time" />
                        </Button>
                        <Button  color='secondary' variant='contained' startIcon={ <CalendarToday/>} onClick={handledate} >Choose date
                             <input style={{ background: 'inherit',  }}  onBlur={(e) => setDate(e.target.value)} ref={dateRef}  type="date" />
                        </Button>
                        <Button color='secondary' variant='contained' startIcon={ <PhotoCamera />} onClick={handleimage} >
                            Upload A Profile Photo
                         <input hidden accept='image/*' name='photo' onChange={handleimgChange}   type='file' ref={fileRefs} />
                        </Button>
                     
                          <Button  color='secondary' variant='contained' startIcon={ <Send />} onClick={handlefiles} > Add To Project
                          </Button>
                        

             
                        <Button  color='primary' variant='contained' type='submit'  >Create
                        </Button>

                        </div>
                       
                    </div>
                </form>
            </div>

            <Button  color='primary' variant='contained' onClick={gettodo} >get todo
                        </Button>
          
        </div>
    )
}

export default NewTodo
