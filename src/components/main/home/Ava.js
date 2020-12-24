import React from 'react'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  ava:{
    width:'3em',
    height:'3em',
    margin:'0 1em',
    position:'relative',
  },
  imgAva:{
    width:'3em',
    position:'absolute',
    borderRadius:'50%',
  },
  imgOnline:{
    width:'3em',
    position:'absolute',
  },
})

export const Ava = ({data})=>{

  const classes = useStyles()

  return (
    <div className={classes.ava}>

      <img  className={classes.imgAva} alt="ava"
            src={`https://files.bzdrive.com/img/users/${data.user}.png`}
      />

      {
        data.online &&

        <img  className={classes.imgOnline} alt="online"
              src="https://files.bzdrive.com/img/users/ava/online.png"
        />

      }

    </div>
  )
}