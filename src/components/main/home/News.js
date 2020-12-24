import React from 'react'
import { createUseStyles } from 'react-jss'
import { NewsTop } from './NewsTop'
import { NewsContent } from './NewsContent'
import { NewsBottom } from './NewsBottom'


const useStyles = createUseStyles({
  news:{
    width:'95%',
    margin:'0.5em 0',
    backgroundColor:'#222',
    border:'1px solid #999',
    borderRadius:'0.5em',
  }
})

export const News = ({data})=>{

  const classes = useStyles()

  return (
    <div className={classes.news}>

      <NewsTop top={data.top} />

      <NewsContent content={data.content} />

      <NewsBottom bottom={data.bottom} />

    </div>
  )
}