
import { products } from "./constants/data.js";
import Product from './models/product-schema.js';
const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log('Database imported Successfully');
  } catch (error) {
    console.log("Error Occured while inserting default data " + error.message);
  }
}

export default DefaultData;