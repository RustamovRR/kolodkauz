import { Suspense, useContext } from "react";
import { Route } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import { ContextRoot } from "./contexts";

function App() {
  const { openTabList } = useContext(ContextRoot)


  return (
    <div className={openTabList ? "backgroundApp" : "App"}>
      <Suspense fallback="App..." >
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
