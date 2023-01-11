import React from 'react';
import './App.css';

const TagList = ({ item }) => {
    console.log({tagsearchitem : item})
    var colors = ['blue', 'red', 'yellow', 'orange', 'green','purple', 'aqua', 'blueviolet', 'navy', 'cadetblue', 'crimson', 'magenta', 'maroon' ]
   
    var pickcolor = () => {
        let arrlength = colors.length
        let randomgenerator = Math.floor(Math.random() * arrlength)
        var colorgenerated =  colors[randomgenerator]
        colors.splice(randomgenerator, 1)
        return colorgenerated
    }
   

    return (
        <div style={{ display: 'grid',   }}>
             <div style={{  }}>
     
     <div className='picker' style={{ height: 'auto', width: 'max-content', padding: '5px', backgroundColor: (pickcolor()), margin: '10px'}}>
        {typeof item === 'object' && item.join(' ').replace(item, `#${item}`).replace(/\s/, ' #')}
     </div>

 
 </div>
        </div>
    )
}

export default TagList
