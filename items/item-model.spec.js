const Items = require('./item-model');

const db = require('../data/db-config');

it('should set testing env', () =>{
  expect(process.env.DB_ENV).toBe('testing');
});

describe('item-model', () =>{
  beforeEach(async () =>{
    await db('items').truncate();
  })

  describe('add()', () =>{
    it('should add item to db', async () =>{
      const records = await db('items');
      expect(records).toHaveLength(0);

      await Items.add({item_name: "Barcelona", bucket_id: 1});
      const buckets = await db('items');
      expect(buckets).toHaveLength(1);
    })
  })

  describe('remove()', () =>{
    
    it('should remove item from db', async () =>{
      
      await Items.add({item_name: "Tokyo", bucket_id: 1});
      const records = await db('items')
      expect(records).toHaveLength(1);

     await Items.remove(1)
     const removed = await db('items')
     expect(removed).toHaveLength(0);
    })
  })
})