const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const signs = [
  {
    id: '1',
    name: 'Aries',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Aries.svg',
    unicode_symbol: '♈',
    archetype: 'The Ram',
    element: 'Fire',
    ruling_body_classic: 'Mars',
    ruling_body_modern: 'Mars',
    keywords: ['driven', 'idealistic', 'forward'],
  },
  {
    id: '2',
    name: 'Taurus',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Taurus.svg',
    unicode_symbol: '♉',
    archetype: 'The Bull',
    element: 'Earth',
    ruling_body_classic: 'Venus',
    ruling_body_modern: 'Earth',
    keywords: ['stable', 'practical', 'patient'],
  },
  {
    id: '3',
    name: 'Gemini',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Gemini.svg',
    unicode_symbol: '♊',
    archetype: 'The Twins',
    element: 'Air',
    ruling_body_classic: 'Mercury',
    ruling_body_modern: 'Mercury',
    keywords: ['communicative', 'curious', 'adaptable'],
  },
  {
    id: '4',
    name: 'Cancer',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Cancer.svg',
    unicode_symbol: '♋',
    archetype: 'The Crab',
    element: 'Water',
    ruling_body_classic: 'Moon',
    ruling_body_modern: 'Moon',
    keywords: ['emotional', 'intuitive', 'protective'],
  },
  {
    id: '5',
    name: 'Leo',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Leo.svg',
    unicode_symbol: '♌',
    archetype: 'The Lion',
    element: 'Fire',
    ruling_body_classic: 'Sun',
    ruling_body_modern: 'Sun',
    keywords: ['creative', 'generous', 'passionate'],
  },
  {
    id: '6',
    name: 'Virgo',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Virgo.svg',
    unicode_symbol: '♍',
    archetype: 'The Maiden',
    element: 'Earth',
    ruling_body_classic: 'Mercury',
    ruling_body_modern: 'Ceres',
    keywords: ['analytical', 'practical', 'helpful'],
  },
  {
    id: '7',
    name: 'Libra',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Libra.svg',
    unicode_symbol: '♎',
    archetype: 'The Scales',
    element: 'Air',
    ruling_body_classic: 'Venus',
    ruling_body_modern: 'Venus',
    keywords: ['diplomatic', 'cooperative', 'fair-minded'],
  },
  {
    id: '8',
    name: 'Scorpio',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Scorpio.svg',
    unicode_symbol: '♏',
    archetype: 'The Scorpion',
    element: 'Water',
    ruling_body_classic: 'Mars',
    ruling_body_modern: 'Pluto',
    keywords: ['deep', 'magnetic', 'destructive'],
  },
  {
    id: '9',
    name: 'Sagittarius',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Sagittarius.svg',
    unicode_symbol: '♐',
    archetype: 'The Archer',
    element: 'Fire',
    ruling_body_classic: 'Jupiter',
    ruling_body_modern: 'Jupiter',
    keywords: ['ambitious', 'daring', 'coarse'],
  },
  {
    id: '10',
    name: 'Capricorn',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Capricorn.svg',
    unicode_symbol: '♑',
    archetype: 'The Goat',
    element: 'Earth',
    ruling_body_classic: 'Saturn',
    ruling_body_modern: 'Saturn',
    keywords: ['responsible', 'awkward', 'rigid'],
  },
  {
    id: '11',
    name: 'Aquarius',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Aquarius.svg',
    unicode_symbol: '♒',
    archetype: 'The Water Bearer',
    element: 'Air',
    ruling_body_classic: 'Saturn',
    ruling_body_modern: 'Uranus',
    keywords: ['inventive', 'zany', 'erratic'],
  },
  {
    id: '12',
    name: 'Pisces',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Pisces.svg',
    unicode_symbol: '♓',
    archetype: 'The Fish',
    element: 'Water',
    ruling_body_classic: 'Jupiter',
    ruling_body_modern: 'Neptune',
    keywords: ['artistic', 'sentimental', 'dependent'],
  },
];

describe('signs routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/signs should return a list of signs', async () => {
    const res = await request(app).get('/signs');
    console.log(res.body);
    const expected = signs;
    console.log(expected);
    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
