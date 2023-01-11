import { Typography } from '@material-ui/core'
import React from 'react'

const Calender = () => {
  return (
    <div>
        <div style={{  }}>
            <div style={{ display: 'flex', gap: '15px', marginRight: '40px', justifyContent: 'center', alignItems: 'center'}}>
            <div>
                <p style={{ fontSize: '3rem', fontWeight: 500, fontFamily: 'roboto'}} ><strong>14  </strong> </p>
            </div>
            <div >
                <div >
                    <p style={{ color: 'gray', opacity: '0.5'}}><small>Today</small> </p>
                    <p><strong>Mon</strong></p>
                </div>
            </div>

            </div>
            
            <div style={{ marginLeft: '56px', background: 'gray', width: '80%', borderTop: '1px solid gray', opacity: '0.4', marginTop: '20px' }}></div>
        </div>
    </div>
  )
}

export default Calender