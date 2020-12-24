import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { News } from './News.js'
import news from './news.json'


const useStyles = createUseStyles({
  home:{
    width:'100%',
  }
})

export const Home = ()=>{
  
  const classes = useStyles()

  const [state, setState] = useState(news)

  return (
    <div className={classes.home+" flex column"}>
      {
        state.news.map(
          (item, index)=> <News data={item} key={`newsNr${index}`} />
        )
      }
    </div>
  )
}