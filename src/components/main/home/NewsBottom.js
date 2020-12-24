import React from 'react'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  newsFooter:{
    padding:'0.5em 1em',
    backgroundColor:'#111',
    borderRadius:'0.5em',
  }
})

export const NewsBottom = ({bottom})=>{

  const classes = useStyles()

  return (
    <div className={classes.newsFooter+" flex end"}>
      <span>{bottom.unix}</span>
    </div>
  )
}