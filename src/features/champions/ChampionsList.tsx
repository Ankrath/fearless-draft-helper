import ChampionItem from './ChampionItem';
import { champions } from '../../data';

const ChampionsList = () => {
  return (
    <div className='grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 gap-y-2 p-4'>
      {champions.map(champion => (
        <ChampionItem key={champion.id} champion={champion} />
      ))}
    </div>
  );
};

export default ChampionsList;
