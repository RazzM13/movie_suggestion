class MoviesDatabase {
  constructor() {
    this._data = [];
  }

  find(q, sortBy) {
    return Promise.resolve(this._data);
  }
}

export default new MoviesDatabase();
