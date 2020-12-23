import * as React from 'react'
import { createUseStyles } from 'react-jss'
import { InfoContainer } from './InfoContainer'


const useStyles = createUseStyles({
  areaR:{
    width:'60%',
    padding:'0 1em',
  }
})

export const AreaR = ({informations})=>{

  const classes = useStyles()

  return (
    <div className={classes.areaR}>
      {
        informations.map( (info, index)=>
          <InfoContainer data={info} key={info.name + index} />
        )
      }
    </div>
  )
}