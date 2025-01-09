type LaneFilterProps = {
  selectedLane: string | null;
  onLaneSelect: (lane: string | null) => void;
};

const lanes = [
  { id: 'top', imgSrc: '/top.png' },
  { id: 'jungle', imgSrc: '/jungle.png' },
  { id: 'mid', imgSrc: '/mid.png' },
  { id: 'adc', imgSrc: '/adc.png' },
  { id: 'support', imgSrc: '/support.png' },
];

const LaneFilter = ({ selectedLane, onLaneSelect }: LaneFilterProps) => {
  const handleClick = (laneId: string) => {
    if (selectedLane === laneId) {
      onLaneSelect(null);
    } else {
      onLaneSelect(laneId);
    }
  };

  return (
    <div className='flex gap-4'>
      {lanes.map(lane => (
        <button
          key={lane.id}
          onClick={() => handleClick(lane.id)}
          className='w-8 h-8 transition-all'
        >
          <img
            src={lane.imgSrc}
            alt={lane.id}
            className={`w-full h-full object-contain transition-all
              ${selectedLane === lane.id ? '' : 'grayscale'}`}
          />
        </button>
      ))}
    </div>
  );
};

export default LaneFilter;
