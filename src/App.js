
import RepositoryList from './RepositoryList';
import Repo from './Repo';
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
 

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      }
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path="/">
            <RepositoryList />
          </Route>
          <Route path="/repo/:owner/:name">
              <Repo />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
