-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists signs;

CREATE table signs (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    svg_symbol VARCHAR NOT NULL,
    unicode_symbol VARCHAR NOT NULL,
    archetype VARCHAR NOT NULL,
    element VARCHAR NOT NULL,
    ruling_body_classic VARCHAR NOT NULL,
    ruling_body_modern VARCHAR NOT NULL,
    keywords VARCHAR []
);

INSERT INTO signs (name, svg_symbol, unicode_symbol, archetype, element, ruling_body_classic, ruling_body_modern, keywords) VALUES
('Aies', 'https://en.wikipedia.org/wiki/File:Aries.svg', '♈︎', 'The Ram', 'Fire', 'Mars', 'Mars', ARRAY ['driven', 'idealistic', 'aggressive']),
('Taurus', 'https://en.wikipedia.org/wiki/File:Taurus.svg', '♉︎', 'The Bull', 'Earth', 'Venus', 'Venus', ARRAY ['stable', 'practical', 'patient']),
('Gemini', 'https://en.wikipedia.org/wiki/File:Gemini.svg', '♊︎', 'The Twins', 'Air', 'Mercury', 'Mercury', ARRAY ['communicative', 'curious', 'adaptable']),
('Cancer', 'https://en.wikipedia.org/wiki/File:Cancer.svg', '♋︎', 'The Crab', 'Water', 'Moon', 'Moon', ARRAY ['emotional', 'intuitive', 'protective']),
('Leo', 'https://en.wikipedia.org/wiki/File:Leo.svg', '♌︎', 'The Lion', 'Fire', 'Sun', 'Sun', ARRAY ['creative', 'generous', 'passionate']),
('Virgo', 'https://en.wikipedia.org/wiki/File:Virgo.svg', '♍︎', 'The Virgin', 'Earth', 'Mercury', 'Mercury', ARRAY ['analytical', 'practical', 'helpful']),
('Libra', 'https://en.wikipedia.org/wiki/File:Libra.svg', '♎︎', 'The Scales', 'Air', 'Venus', 'Venus', ARRAY ['diplomatic', 'cooperative', 'fair-minded']),
('Scorpio', 'https://en.wikipedia.org/wiki/File:Scorpio.svg', '♏︎', 'The Scorpion', 'Water', 'Pluto', 'Pluto', ARRAY ['passionate', 'resourceful', 'willed']),
('Sagittarius', 'https://en.wikipedia.org/wiki/File:Sagittarius.svg', '♐︎', 'The Archer', 'Fire', 'Jupiter', 'Jupiter', ARRAY ['optimistic', 'generous', 'honest']),
('Capricorn', 'https://en.wikipedia.org/wiki/File:Capricorn.svg', '♑︎', 'The Goat', 'Earth', 'Saturn', 'Saturn', ARRAY ['practical', 'ambitious', 'patient']),
('Aquarius', 'https://en.wikipedia.org/wiki/File:Aquarius.svg', '♒︎', 'The Water Bearer', 'Air', 'Uranus', 'Uranus', ARRAY ['progressive', 'original', 'independent']),
('Pisces', 'https://en.wikipedia.org/wiki/File:Pisces.svg', '♓︎', 'The Fish', 'Water', 'Neptune', 'Neptune', ARRAY ['compassionate', 'artistic', 'idealistic']);

