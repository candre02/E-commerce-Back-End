const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
//   Tag.findAll({
//     attributes: { exclude: [''] }
//   })
//   .then()
//   .catch(err => {
//     console.log(err);
//   });
// });

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
//   Tag.findOne({
//     attributes: { exclude: [''] },
//     where: {
//       id:
//     },
//     include: [
//       {
//       model: Product,
//       attributes: []
//       },
//       {
//         model: ProductTag,
//         attributes: [],
//         include: {
//           model: Product,
//           attributes: []
//         }
//       }
//     ]
//   })
//   .then()
//   .catch(err => {
//     console.log(err);
//   });
// });

router.post('/', (req, res) => {
  // create a new tag
//   Tag.create({
//     // username:
//     // email:
//     // password:
//   })
//   .then()
//   .catch(err => {
//     console.log(err);
//   });
// });

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
//   Tag.update({
//     where: {
//       id:
//     }
//   })
//   .then()
//     if (!) {
//     }

//   })
//   .catch(err => {
//     console.log(err);
//   });
// });

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  // Tag.destroy({
  //   where: {
  //     id:
//     }
//   })
//   .then()
//   if (!) {
//   }

// })
// .catch(err => {
//   console.log(err);
// });
// });

module.exports = router;
