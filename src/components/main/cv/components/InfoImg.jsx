import * as React from 'react'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  line:{
    width:'100%',
    padding:'0 1em',
  },
  imgContainer:{
    width:'4em',
    minWidth:'50px',
    margin:'0.2em',
    padding:'0.2em 0',
    fontSize:'70%',
    border:'1px solid #999',
    borderRadius:'0.5em',
  },
  img:{
    width:'1.5em',
    minWidth:'30px',
    padding:'0.5em',
    borderRadius:'50%',
    backgroundColor:'#222'
  },
  "@media print":{
    img:{
      display:'none',
    }
  }
})

export const InfoImg = ({tag})=>{

  const classes = useStyles()

  return (
    <div className={classes.line+" flex wrap start"}>
      {
        tag.value.map( (image, key)=>{
          return (
            <div className={classes.imgContainer+" flex column"} key={tag.key + key}>
              <img className={classes.img} src={`https://oldapi.bzdrive.com/img/CV/ico/${image}.png`} alt="img"/>
              <span>{image}</span>
            </div>
          )
        })
      }
    </div>
  )
}