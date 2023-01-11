import React from 'react'
import Todos from './Todos'

const Todoz = ({item}) => {
    return (
       item.map((item) => (
        <Todos key={item.id} item={item} />
       ) )
    )
}

export default Todoz
