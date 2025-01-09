import { useState } from 'react';

import ChampionSearch from '../features/champions/ChampionSearch';
import ChampionsList from '../features/champions/ChampionsList';
import LaneFilter from '../features/champions/LaneFilter';

import { MdRefresh } from 'react-icons/md';

const Main = () => {
  const [input, setInput] = useState('');
  const [selectedLane, setSelectedLane] = useState<string | null>(null);
  const [pickedChampions, setPickedChampions] = useState<number[]>([]);
  const [hidePickedChampions, setHidePickedChampions] = useState(false);

  const handleChange = (query: string) => {
    setInput(query);
  };

  const handleChampionPick = (championId: number) => {
    setPickedChampions(prev =>
      prev.includes(championId)
        ? prev.filter(id => id !== championId)
        : [...prev, championId],
    );
  };

  const handleReset = () => {
    setPickedChampions([]);
  };

  return (
    <div
      className='bg-black w-7/12 mt-10 rounded h-[calc(100vh-8rem)] overflow-y-auto
      scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-black'
    >
      <div className='px-10 pt-6 pb-1 flex items-center justify-between'>
        <ChampionSearch onChange={handleChange} input={input} />

        <LaneFilter
          selectedLane={selectedLane}
          onLaneSelect={setSelectedLane}
        />

        <label
          className={`flex items-center gap-2 cursor-pointer text-lg
          ${
            hidePickedChampions
              ? 'text-yellow-500'
              : 'text-zinc-400 hover:text-yellow-500'
          }`}
        >
          <input
            type='checkbox'
            checked={hidePickedChampions}
            onChange={e => setHidePickedChampions(e.target.checked)}
            className='rounded bg-zinc-800 border-zinc-700 text-yellow-500 focus:ring-yellow-500 cursor-pointer'
          />
          <span>Hide Picked Champions</span>
        </label>

        <button
          onClick={handleReset}
          className='flex items-center text-lg gap-1 text-zinc-400 hover:text-yellow-500 transition-colors'
        >
          <MdRefresh size={22} />
          <span>Reset</span>
        </button>
      </div>
      <ChampionsList
        input={input}
        selectedLane={selectedLane}
        pickedChampions={pickedChampions}
        onChampionPick={handleChampionPick}
        hidePickedChampions={hidePickedChampions}
      />
    </div>
  );
};

export default Main;
