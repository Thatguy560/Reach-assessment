const oldestPackageName = require('.');

describe('oldestPackageName', () => {
  it('returns the name of the package with the oldest date', async () => {
    const answer = await oldestPackageName();
    expect(answer).toEqual('react-router');
  });
});

// Each task contains a test file (index.test.js)
// with tests the expected functionality (do not change it).
