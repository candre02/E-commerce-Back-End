const router = require('express').Router();
const { regexp } = require('sequelize/dist/lib/operators');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll()
    .then(Product)
    .catch(err => {
      console.log(err);
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id:
    },
  })
    .then()
    .catch(err => {
      console.log(err);
    });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
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
      category_name: req.body.name,
    },
    {
      // Get a category based on the category_id given in the request parameters
    where: {
      id: req.params.category_id,
    },
  }
  )
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
      id: category_id,
    },
  })
    .then(deletedCategory => {
      console.log(deletedCategory);
    })
    .catch(err => {
    console.log(err);
  });


module.exports = router;