import ChampionItem from './ChampionItem';
import { champions } from '../../data';

type ChampionsListProps = {
  input: string;
  selectedLane: string | null;
  pickedChampions: number[];
  onChampionPick: (championId: number) => void;
  hidePickedChampions: boolean;
};

const ChampionsList = ({
  input,
  selectedLane,
  pickedChampions,
  onChampionPick,
  hidePickedChampions,
}: ChampionsListProps) => {
  const filteredChampions = champions.filter(champion => {
    const normalizedChampName = champion.name
      .toLowerCase()
      .replace(/['\s]/g, '');
    const normalizedInput = input.toLowerCase().replace(/['\s]/g, '');
    const nameMatch = normalizedChampName.includes(normalizedInput);

    const laneMatch = selectedLane
      ? champion.roles.includes(selectedLane)
      : true;

    const hideMatch = hidePickedChampions
      ? !pickedChampions.includes(champion.id)
      : true;

    return nameMatch && laneMatch && hideMatch;
  });

  return (
    <div className='grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 gap-y-2 p-4'>
      {filteredChampions.map(champion => (
        <ChampionItem
          key={champion.id}
          champion={champion}
          isPicked={pickedChampions.includes(champion.id)}
          onPick={() => onChampionPick(champion.id)}
        />
      ))}
    </div>
  );
};

export default ChampionsList;
