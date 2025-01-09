type ChampionSearchProps = {
  onChange: (e: string) => void;
  input: string;
};

const ChampionSearch = ({ onChange, input }: ChampionSearchProps) => {
  return (
    <div>
      <input
        type='text'
        placeholder='Search'
        className='py-2 px-3 text-white bg-zinc-900 rounded-sm w-64 text-lg focus:outline-none focus:ring-0'
        onChange={e => onChange(e.target.value)}
        value={input}
      />
    </div>
  );
};

export default ChampionSearch;
