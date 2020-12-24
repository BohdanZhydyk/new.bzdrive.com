import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'
import header from './header.json'


const useStyles = createUseStyles({
  header:{
    borderTop:'2px solid #aaa',
    borderBottom:'2px solid #aaa',
  },
  logo:{
    width:'5%',
  },
  imgBtn:{
    width:'3vw'
  },
  siteName:{
    width:'20%',
    fontSize:'200%',
    fontWeight:'bold',
  },
  menu:{
    width:'70%',
  },
  menuBtn:{
    margin:'0 0.5em',
    width:'8em',
    minHeight:'2em',
    textDecoration:'none',
    color:'#fff',
    border:'1px solid #666',
    borderRadius:'0.5em',
    '&:hover':{
      color:'#f60',
      borderColor:'#f605',
      backgroundColor:'#2225',
    },
  },
  clrOne:{
    color:'#fff',
  },
  clrTwo:{
    color:'#f60',
  },
  "@media print":{
    header:{
      display:'none',
    }
  }
})

export const Header = ()=>{
  
  const classes = useStyles()

  const [state, setState] = useState(header)

  let color = false

  return (
    <header className={classes.header+" flex"}>
      <div className={classes.logo+" flex"}>
        <img className={classes.imgBtn} src={state.logo}alt="logo" />
      </div>
      <div className={classes.siteName+" flex"}>
        {
          state.siteName.map( (text, index)=>{

            color = !color
            let style
            color ? style = classes.clrOne : style = classes.clrTwo

            return <span className={style} key={`sitename${index}`}>{text}</span>
          })
        }
      </div>
      <menu className={classes.menu+" flex"}>
        <NavLink exact to="/" className={classes.menuBtn+" flex"} >Home</NavLink>
        <NavLink exact to="/cv" className={classes.menuBtn+" flex"} >myCV</NavLink>
        <NavLink exact to="/contacts" className={classes.menuBtn+" flex"} >Contacts</NavLink>
        <NavLink exact to="/about" className={classes.menuBtn+" flex"} >About</NavLink>
      </menu>
    </header>
  )
}