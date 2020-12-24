import * as React from 'react'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  siteItem:{
    width:'95%',
    margin:'1.5em 0 0 0',
    padding:'0 0.5em',
    backgroundColor:'#222',
    borderRadius:'1em 1em 0 0'
  },
  siteLink:{
    width:'40%',
  },
  githubLink:{
    width:'55%',
    minWidth:'250px',
    padding:'0.2em',
    textDecoration:'none',
    borderRadius:'0.5em',
  },
  img:{
    width:'2em',
    margin:'0 0.5em 0 0',
  },
  "@media print":{
    img:{
      display:'none',
    },
    siteLink:{
      width:'35%',
    },
  }
})

export const InfoA = ({tag})=>{

  const classes = useStyles()

  return (
    <div className={classes.siteItem+" flex wrap"} >
      <a className={classes.siteLink+" flex start txtWht"} href={tag.site} target="_blank" rel="noreferrer">
        <img className={classes.img} src={`https://oldapi.bzdrive.com/img/CV/ico/web-site.png`} alt="site"/>
        <span>{tag.site}</span>
      </a>
      <a className={classes.githubLink+" flex start txtWht"} href={tag.github} target="_blank" rel="noreferrer">
        <img className={classes.img} src={`https://oldapi.bzdrive.com/img/CV/ico/GitHub.png`} alt="github"/>
        <span>{tag.github}</span>
      </a>
    </div>
  )
}