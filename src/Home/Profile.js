import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core'
import { Delete, Edit, Person } from '@material-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    const deleteProfile = () => {
        window.confirm('Are you sre you want to delete Your profile')
    }

    const editProfile = () => {
        navigate('/register')
    }
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '70px', width:'100vw'}}>
        <Typography  variant='h6'>Profile</Typography>
        <List style={{ width: '50vw' }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <Person />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='John Noe' secondary='johnnoe@gmail.com' />
                <ListItemSecondaryAction >
                    <IconButton onClick={editProfile} size='small'>
                       <Edit/>  
                    </IconButton>
                    <IconButton onClick={deleteProfile} size='small'>
                      <Delete />    
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemText primary={'joined: ' + (new Date().toDateString())} />
            </ListItem>
            <ListItem>
                <ListItemText primary='about me' />
            </ListItem>
        </List>
    </Box>
  )
}

export default Profile