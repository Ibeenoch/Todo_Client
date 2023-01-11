import { Avatar, Box, IconButton, Menu, Typography } from '@material-ui/core'
import { Add, ListAltRounded, MenuBook, MoreHoriz } from '@material-ui/icons'
import React from 'react'
import Calender from './Calender'
import moment from 'moment';
import { getTodo } from './NewTodo'
import MapTodo from './MapTodo';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MapTags from './MapTags';

const Todo = () => {
    const navigate = useNavigate()
   const handlepage = () => {
      navigate('/todo')
   }
   
const { issearch, todosearch } = useSelector((state) => state.todo)
   

    return (
        <div style={{ border: '0.1px solid gray', height:'70wh', }}>
            <div style={{ display: 'flex', justifyContent:'space-between', alignItems: 'center' }}>
                <Typography variant='h6'>{ issearch && todosearch ? 'Search tasks filter' : 'All Tasks For Today' }</Typography>
                <div style={{ display: 'flex', justifyContent:'center', marginLeft: '75px', alignItems: 'center',  cursor: 'pointer' }}>
                    <Typography  variant='h8'>New task  </Typography>
                    <IconButton onClick={handlepage}>
                        <Add  style={{ 'fontSize': '!0px'}} />
                    </IconButton>
                   
                    <ListAltRounded style={{ 'fontSize': '!0px'}} />
                    <MenuBook style={{ 'fontSize': '10px'}} />
                </div>
                <div>
                    <Typography style={{ marginRight: '20px'}} variant='h6'>Calendar</Typography>
                </div>
            </div>

            <div>
                <div style={{ width: 'max-content', margin: '5px', height: 'auto', padding: '5px', borderRadius: '5px' }}>
                    <MapTags />
                </div>

            </div>
            
            <div style={{ display: 'flex', padding: '5px', justifyContent:'space-between', alignItems: 'center'}}>
            <MapTodo />                
            </div>
        </div>
    )
}

export default Todo
