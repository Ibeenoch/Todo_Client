import { Box } from '@material-ui/core'
import React from 'react'
import Project from './Project'
import Tags from './Tags'

const LeftSide = () => {
    return (
        <div>
            <Box sx={{}}>
                <div >
                    <Project />
                </div>

            </Box>
        </div>
    )
}

export default LeftSide
