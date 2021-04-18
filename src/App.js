import { Suspense } from "react";
import { Route } from "react-router-dom";
import { QueryClientProvider } from 'react-query'
import routes from "./routes";
import { queryClient } from './services/api'
import "./App.css";

function App() {
  return (
    <div className="App" >
      <Suspense fallback="App..." >
        <QueryClientProvider client={queryClient}>
          {
            routes.map(({ path, exact, component }, key) => (
              <Route {...{ key, exact, path, component }} />
            ))
          }
        </QueryClientProvider>
      </Suspense>
    </div>
  );
}

export default App;
