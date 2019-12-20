const Users = require('./users-model.js');
const db = require('../database/db-config.js');

describe('users model', function() {
  beforeEach(async () => {
    await db('users').truncate();
  });

  describe('add()', function() {
    it('should add the user to the database', async function() {
      // call add, passing a user object
      await Users.add({ name: 'Luke' });
      await Users.add({ name: 'Han' });
      await Users.add({ name: 'Leia' });

      // check the database directly
      const users = await db('users');
      expect(users).toHaveLength(3);
    });
  });

  describe('remove()', () => {
    it('adds then removes user', async () => {
      const user = await Users.add({ name: 'Luke' });
      await Users.remove(user.id);
      const users = await db('users');
      expect(users).toHaveLength(0);
    });
  });
});
