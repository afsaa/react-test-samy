import Header from '@/components/Header';
import { SearchProvider } from '@/context';
import Home from '../Home';

function App(): JSX.Element {
  return (
    <SearchProvider>
      <Header />
      <Home />
    </SearchProvider>
  );
}

export default App;
