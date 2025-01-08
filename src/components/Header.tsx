import { Rat } from 'lucide-react';

const Header = () => {
  return (
    <div className='h-16 bg-[#1C1C1C] flex justify-center items-center font-bold text-center'>
      <Rat size={28} color='#fff' />
      <p className='text-xl ml-2'>Fearless Draft Picker</p>
    </div>
  );
};

export default Header;
