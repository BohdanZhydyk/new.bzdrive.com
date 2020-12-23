import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
// import main from './main.json'


const useStyles = createUseStyles({
  main:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'1em 0 2em 0'
  }
})

export const Home = ()=>{
  
  const classes = useStyles()

  const [state, setState] = useState("")

  return (
    <>
      HOME
    </>
  )
}