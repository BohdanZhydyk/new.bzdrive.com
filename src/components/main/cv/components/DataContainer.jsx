import * as React from 'react'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  data:{
    margin:'1em 0',
    padding:'0.5em 0',
    border:'1px solid #999',
    borderRadius:'0.5em',
    boxShadow:'0 0 0.5em 0.2em #999',
    '&:hover':{
      boxShadow:'0 0 0.2em 0.1em #999',
    }
  },
  name:{
    color:'#f60',
    width:'90%',
    margin:'0.5em 0',
    padding:'0 0.5em',
    fontWeight:'bold',
    borderBottom:'2px dashed #f60',
  },
  line:{
    width:'100%',
    display:'flex',
    alignItems:'center',
    flexWrap:'wrap',
  },
  img:{
    width:'1.5em',
    minWidth:'20px',
    margin:'0.2em 1em',
    padding:'0.5em',
    borderRadius:'50%',
    backgroundColor:'#222'
  },
  key:{
    width:'20%',
    color:'#fd0',
  },
  value:{
    color:'#fff',
  },
  "@media print":{
    img:{
      display:'none',
    },
    key:{
      padding:'0 0 0 0.5em',
      color:'#000',
    },
    value:{
      color:'#111',
      textDecoration:'none',
    },
  }
})

export const DataContainer = ({ data: {name, lines} })=>{

  const classes = useStyles()

  return (
    <div className={classes.data+" flex wrap"}>
      <div className={classes.name}>{name}</div>
      {
        lines.map( (line, index)=>{
          return (
            <div className={classes.line} key={line.key + index}>
              <img className={classes.img} src={`https://oldapi.bzdrive.com/img/CV/ico/${line.key}.png`} alt="img"/>
              <span className={classes.key}>{line.key}</span>
              {
                line.link
                ?
                <a className={classes.value} href={line.link} target="_blank" rel="noreferrer">{line.value}</a>
                :
                <span className={classes.value}>{line.value}</span>
              }
            </div>
          )
        })
      }
    </div>
  )
}