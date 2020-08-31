import React from "react";
import { Route, Switch} from "react-router-dom";
import "./App.css";
// import Calculator from "./components/Calculator";
// import Output from "./components/Output";
// import Show from "./components/Show";
import {About, Contacts, JoinUs, MovieReviews, Home} from "./pages";
import Header from "./components/Header";
import {Paper} from "@material-ui/core";
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
  const routes = [{path:"/home", name: "Home"}, 
                {path:"/about", name: "About"},
                {path:"/contacts", name: "Contacts"},
                {path:"/joinus", name: "JoinUs"},
                {path:"/moviereviews", name: "MovieReviews"}];
  return (
    <main className="App"  >
      <Paper className={classes.root}> 
      {/* <Calculator />
      <Output />
      <Show /> */}
      <Header routes={routes}/>
      <Switch>
             <Route exact path="/" component = {()=> <div>main</div>}>
             </Route>
             {routes.map((elem)=>(
               <Route exact path="$`{elem.path}`" component = {elem.name} />
             ))}
             {/* <Route exact path="/" component = {()=> <Home />}>
             </Route> */}
                <Route exact path="/home" component = {Home} />
                <Route exact path="/about" component = {About} />
                <Route exact path="/contacts" component = {Contacts} />
                <Route exact path="/joinus" component = {JoinUs} />
                <Route exact path="/moviereviews" component = {MovieReviews} />

             <Route >
               404 not found
            </Route>
         </Switch>
         </Paper>
    </main>
  );
}

export default App;

