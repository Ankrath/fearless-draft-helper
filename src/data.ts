const CURRENT_PATCH = '14.24.1';

export const getChampionImageUrl = (championName: string) => {
  const specialCases: Record<string, string> = {
    Wukong: 'MonkeyKing',
    "Kog'Maw": 'KogMaw',
    "K'Sante": 'KSante',
    "Rek'Sai": 'RekSai',
  };

  if (specialCases[championName]) {
    return `https://ddragon.leagueoflegends.com/cdn/${CURRENT_PATCH}/img/champion/${specialCases[championName]}.png`;
  }

  const formattedName = championName
    .replace(/\s+/g, '')
    .replace(/[']\w/g, match => match[1].toLowerCase());

  return `https://ddragon.leagueoflegends.com/cdn/${CURRENT_PATCH}/img/champion/${formattedName}.png`;
};

export const champions = [
  {
    id: 1,
    name: 'Aatrox',
    roles: ['top'],
  },
  {
    id: 2,
    name: 'Ahri',
    roles: ['mid'],
  },
  {
    id: 3,
    name: 'Akali',
    roles: ['mid', 'top'],
  },
  {
    id: 4,
    name: 'Akshan',
    roles: ['mid', 'top'],
  },
  {
    id: 5,
    name: 'Alistar',
    roles: ['support'],
  },
  {
    id: 169,
    name: 'Ambessa',
    roles: ['top'],
  },
  {
    id: 6,
    name: 'Amumu',
    roles: ['jungle', 'support'],
  },
  {
    id: 7,
    name: 'Anivia',
    roles: ['mid'],
  },
  {
    id: 8,
    name: 'Annie',
    roles: ['mid', 'support'],
  },
  {
    id: 9,
    name: 'Aphelios',
    roles: ['adc'],
  },
  {
    id: 10,
    name: 'Ashe',
    roles: ['adc', 'support'],
  },
  {
    id: 11,
    name: 'Aurelion Sol',
    roles: ['mid'],
  },
  {
    id: 168,
    name: 'Aurora',
    roles: ['top', 'mid'],
  },
  {
    id: 12,
    name: 'Azir',
    roles: ['mid'],
  },
  {
    id: 13,
    name: 'Bard',
    roles: ['support'],
  },
  {
    id: 14,
    name: "Bel'Veth",
    roles: ['jungle'],
  },
  {
    id: 15,
    name: 'Blitzcrank',
    roles: ['support'],
  },
  {
    id: 16,
    name: 'Brand',
    roles: ['support', 'mid'],
  },
  {
    id: 17,
    name: 'Braum',
    roles: ['support'],
  },
  {
    id: 18,
    name: 'Briar',
    roles: ['jungle'],
  },
  {
    id: 19,
    name: 'Caitlyn',
    roles: ['adc'],
  },
  {
    id: 20,
    name: 'Camille',
    roles: ['top'],
  },
  {
    id: 21,
    name: 'Cassiopeia',
    roles: ['mid'],
  },
  {
    id: 22,
    name: "Cho'Gath",
    roles: ['top'],
  },
  {
    id: 23,
    name: 'Corki',
    roles: ['mid'],
  },
  {
    id: 24,
    name: 'Darius',
    roles: ['top'],
  },
  {
    id: 25,
    name: 'Diana',
    roles: ['jungle', 'mid'],
  },
  {
    id: 26,
    name: 'Draven',
    roles: ['adc'],
  },
  {
    id: 27,
    name: 'Dr Mundo',
    roles: ['top', 'jungle'],
  },
  {
    id: 28,
    name: 'Ekko',
    roles: ['mid', 'jungle'],
  },
  {
    id: 29,
    name: 'Elise',
    roles: ['jungle'],
  },
  {
    id: 30,
    name: 'Evelynn',
    roles: ['jungle'],
  },
  {
    id: 31,
    name: 'Ezreal',
    roles: ['adc'],
  },
  {
    id: 32,
    name: 'Fiddlesticks',
    roles: ['jungle'],
  },
  {
    id: 33,
    name: 'Fiora',
    roles: ['top'],
  },
  {
    id: 34,
    name: 'Fizz',
    roles: ['mid'],
  },
  {
    id: 35,
    name: 'Galio',
    roles: ['mid', 'support'],
  },
  {
    id: 36,
    name: 'Gangplank',
    roles: ['top'],
  },
  {
    id: 37,
    name: 'Garen',
    roles: ['top'],
  },
  {
    id: 38,
    name: 'Gnar',
    roles: ['top'],
  },
  {
    id: 39,
    name: 'Gragas',
    roles: ['jungle', 'top'],
  },
  {
    id: 40,
    name: 'Graves',
    roles: ['jungle'],
  },
  {
    id: 41,
    name: 'Gwen',
    roles: ['top'],
  },
  {
    id: 42,
    name: 'Hecarim',
    roles: ['jungle'],
  },
  {
    id: 43,
    name: 'Heimerdinger',
    roles: ['mid', 'support'],
  },
  {
    id: 44,
    name: 'Hwei',
    roles: ['mid', 'support'],
  },
  {
    id: 45,
    name: 'Illaoi',
    roles: ['top'],
  },
  {
    id: 46,
    name: 'Irelia',
    roles: ['top', 'mid'],
  },
  {
    id: 47,
    name: 'Ivern',
    roles: ['jungle'],
  },
  {
    id: 48,
    name: 'Janna',
    roles: ['support'],
  },
  {
    id: 49,
    name: 'JarvanIV',
    roles: ['jungle'],
  },
  {
    id: 50,
    name: 'Jax',
    roles: ['top', 'jungle'],
  },
  {
    id: 51,
    name: 'Jayce',
    roles: ['top', 'mid'],
  },
  {
    id: 52,
    name: 'Jhin',
    roles: ['adc'],
  },
  {
    id: 53,
    name: 'Jinx',
    roles: ['adc'],
  },
  {
    id: 54,
    name: "Kai'Sa",
    roles: ['adc'],
  },
  {
    id: 55,
    name: 'Kalista',
    roles: ['adc'],
  },
  {
    id: 56,
    name: 'Karma',
    roles: ['support'],
  },
  {
    id: 57,
    name: 'Karthus',
    roles: ['jungle'],
  },
  {
    id: 58,
    name: 'Kassadin',
    roles: ['mid'],
  },
  {
    id: 59,
    name: 'Katarina',
    roles: ['mid'],
  },
  {
    id: 60,
    name: 'Kayle',
    roles: ['top'],
  },
  {
    id: 61,
    name: 'Kayn',
    roles: ['jungle'],
  },
  {
    id: 62,
    name: 'Kennen',
    roles: ['top'],
  },
  {
    id: 63,
    name: "Kha'Zix",
    roles: ['jungle'],
  },
  {
    id: 64,
    name: 'Kindred',
    roles: ['jungle'],
  },
  {
    id: 65,
    name: 'Kled',
    roles: ['top'],
  },
  {
    id: 66,
    name: "Kog'Maw",
    roles: ['adc'],
  },
  {
    id: 67,
    name: "K'Sante",
    roles: ['top'],
  },
  {
    id: 68,
    name: 'Leblanc',
    roles: ['mid'],
  },
  {
    id: 69,
    name: 'LeeSin',
    roles: ['jungle'],
  },
  {
    id: 70,
    name: 'Leona',
    roles: ['support'],
  },
  {
    id: 71,
    name: 'Lillia',
    roles: ['jungle', 'top'],
  },
  {
    id: 72,
    name: 'Lissandra',
    roles: ['mid'],
  },
  {
    id: 73,
    name: 'Lucian',
    roles: ['adc'],
  },
  {
    id: 74,
    name: 'Lulu',
    roles: ['support'],
  },
  {
    id: 75,
    name: 'Lux',
    roles: ['support', 'mid'],
  },
  {
    id: 76,
    name: 'Malphite',
    roles: ['top'],
  },
  {
    id: 77,
    name: 'Malzahar',
    roles: ['mid'],
  },
  {
    id: 78,
    name: 'Maokai',
    roles: ['support', 'top'],
  },
  {
    id: 79,
    name: 'Master Yi',
    roles: ['jungle'],
  },
  {
    id: 80,
    name: 'Milio',
    roles: ['support'],
  },
  {
    id: 81,
    name: 'Miss Fortune',
    roles: ['adc'],
  },
  {
    id: 82,
    name: 'Mordekaiser',
    roles: ['top'],
  },
  {
    id: 83,
    name: 'Morgana',
    roles: ['support'],
  },
  {
    id: 84,
    name: 'Naafiri',
    roles: ['mid'],
  },
  {
    id: 85,
    name: 'Nami',
    roles: ['support'],
  },
  {
    id: 86,
    name: 'Nasus',
    roles: ['top'],
  },
  {
    id: 87,
    name: 'Nautilus',
    roles: ['support'],
  },
  {
    id: 88,
    name: 'Neeko',
    roles: ['mid', 'support'],
  },
  {
    id: 89,
    name: 'Nidalee',
    roles: ['jungle'],
  },
  {
    id: 90,
    name: 'Nilah',
    roles: ['adc'],
  },
  {
    id: 91,
    name: 'Nocturne',
    roles: ['jungle'],
  },
  {
    id: 92,
    name: 'Nunu',
    roles: ['jungle'],
  },
  {
    id: 93,
    name: 'Olaf',
    roles: ['top', 'jungle'],
  },
  {
    id: 94,
    name: 'Orianna',
    roles: ['mid'],
  },
  {
    id: 95,
    name: 'Ornn',
    roles: ['top'],
  },
  {
    id: 96,
    name: 'Pantheon',
    roles: ['support', 'mid'],
  },
  {
    id: 97,
    name: 'Poppy',
    roles: ['top', 'jungle'],
  },
  {
    id: 98,
    name: 'Pyke',
    roles: ['support'],
  },
  {
    id: 99,
    name: 'Qiyana',
    roles: ['mid'],
  },
  {
    id: 100,
    name: 'Quinn',
    roles: ['top'],
  },
  {
    id: 101,
    name: 'Rakan',
    roles: ['support'],
  },
  {
    id: 102,
    name: 'Rammus',
    roles: ['jungle'],
  },
  {
    id: 103,
    name: "Rek'Sai",
    roles: ['jungle'],
  },
  {
    id: 104,
    name: 'Rell',
    roles: ['support'],
  },
  {
    id: 105,
    name: 'Renata',
    roles: ['support'],
  },
  {
    id: 106,
    name: 'Renekton',
    roles: ['top'],
  },
  {
    id: 107,
    name: 'Rengar',
    roles: ['jungle', 'top'],
  },
  {
    id: 108,
    name: 'Riven',
    roles: ['top'],
  },
  {
    id: 109,
    name: 'Rumble',
    roles: ['top', 'mid'],
  },
  {
    id: 110,
    name: 'Ryze',
    roles: ['mid'],
  },
  {
    id: 111,
    name: 'Samira',
    roles: ['adc'],
  },
  {
    id: 112,
    name: 'Sejuani',
    roles: ['jungle'],
  },
  {
    id: 113,
    name: 'Senna',
    roles: ['support'],
  },
  {
    id: 114,
    name: 'Seraphine',
    roles: ['support', 'mid'],
  },
  {
    id: 115,
    name: 'Sett',
    roles: ['top'],
  },
  {
    id: 116,
    name: 'Shaco',
    roles: ['jungle'],
  },
  {
    id: 117,
    name: 'Shen',
    roles: ['top'],
  },
  {
    id: 118,
    name: 'Shyvana',
    roles: ['jungle'],
  },
  {
    id: 119,
    name: 'Singed',
    roles: ['top'],
  },
  {
    id: 120,
    name: 'Sion',
    roles: ['top'],
  },
  {
    id: 121,
    name: 'Sivir',
    roles: ['adc'],
  },
  {
    id: 122,
    name: 'Skarner',
    roles: ['jungle'],
  },
  {
    id: 167,
    name: 'Smolder',
    roles: ['adc'],
  },
  {
    id: 123,
    name: 'Sona',
    roles: ['support'],
  },
  {
    id: 124,
    name: 'Soraka',
    roles: ['support'],
  },
  {
    id: 125,
    name: 'Swain',
    roles: ['mid', 'support'],
  },
  {
    id: 126,
    name: 'Sylas',
    roles: ['mid'],
  },
  {
    id: 127,
    name: 'Syndra',
    roles: ['mid'],
  },
  {
    id: 128,
    name: 'Tahm Kench',
    roles: ['support', 'top'],
  },
  {
    id: 129,
    name: 'Taliyah',
    roles: ['mid', 'jungle'],
  },
  {
    id: 130,
    name: 'Talon',
    roles: ['mid'],
  },
  {
    id: 131,
    name: 'Taric',
    roles: ['support'],
  },
  {
    id: 132,
    name: 'Teemo',
    roles: ['top'],
  },
  {
    id: 133,
    name: 'Thresh',
    roles: ['support'],
  },
  {
    id: 134,
    name: 'Tristana',
    roles: ['adc'],
  },
  {
    id: 135,
    name: 'Trundle',
    roles: ['jungle', 'top'],
  },
  {
    id: 136,
    name: 'Tryndamere',
    roles: ['top'],
  },
  {
    id: 137,
    name: 'Twisted Fate',
    roles: ['mid'],
  },
  {
    id: 138,
    name: 'Twitch',
    roles: ['adc'],
  },
  {
    id: 139,
    name: 'Udyr',
    roles: ['jungle'],
  },
  {
    id: 140,
    name: 'Urgot',
    roles: ['top'],
  },
  {
    id: 141,
    name: 'Varus',
    roles: ['adc'],
  },
  {
    id: 142,
    name: 'Vayne',
    roles: ['adc', 'top'],
  },
  {
    id: 143,
    name: 'Veigar',
    roles: ['mid'],
  },
  {
    id: 144,
    name: "Vel'Koz",
    roles: ['mid', 'support'],
  },
  {
    id: 145,
    name: 'Vex',
    roles: ['mid'],
  },
  {
    id: 146,
    name: 'Vi',
    roles: ['jungle'],
  },
  {
    id: 147,
    name: 'Viego',
    roles: ['jungle'],
  },
  {
    id: 148,
    name: 'Viktor',
    roles: ['mid'],
  },
  {
    id: 149,
    name: 'Vladimir',
    roles: ['mid', 'top'],
  },
  {
    id: 150,
    name: 'Volibear',
    roles: ['jungle', 'top'],
  },
  {
    id: 151,
    name: 'Warwick',
    roles: ['jungle'],
  },
  {
    id: 152,
    name: 'Wukong',
    roles: ['jungle', 'top'],
  },
  {
    id: 153,
    name: 'Xayah',
    roles: ['adc'],
  },
  {
    id: 154,
    name: 'Xerath',
    roles: ['mid', 'support'],
  },
  {
    id: 155,
    name: 'XinZhao',
    roles: ['jungle'],
  },
  {
    id: 156,
    name: 'Yasuo',
    roles: ['mid'],
  },
  {
    id: 157,
    name: 'Yone',
    roles: ['mid', 'top'],
  },
  {
    id: 158,
    name: 'Yorick',
    roles: ['top'],
  },
  {
    id: 159,
    name: 'Yuumi',
    roles: ['support'],
  },
  {
    id: 160,
    name: 'Zac',
    roles: ['jungle'],
  },
  {
    id: 161,
    name: 'Zed',
    roles: ['mid'],
  },
  {
    id: 162,
    name: 'Zeri',
    roles: ['adc'],
  },
  {
    id: 163,
    name: 'Ziggs',
    roles: ['mid', 'adc'],
  },
  {
    id: 164,
    name: 'Zilean',
    roles: ['support'],
  },
  {
    id: 165,
    name: 'Zoe',
    roles: ['mid'],
  },
  {
    id: 166,
    name: 'Zyra',
    roles: ['support'],
  },
];
