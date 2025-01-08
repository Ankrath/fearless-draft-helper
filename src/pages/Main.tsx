import ChampionSearch from '../features/champions/ChampionSearch';
import ChampionsList from '../features/champions/ChampionsList';

const Main = () => {
  return (
    <div
      className='bg-black w-7/12 mt-10 rounded h-[calc(100vh-8rem)] overflow-y-auto
      scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-black'
    >
      <div className='px-10 pt-6 pb-1'>
        <ChampionSearch />
      </div>
      <ChampionsList />
    </div>
  );
};

export default Main;
