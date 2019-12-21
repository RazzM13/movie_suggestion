import l from '../../common/logger';
import db from './movies.db.service';

class MoviesService {
  find(q, sortBy = 'rotten_tomatoes') {
    l.info(`${this.constructor.name}.find(${q}, ${sortBy})`);
    return db.find(q);
  }
}

export default new MoviesService();
