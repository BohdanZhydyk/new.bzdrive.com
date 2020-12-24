import React from 'react'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  body:{
    width:'100%'
  },
  paragraph:{
    textIndent:'3em',
    textAlign:'justify',
  }
})

export const About = ()=>{

  const classes = useStyles()

  return (
    <div className={classes.body}>
      <p className={classes.paragraph}>
        Tutaj bede informacja o stronie, o jej servisach itd...
      </p>
    </div>
  )
}