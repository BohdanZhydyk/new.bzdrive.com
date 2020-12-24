import * as React from 'react'
import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles({
  footer:{
    margin:'0',
    textIndent:'3em',
    padding:'1em 3em',
    textAlign:'justify',
    border:'2px solid #999',
    borderRadius:'0.5em',
    boxShadow:'0 0 0.5em 0.2em #999',
    '&:hover':{
      boxShadow:'0 0 0.2em 0.1em #999',
    }
  },
  "@media print":{
    footer:{
      padding:'0.1em 2em',
    }
  }
})

export const Rodo = ({data})=>{

  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <p>{data.rodo1}</p>
      <p>{data.rodo2}</p>
    </footer>
  )
}