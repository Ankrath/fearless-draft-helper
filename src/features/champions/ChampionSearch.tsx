import { MdClose } from 'react-icons/md';

type ChampionSearchProps = {
  onChange: (e: string) => void;
  input: string;
};

const ChampionSearch = ({ onChange, input }: ChampionSearchProps) => {
  const handleClear = () => {
    onChange('');
  };

  return (
    <div className='relative w-full lg:w-auto'>
      <input
        type='text'
        placeholder='Search'
        value={input}
        onChange={e => onChange(e.target.value)}
        maxLength={22}
        className='py-2 px-3 text-white bg-zinc-900 rounded-sm mb-4 lg:mb-0 w-full lg:w-64 text-lg focus:outline-none focus:ring-0'
      />
      {input && (
        <button
          onClick={handleClear}
          className='absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors'
        >
          <MdClose size={22} />
        </button>
      )}
    </div>
  );
};

export default ChampionSearch;
