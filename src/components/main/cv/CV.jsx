import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import { AreaL } from './components/AreaL'
import { AreaR } from './components/AreaR'
import { AreaBottom } from './components/AreaBottom'
import data from './data'


const useStyles = createUseStyles({
  cv:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'flex-start',
    flexWrap:'wrap',
  }
})

export const CV = ()=>{
  
  const classes = useStyles()

  const [state] = useState(data)

  return (
    <div className={classes.cv}>

      <AreaL photo={state.photo} containers={state.containers} />

      <AreaR informations={state.informations} />

      <AreaBottom rodo={state.rodo} />

    </div>
  )
}