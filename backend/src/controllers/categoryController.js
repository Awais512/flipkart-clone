const Category = require('../models/categoryModel');
const slugify = require('slugify');

//@route        POST /api/category/create
//@desc         Create Categories
//@access       Private
exports.createCategory = async (req, res) => {
  const name = req.body.name;
  const slug = slugify(req.body.name);
  const catObj = { name, slug };

  if (req.body.parentId) {
    catObj.parentId = req.body.parentId;
  }
  try {
    const category = await new Category(catObj).save();
    res
      .status(201)
      .json({ message: 'Category Created Successfully', data: category });
  } catch (err) {
    res.status(500).json({ message: err });
    console.log(err);
  }
};

//@route        GET /api/category
//@desc         Get Categories
//@access       Public
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({ count: categories.length, categories });
  } catch (err) {
    res.status(400).json({ message: err });
    console.log(err);
  }
};

// //@route        GET /api/category/:slug
// //@desc         Get Category
// //@access       Public
// exports.getCategory = async (req, res) => {
//   try {
//     const categories = await Category.findById();
//     res.status(200).json({ count: categories.length, categories });
//   } catch (err) {
//     res.status(400).json({ message: err });
//     console.log(err);
//   }
// };
