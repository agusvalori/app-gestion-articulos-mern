import article from "../entity/articleEntity.js";
import { uploadImageCloudinary } from "../lib/cloudinary.js";
import fs from "fs-extra";

const agregarArticulo = async (req, res) => {
  const {
    ID,
    ARTICULO,
    DESCRIPCION,
    CANT_BULTO,
    CATEGORIA,
    SUB_CATEGORIA,
    PRECIO,
    STOCK,
  } = req.body;

  try {
    const newArticle = new article({
      ID,
      ARTICULO,
      DESCRIPCION,
      CANT_BULTO,
      CATEGORIA,
      SUB_CATEGORIA,
      PRECIO,
      STOCK,
    });    
    
    let image = req.files['IMAGE_URL[]'];    
    
    if (image) {
      if (Array.isArray(image)) {
        for (let index = 0; index < image.length; index++) {
          const result = await uploadImageCloudinary(
            image[index]?.tempFilePath
          );
          newArticle.IMAGE_URL.push({ ...result, article_id: ID });
          await fs.unlink(image[index]?.tempFilePath);
        }
      } else {
        const result = await uploadImageCloudinary(image?.tempFilePath);
        newArticle.IMAGE_URL.push({ ...result, article_id: ID });
        await fs.unlink(image.tempFilePath);
      }
    }

    await newArticle.save();
    
    res.status(200).send({
      status: true,
      message: "Articulo Agregado",
      value: newArticle,
    });
  } catch (error) {
    res
      .status(500)
      .send({ status: false, message: error.message, value: error });
  }
};

const obtenerArticulos = async (req, res) => {
  try {
    const result = await article.find();
    if (result.length !== 0) {
      res
        .status(200)
        .send({ status: true, message: "Articulo encontrado", value: result });
    } else {
      res.status(404).send({
        status: true,
        message: "Articulo No encontrado",
        value: result,
      });
    }
  } catch (error) {
    res
      .status(500)
      .send({ status: true, message: "Articulo encontrado", value: result });
  }
};

const obtenerArticuloXId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await article.find({ ID: id });
    if (result.length !== 0) {
      res
        .status(200)
        .send({ status: true, message: "Articulo encontrado", value: result });
    } else {
      res.status(404).send({
        status: false,
        message: "Articulo no encontrado o articulo invalido",
        value: result,
      });
    }
  } catch (error) {
    res
      .status(500)
      .send({ status: false, message: error.message, value: error });
  }
};

const editarArticulo = async (req, res) => {
  try {
    const { id } = req.params;
    let newArticle = req.body
  
    
    if (req.files && req.files[Object.keys(req.files)]) {
      let image = req.files[Object.keys(req.files)]      
      if (Array.isArray(image)) {
        for (let index = 0; index < image.length; index++) {
          const result = await uploadImageCloudinary(
            image[index]?.tempFilePath
          );
          newArticle.IMAGE_URL.push({ ...result, article_id: id });
          await fs.unlink(image[index]?.tempFilePath);
        }
      } else {
        console.log("image?.tempFilePath: ",image?.tempFilePath)        
        const result = await uploadImageCloudinary(image?.tempFilePath);
        console.log("result: ",result)        
        console.log("newArticle: ",newArticle)
        await fs.unlink(image.tempFilePath);
      }
    }
    
    const result = await article.findOneAndUpdate({ ID: id }, newArticle, {
      new: true,
    });
    if (result) {
      res
        .status(200)
        .send({ status: true, message: "Articulo editado", value: result });
    } else {
      res.status(404).send({
        status: false,
        message: "Articulo no editado o articulo invalido",
        value: result,
      });
    }
  } catch (error) {
    res
      .status(500)
      .send({ status: false, message: error.message, value: error });
  }
};

const eliminarArticulo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await article.findOneAndDelete({ ID: id });
    if (result) {
      res
        .status(200)
        .send({ status: true, message: "Articulo eliminado", value: result });
    } else {
      res.status(400).send({
        status: false,
        message: "Articulo no eliminado o articulo invalido",
        value: result,
      });
    }
  } catch (error) {
    res
      .status(500)
      .send({ status: false, message: error.message, value: error });
  }
};

export {
  agregarArticulo,
  obtenerArticuloXId,
  obtenerArticulos,
  editarArticulo,
  eliminarArticulo,
};
