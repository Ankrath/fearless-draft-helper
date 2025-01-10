import { SpeedInsights } from '@vercel/speed-insights/react';

import Main from './pages/Main';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <div className='flex justify-center'>
        <Main />

        <SpeedInsights />
      </div>
    </>
  );
};

export default App;
