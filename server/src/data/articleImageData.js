import {
  deleteImageCloudinary,
  uploadImageCloudinary,
} from "../lib/cloudinary.js";
import fs from "fs-extra";

const addArticleImage = async (files) => {
  let image = files[Object.keys(req.files)[0]] || false;
  let IMAGE_URL = [];

  if (image) {
    if (Array.isArray(image)) {
      for (let index = 0; index < image.length; index++) {
        const result = await uploadImageCloudinary(image[index]?.tempFilePath);
        IMAGE_URL.push({ ...result, article_id: ID });
        await fs.unlink(image[index]?.tempFilePath);
      }
    } else {
      const result = await uploadImageCloudinary(image?.tempFilePath);
      IMAGE_URL.push({ ...result, article_id: ID });
      await fs.unlink(image.tempFilePath);
    }
  }

  return IMAGE_URL;
};

const deleteArticleImage = (imageId) => {};

export { addArticleImage, deleteArticleImage };
