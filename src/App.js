import { Suspense } from "react";
import { Route } from "react-router-dom";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App" >
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
