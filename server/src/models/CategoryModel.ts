import {Schema, model} from 'mongoose';

interface Category {
  name : string;
  color: string
}

const categorySchema = new Schema<Category>({
  name: String,
  color: String,
})
const Category = model<Category>('Category', categorySchema)
export default  Category
