import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
});

const article = mongoose.model("article", ArticleSchema);

export { article };
