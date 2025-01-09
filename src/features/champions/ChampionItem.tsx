import { useState, useEffect } from 'react';
import { getChampionImageUrl } from '../../data';

const loadedImages = new Set<string>();

type ChampionItemProps = {
  champion: {
    id: number;
    name: string;
  };
  isPicked: boolean;
  onPick: () => void;
};

const ChampionItem = ({ champion, isPicked, onPick }: ChampionItemProps) => {
  const [isLoading, setIsLoading] = useState(!loadedImages.has(champion.name));

  useEffect(() => {
    if (loadedImages.has(champion.name)) {
      setIsLoading(false);
    }
  }, [champion.name]);

  const handleImageLoad = () => {
    loadedImages.add(champion.name);
    setIsLoading(false);
  };

  return (
    <div className='flex flex-col items-center gap-1' onClick={onPick}>
      <div className='relative w-16 h-16 md:w-24 md:h-24'>
        {isLoading && (
          <div className='absolute inset-0 bg-gray-600 rounded-lg animate-pulse' />
        )}

        <img
          src={getChampionImageUrl(champion.name)}
          alt={champion.name}
          className={`w-full h-full rounded-lg transition-all duration-200 cursor-pointer
            ${isLoading ? 'opacity-0' : 'opacity-100'}
            ${isPicked ? 'grayscale brightness-50' : ''}`}
          onLoad={handleImageLoad}
        />
      </div>

      <p className={isPicked ? 'text-gray-500' : ''}>{champion.name}</p>
    </div>
  );
};

export default ChampionItem;
