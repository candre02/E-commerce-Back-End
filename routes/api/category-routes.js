const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    attributes: [
      'id', 
      'category_name'
    ],
    include: [
      {
        model: Product,
        attributes: [
          'id', 
          'product_name', 
          'price', 
          'stock', 
          'category_id'
        ]
      }
    ]
  })
    .then(allCategory => res.json(allCategory))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'category_name',
      []
    ],
    include: [
      {
        model: Product,
        attributes: [
          'id', 
          'product_name',
          'price', 
          'stock', 
          'category_id'
        ]
      }
    ]
  })
    .then(oneCategory => {
      if (oneCategory) {
        res.status(404).json({ message: 'No category found with this id'});
        return;
      }
      res.json(oneCategory);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.name
  })
    .then((newCategory) => {
      console.log(newCategory);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      // all the felds you can update and the data attached to the request body
      category_name: req.body.name
    },
    {
      // Get a category based on the category_id given in the request parameters
    where: {
      id: req.params.id
    },
  })
    .then((updatedCategory) => {
      console.log(updatedCategory);
    })
    .catch(err => {
      console.log(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(deletedCategory => {
      if (!deletedCategory) {
        res.status(404).json({ message: 'No category found with this id'});
        return;
      }
      res.json(deletedCategory);
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;