import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "../config.js";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const uploadImageCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "negocio/articulos",
    });

    return result;
  } catch (error) {
    return {
      status: false,
      message: "uploadImageCloudinary " + error.message,
      value: error,
    };
  }
};

const deleteImageCloudinary = async (public_id) => {
  try {
    const result = await cloudinary.uploader.destroy(public_id);
    return {
      status: true,
      message: "Imagen eliminada de Cloudinary",
      value: result,
    };
  } catch (error) {
    return {
      status: false,
      message: "deleteImageCloudinary " + error.message,
      value: error,
    };
  }
};

export { uploadImageCloudinary, deleteImageCloudinary };
