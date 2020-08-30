import React from "react";
import { Route, Switch} from "react-router-dom";
import "./App.css";
import Calculator from "./components/Calculator";
import Output from "./components/Output";
import Show from "./components/Show";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import {Paper} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import background from "./images/background.jpg";


const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${background})`,
    height: "100vh",
    color: "CornflowerBlue",
  },
});

//export default useStyles3;




function App() {
  const classes = useStyles();
  return (
     
    <main className="App"  >
      <Paper className={classes.root}> 
      <Calculator />
      <Output />
      <Show />
      <Header />
      <Switch>
             <Route exact path="/" component = {()=> <div>main</div>}>
             {/* Component = {()=> <div>A</div>} */}
               {/* <Home /> */}
             </Route>
              <Route path="/home" component = {()=> <Home>home</Home>}>
             </Route>

             <Route >
               404 not found
            </Route>
         </Switch>
         </Paper>
    </main>
  );
}

export default App;

