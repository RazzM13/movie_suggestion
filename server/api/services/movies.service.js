import l from '../../common/logger';
import db from './movies.db.service';

class MoviesService {
  /**
   * Provides the ability to search movie suggestions based on a film name via fuzzy matching and to sort the results in
   * descending order based on audience_score or the rotten_tomatoes scores.
   * @param {string} q Film name that will be used for fuzzy matching.
   * @param {string} sortBy Sorting column one of audience_score or, the default, rotten_tomatoes.
   * @returns {*}
   */
  find(q, sortBy = 'rotten_tomatoes') {
    l.info(`${this.constructor.name}.find(${q}, ${sortBy})`);
    return db.find(q, sortBy);
  }
}

export default new MoviesService();
