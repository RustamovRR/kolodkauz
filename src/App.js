import { Suspense, useContext } from "react";
import { Route } from "react-router-dom";
import routes from "./routes";
import { ContextRoot } from "./contexts";
import { LinearProgress } from '@material-ui/core'

import "./App.css";

function App() {
  const { openTabList } = useContext(ContextRoot)


  return (
    <div className={openTabList ? "backgroundApp" : "App"}>
      <Suspense fallback={<LinearProgress />} >
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
