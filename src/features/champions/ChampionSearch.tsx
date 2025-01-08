import { useState } from 'react';

const ChampionSearch = () => {
  const [input, setInput] = useState('');

  return (
    <div>
      <input
        type='text'
        placeholder='Search'
        className='py-2 px-3 text-white bg-zinc-900 rounded-sm w-64 text-lg focus:outline-none focus:ring-0'
        onChange={e => setInput(e.target.value)}
        value={input}
      />
    </div>
  );
};

export default ChampionSearch;
