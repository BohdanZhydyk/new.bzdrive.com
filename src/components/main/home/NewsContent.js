import React from 'react'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  newsMain:{
    width:'95%',
    margin:'0.5em auto',
    padding:'0.5em 0',
    borderTop:'1px solid #f60',
    borderBottom:'1px solid #f60',
  }
})

export const NewsContent = ({content})=>{

  const classes = useStyles()

  return (
    <div className={classes.newsMain+" flex"}>
      {content}
    </div>
  )
}