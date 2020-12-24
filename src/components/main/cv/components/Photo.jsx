import * as React from 'react'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  photo:{
    margin:'1em 0',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    border:'1px solid #999',
    borderRadius:'0.5em',
    boxShadow:'0 0 0.5em 0.2em #999',
    '&:hover':{
      boxShadow:'0 0 0.2em 0.1em #999',
    }
  },
  author:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    fontSize:'150%',
    fontWeight:'bold',
    padding:'0.5em 0 0 0'
  },
  text:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    fontSize:'120%',
  },
  img:{
    width:'25em',
    minWidth:'200px',
    margin:'1em 0',
    borderRadius:'0.5em'
  },
  "@media print":{
    text:{
      color:'#333',
    },
    img:{
      width:'15em',
      minWidth:'100px',
      margin:'1em 0',
      borderRadius:'0.5em'
    },
  }
})

export const Photo = ({ data: {author, text, img} })=>{

  const classes = useStyles()

  return (
    <div className={classes.photo}>
      <div className={classes.author}>{author}</div>
      <div className={classes.text+" txtYlw"}>{text}</div>
      <img className={classes.img} src={img} alt="ava" />
    </div>
  )
}