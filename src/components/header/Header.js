import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'
import header from './header.json'


const useStyles = createUseStyles({
  header:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    // padding:'1vw 0',
    borderTop:'2px solid #aaa',
    borderBottom:'2px solid #aaa',
  },
  logo:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'10%',
  },
  siteName:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'30%',
    fontSize:'200%',
    fontWeight:'bold',
  },
  menu:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'60%',
  },
  menuBtn:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
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
    textShadow:'0.1em 0.1em 0.2em #f60',
  },
  clrTwo:{
    color:'#f60',
    textShadow:'0.1em 0.1em 0.2em #777',
  },
})

export const Header = ()=>{
  
  const classes = useStyles()

  const [state, setState] = useState(header)

  let color = false

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        {state.logo}
      </div>
      <div className={classes.siteName}>
        {
          state.siteName.map( (text, index)=>{

            color = !color
            let style
            color ? style = classes.clrOne : style = classes.clrTwo

            return <span className={style} key={`sitename${index}`}>{text}</span>
          })
        }
      </div>
      <menu className={classes.menu}>
        <NavLink exact to="/" className={classes.menuBtn} >home</NavLink>
        <NavLink exact to="/cv" className={classes.menuBtn} >cv</NavLink>
        <NavLink exact to="/contacts" className={classes.menuBtn} >contacts</NavLink>
        <NavLink exact to="/about" className={classes.menuBtn} >about</NavLink>
      </menu>
    </header>
  )
}