import React from 'react'
import { createUseStyles } from 'react-jss'
import { Ava } from './Ava'


const useStyles = createUseStyles({
  newsTop:{
    padding:'0.5em',
    borderRadius:'0.5em',
  },
  newsInfo:{
    fontSize:'80%',
  },
  theme:{
    margin:'0 2em'
  }
})

export const NewsTop = ({top})=>{

  const classes = useStyles()

  return (
    <div className={classes.newsTop+" flex start"}>
      {/* <div>{`id: ${top.id}`}</div> */}
      {/* <span>{`lng: ${top.lng}`}</span> */}

      <Ava data={top.author} />

      <div className={classes.newsInfo}>
        <div>{top.author.user}</div>
        <div>{top.dateTime}</div>
      </div>

      <div className={classes.theme}>{top.theme}</div>

    </div>
  )
}