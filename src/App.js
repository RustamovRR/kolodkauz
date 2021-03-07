import { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import routes from "./routes";

import "./App.css";

function App() {
  return (
    <div className="App" >
      <Suspense fallback="loading...">
        <Layout>
          {
            routes.map(({ path, exact, component }, key) => (
              <Route {...{ key, exact, path, component }} />
            ))
          }
        </Layout>
      </Suspense>
    </div>
  );
}

export default App;
