const express = require('express');
const Items = require('./item-model');
const router = express.Router();
const Protected = require('../middleware/restricted');


router.get('/', (req, res) =>{
  Items.findBy()
    .then(item =>{
      res.json(item)
    })
    .catch(err =>{
      res.json(err)
    })
});

router.post('/', (req, res) =>{
  Items.add(req.body)
    .then(item =>{
      res.status(201).json(item)
    })
    .catch(err =>{
      res.status(500).json({message: "Could not add item"})
    })
})

router.get('/:id', (req, res) =>{
  Items.findById(req.params.id)
    .then(item =>{
      if (item) {
        res.json(item)
      } else {
        res.status(404).json({message: "The item with the specified ID does not exist"})
      }
    })
    .catch(err =>{
      res.status(500).json({message: "Could not get item"})
    })
})

router.put('/:id', (req, res) =>{
  Items.update(req.body, req.params.id)
  .then(item =>{
    if (item) {
      res.json(item)
    } else {
      res.status(404).json({message: "Item with specified ID does not exist"})
    }
  })
  .catch(err =>{
    res.status(500).json({message: "Could not update item"})
  })
})

router.delete('/:id', (req, res) =>{
  Items.remove(req.params.id)
  .then(item =>{
    if (item) {
      res.json({message: "Item removed"})
    } else {
      res.status(404).json({message: "Item with specified ID does not exist"})
    }
  })
  .catch(err =>{
    res.status(500).json({message: "item could not be removed"})
  })
})



module.exports = router;