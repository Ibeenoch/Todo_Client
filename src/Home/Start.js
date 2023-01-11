import React, { useEffect } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import RightSide from './RightSide'
import LeftSide from './LeftSide'
import { useDispatch } from 'react-redux'
import { findTags, getProject, getTodo } from '../feature/todoSlice'


const Start = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProject())
  }, [])

  useEffect(() => {
    dispatch(getTodo())
  }, [])
  
  useEffect(() => {
    dispatch(findTags())
  }, [])
  
    const classes = {
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: 20,
            textAlign: 'center',
            fontFamily: 'Roboto',
            marginTop:'70px',
        }
    }

        // xs takes 1vw, sm=6vw md = 4vw,

  return (
        <div style={classes.root}>
          <Grid style={classes.paper} container >
            <Grid item xs={12} sm={5} md={5} >
              <LeftSide />
            </Grid>
            <Grid item xs={12} sm={7} md={7}>
              <RightSide />
            </Grid>
          </Grid>
        </div>
  )
}

export default Start
