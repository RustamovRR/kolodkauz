import { Suspense, useContext } from "react";
import { Route } from "react-router-dom";
import routes from "./routes";
import { ContextRoot } from "./contexts";
import { LinearProgress } from '@material-ui/core'
import { Toaster } from "react-hot-toast";

import "./App.css";

function App() {
  const state = useContext(ContextRoot)
  const { openTabList } = state.variables


  return (
    <div className={openTabList ? "backgroundApp" : "App"}>
      <Suspense fallback={<LinearProgress />} >
        <Toaster position="top-right" />
        {
          routes.map(({ path, exact, component }, key) => (
            <Route {...{ key, exact, path, component }} />
          ))
        }
      </Suspense>
    </div>
  );
}

export default App;
