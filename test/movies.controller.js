import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('Movie suggestions', () => {
  it('should show a single suggestion for a movie containing the word "Summer"', () =>
    request(Server)
      .get('/api/v1/suggestions?q=Summer')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('array')
          .of.length(1);
      }));

  it('should show suggestions sorted by rotten_tomatoes when no sorting key has been provided', () =>
    request(Server)
      .get('/api/v1/suggestions?q=of')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('array')
          .of.length(7);
        expect(r.body[0]).to.include({ rotten_tomatoes: 87 });
        expect(r.body[1]).to.include({ rotten_tomatoes: 73 });
        expect(r.body[2]).to.include({ rotten_tomatoes: 57 });
      }));

  it('should show suggestions sorted by rotten_tomatoes when rotten_tomatoes is used as sorting key', () =>
    request(Server)
      .get('/api/v1/suggestions?q=of&sortBy=rotten_tomatoes')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('array')
          .of.length(7);
        expect(r.body[0]).to.include({ rotten_tomatoes: 87 });
        expect(r.body[1]).to.include({ rotten_tomatoes: 73 });
        expect(r.body[2]).to.include({ rotten_tomatoes: 57 });
      }));

  it('should show suggestions sorted by audience_score when audience_score is used as sorting key', () =>
    request(Server)
      .get('/api/v1/suggestions?q=of&sortBy=audience_score')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('array')
          .of.length(7);
        expect(r.body[0]).to.include({ audience_score: 81 });
        expect(r.body[1]).to.include({ audience_score: 81 });
        expect(r.body[2]).to.include({ audience_score: 61 });
      }));

  it('should show return BAD REQUEST status code when sorting key is not within allowed values', () =>
    request(Server)
      .get('/api/v1/suggestions?q=of&sortBy=some_other_key')
      .expect(400));

  it('should show return BAD REQUEST status code when the q parameter is omitted', () =>
    request(Server)
      .get('/api/v1/suggestions')
      .expect(400));
});
