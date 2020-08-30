import React from "react";
import { Route, Switch} from "react-router-dom";
import "./App.css";
import Calculator from "./components/Calculator";
import Output from "./components/Output";
import Show from "./components/Show";

function App() {
  return (
    <div className="App">
      <Calculator />
      <Output />
      <Show />
      <Switch>
             <Route exact path="/" component = {()=> <div>main</div>}>
             {/* Component = {()=> <div>A</div>} */}
               {/* <Home /> */}
             </Route>
             <Route >
               404 not found
            </Route>
           <Route path="/dashboard">
             {/* <Dashboard /> */}
             </Route>
         </Switch>
    </div>
  );
}

export default App;

