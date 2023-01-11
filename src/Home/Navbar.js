import { AppBar, Avatar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Add, Alarm, SearchOutlined, Settings } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { findProject, findtodo, sesrchTags } from '../feature/todoSlice'
import logo from '../image/logo.jpg'
import profilepics from '../image/profilepics.png'

const Navbar = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const handlesearch = () => {
        return Promise.all[dispatch(findProject({text})), dispatch(sesrchTags({text})), dispatch(findtodo({text}))]       
    }

    const handlechange = (e) => {
        setText(e.target.value)
        console.log(text)
    }
  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', background: 'white', padding: '15px', color: 'black', }}> 
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div >
                <Link to='/'>
                <img src={logo} alt="logo"  style={{ maxWidth: '100px', height: 'auto', borderRadius: '50%' }}/>
                </Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '20px'}}>
                <IconButton onClick={handlesearch}><SearchOutlined   style={{ fontSize:'15px' }}/></IconButton> 
                <input onChange={handlechange} name='text' value={text} style={{ border: 'none', background: 'white',}} type='text' placeholder='search project or tags' />
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
            <Typography variant='h7'>Project and Tags</Typography>
            <Typography style={{ marginLeft: '15px'}} variant='h7'>Member</Typography>
            <Typography style={{ marginLeft: '15px'}} variant='h7'>Performance</Typography>
            <Typography style={{ marginLeft: '15px'}} variant='h7'>Profile</Typography>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant='h7'>Invite people </Typography>
                <IconButton  style={{ marginLeft: '-10px'}}><Add  style={{ fontSize:'17px' }} /> </IconButton>
            </div>
        
        <IconButton  style={{ marginLeft: '15px'}}><Settings  style={{ fontSize:'18px' }} /> </IconButton>
        <IconButton style={{ marginLeft: '15px'}}><Alarm style={{ fontSize:'18px' }} /> </IconButton>
        <Avatar src={profilepics} style={{ marginLeft: '15px'}} />
        </div>

        </div>
    </div>
  )
}

export default Navbar