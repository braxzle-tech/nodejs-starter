import testUtils from '../utils';
import appUtils from '../../src/utils';

const { testApiServer, disconnect } = testUtils;
const { status } = appUtils;

const entryRoute = '/';

// Base Route Test
describe('Base Route Test ', () => {
  it('should return welcome user Welcome to NodeJs server', async () => {
    const response = await testApiServer().get(entryRoute);
    expect(response.status).toBe(status.success);
    expect(response.body.message).toBe('Welcome to NodeJs server');
  });

  it('should return 404 for a non-found route', async () => {
    const response = await testApiServer().get('/badRoute');
    expect(response.status).toBe(status.notfound);
  });
  afterAll(async () => {
    await disconnect();
  });
});
