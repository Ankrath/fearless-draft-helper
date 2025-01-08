import Header from './components/Header';
import Main from './pages/Main';

const App = () => {
  return (
    <>
      <Header />
      <div className='flex justify-center'>
        <Main />
      </div>
    </>
  );
};

export default App;