import React from 'react'
import { useSelector } from 'react-redux'
import ProjectList from './ProjectList'
import TagList from './TagList'

const MapTags = () => {
    const { tags, issearch, tagsearch } = useSelector((state) => state.todo )
  console.log({protagsmap: tags });   console.log({tagsmap: tagsearch })
  return (
    !tags ? (<div> No Tag</div> ) :(
      <div>
      <div style={{  border: '1px solid gray', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
      {
       issearch ? ( !tagsearch ? (<div>no tag found</div>) : (tagsearch.map((item) => (
        <TagList key={item.id} item={item} />
    ))) ) : (  tags.map((item) => (
        <TagList key={item.id} item={item} />
    )) )
         
      }
     
     
      </div>
 
    </div>
    ) 
  )
}

export default MapTags
