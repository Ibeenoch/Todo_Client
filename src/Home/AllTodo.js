import React from 'react'
import { Avatar, Box, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Paper, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowForward } from '@material-ui/icons';

const AllTodo = ({person}) => {
   const {user} = useSelector((state)=> state.user )
  const navigate = useNavigate();
  console.log({personmap: person.name})
  console.log({user: user})
  const toProfile = () => {
    
    navigate('/profile')
  }

    return (
        <Box >
            <Grid container >
                <Grid item xs={12} >
                    <Typography style={{ display: 'flex', justifyContent:'space-around', alignItems: 'center'}} variant='h6'> All Users</Typography>
                    <div style={{ display: 'flex', justifyContent:'space-around', alignItems: 'center'}}>
                    <div style={{ display: 'flex',  alignItems:'center'}}>
                       <Avatar src={person.photo.url} />
                       <Typography style={{ marginLeft: '1rem'}} variant='h8' >{person.name}</Typography> 
                    </div>
                    <div onClick={toProfile} style={{ cursor: 'pointer'}}>
                     <ArrowForward />
                    </div>
                    </div>
                </Grid>AllTodo
                
            </Grid>
        </Box>
    )
}

export default AllTodo
