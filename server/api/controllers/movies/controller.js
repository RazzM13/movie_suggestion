import MoviesService from '../../services/movies.service';

export class Controller {
  find(req, res) {
    MoviesService.find(req.query.q, req.query.sortBy).then(r => res.json(r));
  }
}
export default new Controller();
