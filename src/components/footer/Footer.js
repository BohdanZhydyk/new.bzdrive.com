import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import footer from './footer.json'


const useStyles = createUseStyles({
  footer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'1em 0',
    borderTop:'2px solid #aaa',
    borderBottom:'2px solid #aaa',
  },
  "@media print":{
    footer:{
      display:'none',
    }
  }
})

export const Footer = ()=>{
  
  const classes = useStyles()

  const [state, setState] = useState(footer)

  return (
    <footer className={classes.footer}>
      {state.footer}
    </footer>
  )
}