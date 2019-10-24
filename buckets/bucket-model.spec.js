const Buckets = require('./bucket-model');

const db = require('../data/db-config');

it('should set testing env', () =>{
  expect(process.env.DB_ENV).toBe('testing');
});

describe('bucket-model', () =>{
  beforeEach(async () =>{
    await db('buckets').truncate();
  })

  describe('add()', () =>{
    it('should add bucket to db', async () =>{
      const records = await db('buckets');
      expect(records).toHaveLength(0);

      await Buckets.add({title: "Jenn", user_id: "1"});
      const buckets = await db('buckets');
      expect(buckets).toHaveLength(1);
    })
  })

  describe('remove()', () =>{
    
    it('should remove bucket from db', async () =>{
      
      await Buckets.add({title: "Restaurants", user_id: 1});
      const records = await db('buckets')
      expect(records).toHaveLength(1);

     await Buckets.remove(1)
     const removed = await db('buckets')
     expect(removed).toHaveLength(0);
    })
  })
})