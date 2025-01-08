import { useState } from 'react';
import { getChampionImageUrl } from '../../data';

type ChampionItemProps = {
  champion: {
    name: string;
  };
};

const ChampionItem = ({ champion }: ChampionItemProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='flex flex-col items-center gap-1'>
      <div className='relative w-16 h-16 md:w-24 md:h-24'>
        {isLoading && (
          <div className='absolute inset-0 bg-gray-600 rounded-lg animate-pulse' />
        )}

        <img
          src={getChampionImageUrl(champion.name)}
          alt={champion.name}
          className={`w-full h-full rounded-lg transition-opacity duration-200 cursor-pointer ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <p>{champion.name}</p>
    </div>
  );
};

export default ChampionItem;
