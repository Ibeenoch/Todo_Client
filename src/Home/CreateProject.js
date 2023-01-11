import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProject } from '../feature/todoSlice'

const CreateProject = () => {
    const dispatch = useDispatch()
    const [formdata, setFormdata] = useState({
        name: '',
      })
      const { name } = formdata

    const handlesubmits = (e) => {
          e.preventDefault();
          const projectdata = {name}
          dispatch(createProject({projectdata}))
          
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormdata({...formdata, [name]:value })
        console.log(formdata)
    }
  return (
   <div></div>
  )
}

export default CreateProject