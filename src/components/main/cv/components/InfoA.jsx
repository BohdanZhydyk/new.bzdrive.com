import * as React from 'react'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  siteItem:{
    width:'95%',
    display:'flex',
    alignItems:'center',
    flexWrap:'wrap',
    margin:'1.5em 0 0 0',
    padding:'0 0.5em',
    backgroundColor:'#222',
    borderRadius:'1em 1em 0 0'
  },
  siteLink:{
    display:'flex',
    alignItems:'center',
    width:'40%',
    color:'#fff',
  },
  githubLink:{
    display:'flex',
    alignItems:'center',
    width:'55%',
    minWidth:'250px',
    color:'#fff',
    padding:'0.2em',
    textDecoration:'none',
    borderRadius:'0.5em',
  },
  img:{
    width:'2em',
    margin:'0 0.5em 0 0',
  }
})

export const InfoA = ({tag})=>{

  const classes = useStyles()

  return (
    <div className={classes.siteItem} >
      <a className={classes.siteLink} href={tag.site} target="_blank" rel="noreferrer">
        <img className={classes.img} src={`https://oldapi.bzdrive.com/img/CV/ico/web-site.png`} alt="site"/>
        <span>{tag.site}</span>
      </a>
      <a className={classes.githubLink} href={tag.github} target="_blank" rel="noreferrer">
        <img className={classes.img} src={`https://oldapi.bzdrive.com/img/CV/ico/GitHub.png`} alt="github"/>
        <span>{tag.github}</span>
      </a>
    </div>
  )
}