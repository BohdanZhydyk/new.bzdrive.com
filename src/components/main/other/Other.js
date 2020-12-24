import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({

})

export const Other = ()=>{
  
  const classes = useStyles()

  const [state, setState] = useState("")

  return (
    <div className="flex column">
      <div className="txtRed">ERROR: 404</div>
      <div>page not found</div>      
    </div>
  )
}