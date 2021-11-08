const router = require('express').Router();
const { response } = require('express');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: {
      model: Product,
    }
  }).then(dbTagData => {
    console.log("get all tags route hit");
    res.json(dbTagData);
  }).catch(err => {
    console.log(err)
    res.status(500).json(err)
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
    }
  }).then(dbTagData => {
    console.log("get all tags route hit")
    if(!dbTagData){
      res.status(404).json({ message: "No tag with this id found" });
    };
    res.json(dbTagData);
  }).catch(err => {
    console.log(err)
    res.status(500).json(err)
  });
});


router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbTagData => {
    console.log("delete tag route hit");
    if(!dbTagData){
      res.status(404).json({ message: "No tag with this id found"})
      return;
    }
    res.json(dbTagData)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
