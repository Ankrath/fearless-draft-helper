import Main from './pages/Main';
import Header from './components/Header';

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
