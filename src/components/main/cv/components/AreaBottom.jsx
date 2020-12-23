import * as React from 'react'
import { createUseStyles } from 'react-jss'
import { Rodo } from './Rodo'


const useStyles = createUseStyles({
  areaBottom:{
    width:'95%',
    padding:'1em',
  }
})

export const AreaBottom = ({rodo})=>{

  const classes = useStyles()

  return (
    <div className={classes.areaBottom}>
      <Rodo data={rodo}/>
    </div>
  )
}