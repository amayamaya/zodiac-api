const pool = require('../utils/pool');

module.exports = class Sign {
  id;
  name;
  svg_symbol;
  unicode_symbol;
  archetype;
  element;
  ruling_body_classic;
  ruling_body_modern;
  keywords;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.svg_symbol = row.svg_symbol;
    this.unicode_symbol = row.unicode_symbol;
    this.archetype = row.archetype;
    this.element = row.element;
    this.ruling_body_classic = row.ruling_body_classic;
    this.ruling_body_modern = row.ruling_body_modern;
    this.keywords = row.keywords;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM signs');
    return rows.map((row) => new Sign(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM signs WHERE id=$2', [id]);
    if (!rows[0]) return null;

    return new Sign(rows[0]);
  }
};

module.exports = class Sign {
  id;
  name;
  svg_symbol;
  unicode_symbol;
  archetype;
  element;
  ruling_body_classic;
  ruling_body_modern;
  keywords;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.svg_symbol = row.svg_symbol;
    this.unicode_symbol = row.unicode_symbol;
    this.archetype = row.archetype;
    this.element = row.element;
    this.ruling_body_classic = row.ruling_body_classic;
    this.ruling_body_modern = row.ruling_body_modern;
    this.keywords = row.keywords;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM signs');
    return rows.map((row) => new Sign(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM signs WHERE id=$1', [id]);
    if (!rows[0]) return null;

    return new Sign(rows[0]);
  }
};
