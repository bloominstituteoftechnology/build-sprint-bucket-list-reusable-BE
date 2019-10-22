const express = require('express');
const Buckets = require('./bucket-model');
const router = express.Router();
const Protected = require('../middleware/protected');


router.get('/', Protected, (req, res) =>{
  Buckets.findBy()
    .then(bucket =>{
      res.json(bucket)
    })
    .catch(err =>{
      res.json(err)
    })
});

router.post('/', Protected, (req, res) =>{
  Buckets.add(req.body)
    .then(bucket =>{
      console.log(bucket);
      res.status(201).json(bucket)
    })
    .catch(err =>{
      res.status(500).json({message: "Could not add bucket"})
    })
})

router.get('/:id', Protected, (req, res) =>{
  Buckets.findById(req.params.id)
    .then(bucket =>{
      if (bucket) {
        res.json(bucket)
      } else {
        res.status(404).json({message: "The bucket with the specified ID does not exist"})
      }
    })
    .catch(err =>{
      res.status(500).json({message: "Could not get bucket"})
    })
})

router.put('/:id', Protected, (req, res) =>{
  Buckets.update(req.body, req.params.id)
  .then(bucket =>{
    if (bucket) {
      res.json(bucket)
    } else {
      res.status(404).json({message: "Bucket with specified ID does not exist"})
    }
  })
  .catch(err =>{
    res.status(500).json({message: "Could not update bucket"})
  })
})

router.delete('/:id', Protected, (req, res) =>{
  Buckets.remove(req.params.id)
  .then(bucket =>{
    if (bucket) {
      res.json({message: "Bucket removed"})
    } else {
      res.status(404).json({message: "Bucket with specified ID does not exist"})
    }
  })
  .catch(err =>{
    res.status(500).json({message: "Bucket could not be removed"})
  })
})



module.exports = router;