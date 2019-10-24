const Users = require('./users-model');

const db = require('../data/db-config');

it('should set testing env', () =>{
  expect(process.env.DB_ENV).toBe('testing');
});

describe('users-model', () =>{
  beforeEach(async () =>{
    await db('users').truncate();
  })

  describe('add()', () =>{
    it('should add user to db', async () =>{
      const records = await db('users');
      expect(records).toHaveLength(0);

      await Users.add({username: "Jenn", password: "Jenn"});
      const users = await db('users');
      expect(users).toHaveLength(1);
    })
  })


})

//I'm only testing this for now because this is the only model being used in the app currently