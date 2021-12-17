const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    attributes: [
      'id',
      'tag_name'
    ],
    include: [
      {
        model: ProductTag,
        attributes: ['id', 'product_id', 'tag_id'],
        include: {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      }
    ]
  })
  .then(allTag => res.json(allTag))
  .catch(err => {
    console.log(err);
    res.json(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'tag_name'
    ],
    include: [
      {
        model: ProductTag,
        attributes: ['id', 'product_id', 'tag_id'],
        include: {
          model: Product,
          attributes: [
            'id',
            'product_name',
            'price',
            'stock',
            'category_id'
          ]
        }
      },
    ]
  })
  .then(oneTag => {
    if (!oneTag) {
      res.status(404).json({ message: 'No tag found with this id'});
    }
    res.json(oneTag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    // username:
    username: req.body.username,
    // email:
    email: req.body.email,
    // password:
    password: req.body.password
  })
  .then(createTag => res.json(createTag))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    where: {
      id: req.params.id
    },
    // attributes: [
    //   'id',
    //   'tag_name'
    // ]
  })
  .then(updateTag => {
    if (!updateTag) {
      res.status(404).json({ message: 'No tag found with this id'})
      return;
    }
    console.log(updateTag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deleteTag => {
    if (!deleteTag) {
      res.status(404).json({ message: 'No tag found with this id'})
      return;
    }
    res.json(deleteTag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
