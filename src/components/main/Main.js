import React from 'react'
import { createUseStyles } from 'react-jss'
import { Switch, Route } from 'react-router'
import { Home } from './home/Home'
import { CV } from './cv/CV'
import { Other } from './other/Other'


const useStyles = createUseStyles({
  main:{
    padding:'1em 0 2em 0'
  }
})

export const Main = ()=>{
  
  const classes = useStyles()

  return (
    <main className={classes.main+" flex"}>
      <Switch>
        <Route exact path="/" render={ ()=> <Home /> } />
        <Route exact path="/cv" render={ ()=> <CV /> } />
        <Route path="*" render={ ()=> <Other /> } />
      </Switch>
    </main>
  )
}