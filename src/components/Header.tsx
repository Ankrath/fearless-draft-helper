const Header = () => {
  return (
    <div className='h-16 bg-[#1C1C1C] flex justify-between items-center px-6'>
      <div className='flex-1'></div>
      <div className='flex gap-2'>
        <h1 className='text-2xl font-extrabold tracking-wider uppercase'>
          <span className='text-yellow-500'>Fearless</span>
          <span className='text-zinc-400 mx-2'>Draft</span>
          <span className='text-sm font-normal tracking-widest text-zinc-500'>
            Visualizer
          </span>
        </h1>
      </div>
      <div className='flex-1 flex justify-end'>
        <a
          href='https://twitter.com/Ankrath'
          target='_blank'
          rel='noopener noreferrer'
          className='text-zinc-500  hover:text-yellow-500 transition-colors text-sm hidden md:block'
        >
          Made by Ankrath
        </a>
      </div>
    </div>
  );
};
export default Header;
