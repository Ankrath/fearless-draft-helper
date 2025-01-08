import ChampionsList from '../features/champions/ChampionsList';

const Main = () => {
  return (
    <div
      className='bg-black w-8/12 mt-10 rounded-md h-[calc(100vh-8rem)] overflow-y-auto
      scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-black'
    >
      <ChampionsList />
    </div>
  );
};

export default Main;
