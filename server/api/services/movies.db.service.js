import { Client } from 'pg';

class MoviesDatabase {
  constructor() {
    this._db = new Client();
    this._db.connect();
  }

  find(q, sortBy) {
    return this._db
      .query(
        `SELECT * FROM movies WHERE film LIKE '%${q}%' ORDER BY ${sortBy} DESC;`
      )
      .then(d => {
        return d.rows;
      });
  }
}

export default new MoviesDatabase();
