import Router from 'router/Router';
import Providers from 'providers/Index';

const App = (): JSX.Element => {
  return (
    <Providers>
      <Router/>
    </Providers>
  );
};

export default App;
