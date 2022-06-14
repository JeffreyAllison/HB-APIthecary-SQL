const pool = require('../utils/pool');

class Quote {
  id;
  episode_id;
  detail;
  character_id;
  constructor(row) {
    this.id = row.id;
    this.detail = row.detail;
    this.episode_id = row.episode_id;
    this.character_id = row.character_id;
  }

  static async count() {
    const { rows } = await pool.query('SELECT COUNT(*) FROM quotes');
    return Number(rows[0].count);
  }

  static async insert({ episode_id, detail, character_id }) {
    // implement insert to add new quote
    const { rows } = await pool.query(
      'INSERT INTO quotes (episode_id, detail, character_id) VALUES ($1, $2, $3) RETURNING *',
      [episode_id, detail, character_id]
    );
    return new Quote(rows[0]);
  }
}

module.exports = { Quote };
