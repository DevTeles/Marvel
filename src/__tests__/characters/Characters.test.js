import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Characters', () => {
  it('Testando a requisição da API Marvel', async () => {

    apiMock.onGet('characters').reply(200);

    const { status } = await api.get('characters', {
      params: {
        ts: process.env.REACT_APP_TS,
        apikey: process.env.REACT_APP_API_KEY,
        hash: process.env.REACT_APP_HASH,
      }
    });

    expect(status).toBe(200);
  });
});