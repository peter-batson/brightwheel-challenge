
import RepositoryList from './RepositoryList';
import { QueryClient, QueryClientProvider } from 'react-query'
 

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
      <RepositoryList />
    </QueryClientProvider>
  );
}

export default App;
