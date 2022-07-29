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
    gloss: 'The Ram',
    element: 'Fire',
    ruling_body_classic: 'Mars',
    ruling_body_modern: 'Mars',
    keywords: ['driven', 'idealistic', 'aggressive'],
  },
  {
    id: '2',
    name: 'Taurus',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Taurus.svg',
    unicode_symbol: '♉',
    gloss: 'The Bull',
    element: 'Earth',
    ruling_body_classic: 'Venus',
    ruling_body_modern: 'Earth',
    keywords: ['resolute', 'sensual', 'indulgent'],
  },
  {
    id: '3',
    name: 'Gemini',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Gemini.svg',
    unicode_symbol: '♊',
    gloss: 'The Twins',
    element: 'Air',
    ruling_body_classic: 'Mercury',
    ruling_body_modern: 'Mercury',
    keywords: ['playful', 'curious', 'two-faced'],
  },
  {
    id: '4',
    name: 'Cancer',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Cancer.svg',
    unicode_symbol: '♋',
    gloss: 'The Crab',
    element: 'Water',
    ruling_body_classic: 'Moon',
    ruling_body_modern: 'Moon',
    keywords: ['nurturing', 'snobby', 'petty'],
  },
  {
    id: '5',
    name: 'Leo',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Leo.svg',
    unicode_symbol: '♌',
    gloss: 'The Lion',
    element: 'Fire',
    ruling_body_classic: 'Sun',
    ruling_body_modern: 'Sun',
    keywords: ['fierce', 'opulent', 'narcissistic'],
  },
  {
    id: '6',
    name: 'Virgo',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Virgo.svg',
    unicode_symbol: '♍',
    gloss: 'The Maiden',
    element: 'Earth',
    ruling_body_classic: 'Mercury',
    ruling_body_modern: 'Ceres',
    keywords: ['meticulous', 'helpful', 'naive'],
  },
  {
    id: '7',
    name: 'Libra',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Libra.svg',
    unicode_symbol: '♎',
    gloss: 'The Scales',
    element: 'Air',
    ruling_body_classic: 'Venus',
    ruling_body_modern: 'Venus',
    keywords: ['balanced', 'chatty', 'indecisive'],
  },
  {
    id: '8',
    name: 'Scorpio',
    svg_symbol: 'https://en.wikipedia.org/wiki/File:Scorpio.svg',
    unicode_symbol: '♏',
    gloss: 'The Scorpion',
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
    gloss: 'The Archer',
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
    gloss: 'The Mountain Sea-goat',
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
    gloss: 'The Water-bearer',
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
    gloss: 'The Fish',
    element: 'Water',
    ruling_body_classic: 'Jupiter',
    ruling_body_modern: 'Neptune',
    keywords: ['artistic', 'sentimental', 'dependent'],
  },
];

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('example test - delete me!', () => {
    expect(1).toEqual(1);
  });
  afterAll(() => {
    pool.end();
  });
});
