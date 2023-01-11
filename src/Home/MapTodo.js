import React from 'react'
import { useSelector } from 'react-redux'
import TimeLine from './TimeLine'
import Todos from './Todos'
import Todoz from './Todoz'

const MapTodo = () => {
    const { todo, todosearch, issearch } = useSelector((state) => state.todo)

    console.log({maptodosearch: todosearch})
    return (
      !todo ? (<div> No Todo</div> ) :(
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {  issearch ? ( !todosearch ? (<div>no todo found</div>) : ( 
          todosearch.map((item) => (
            <Todoz key={item.id} item={item} />
          ))
        ) ) : ( todo.map((item) => (
                <Todos key={item.id} item={item} />
            )))
           
        }
        <div style={{ marginTop: '2rem' }}>
            <TimeLine />
        </div>
             
 
        </div>

      ) 
    )
}

export default MapTodo
