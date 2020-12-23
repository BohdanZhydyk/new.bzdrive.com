import * as React from 'react'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  paragraph:{
    width:'100%',
    padding:'0.2em 1em',
    textIndent:'2em',
    textAlign:'justify'
  }
})

export const InfoParagraph = ({tag})=>{

  const classes = useStyles()

  return (
    <span className={classes.paragraph} >{tag.value}</span>
  )
}