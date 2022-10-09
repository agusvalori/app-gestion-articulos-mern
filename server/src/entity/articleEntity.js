import mongoose from "mongoose";

// Define a schema
const articleSchema = new mongoose.Schema({
  ID: { type: String, require: true, trim: true, unique: true },
  ARTICULO: { type: String, require: true },
  DESCRIPCION: { type: String, require: true },
  CANT_BULTO: { type: Number, require: true },
  CATEGORIA: { type: String },
  SUB_CATEGORIA: [{ type: String }],
  IMAGE_URL: [
    {
      article_id: String,
      secure_url: String,
      public_id: String,
    },
  ],
  PRECIO: { type: Number, require: true },
  STOCK: { type: Number },
});

export default mongoose.model("article", articleSchema);
