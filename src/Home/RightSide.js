import { Grid } from '@material-ui/core'
import React from 'react'
import TimeLine from './TimeLine'
import Todo from './Todo'

const RightSide = () => {
    return (
        <div style={{ height: '100%'}}>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column'  }}>
                <div  >
                    <Todo />
                </div>

            </div>
        </div>
    )
}

export default RightSide
