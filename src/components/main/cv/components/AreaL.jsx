import * as React from 'react'
import { createUseStyles } from 'react-jss'
import { Photo } from './Photo'
import { DataContainer } from './DataContainer'


const useStyles = createUseStyles({
  areaL:{
    width:'33%',
    padding:'0 1em',
  }
})

export const AreaL = ({photo, containers})=>{

  const classes = useStyles()

  return (
    <div className={classes.areaL}>
      <Photo data={photo} />
      {
        containers.map( (container, index) =>
          <DataContainer data={container} key={container.name + index} />
        )
      }
    </div>
  )
}