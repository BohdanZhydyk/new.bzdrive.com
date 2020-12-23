import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import { AreaL } from './components/AreaL'
import { AreaR } from './components/AreaR'
import { AreaBottom } from './components/AreaBottom'
import data from './data'


const useStyles = createUseStyles({
  cv:{
    maxWidth:'1400px',
    margin:'0 auto',
    display:'flex',
    justifyContent:'center',
    alignItems:'flex-start',
    flexWrap:'wrap',
  },
  "@media only screen and (max-width: 767px)":{
    width:'100%',
  },
  "@media only screen and (max-width: 767px) and (orientation: portrait)":{},
  "@media print":{}
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