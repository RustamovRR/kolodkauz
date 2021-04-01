import { Suspense } from "react";
import { Route } from "react-router-dom";
import { QueryClientProvider } from 'react-query'
import Layout from "./components/Layout/Layout";
import routes from "./routes";
import { queryClient } from './services/api'

import "./App.css";

function App() {
  return (
    <div className="App" >
      <Suspense fallback="loading...">
        <QueryClientProvider client={queryClient}>
          <Layout>
            {
              routes.map(({ path, exact, component }, key) => (
                <Route {...{ key, exact, path, component }} />
              ))
            }
          </Layout>
        </QueryClientProvider>
      </Suspense>
    </div >
  );
}

export default App;
