import { Product } from "../models/productModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import { Func } from "../middleware/catchAsyncError.js";

// Create Product --Admin
export const createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// get all product

export const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
};

// GET PRODUCT DETAILS

export const getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
};

// UPDATE PRODUCT -- admin

export const updateProduct = async (req, res, next) => {
  let product = Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
};

// DELETE PRODUCT

export const deleteProduct = async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    res.status(500).json({
      success: false,
      message: "product not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "product deleted successfully",
  });
};
