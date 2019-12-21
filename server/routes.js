import moviesRouter from './api/controllers/movies/router';

export default function routes(app) {
  app.use('/api/v1/suggestions', moviesRouter);
}
