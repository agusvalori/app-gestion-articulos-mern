import article from "../entity/articleEntity.js";
import { addArticleImage } from "./articleImageData.js";

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

    newArticle.IMAGE_URL = addArticleImage(req.files);

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
    const result = await article.find().sort({ ID: 1 });
    if (result.length !== 0) {
      res
        .status(200)
        .send({ status: true, message: "Articulo encontrado", value: result });
    } else {
      res.status(200).send({
        status: true,
        message: "No hay articulos agregados",
        value: result,
      });
    }
  } catch (error) {
    res
      .status(500)
      .send({ status: false, message: error.message, value: error });
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
    let newArticle = new article(req.body);

    let imageUrl = req?.body?.IMAGE_URL ? JSON.parse(req?.body?.IMAGE_URL) : [];

    let image = req?.files ? req?.files[Object.keys(req.files)[0]] : false;
    if (image) {
      if (Array.isArray(image)) {
        for (let index = 0; index < image.length; index++) {
          const result = await uploadImageCloudinary(
            image[index]?.tempFilePath
          );
          imageUrl.push({
            article_id: id,
            public_id: result.public_id,
            secure_url: result.secure_url,
          });
          await fs.unlink(image[index]?.tempFilePath);
        }
      } else {
        const result = await uploadImageCloudinary(image?.tempFilePath);
        imageUrl.push({
          article_id: id,
          public_id: result.public_id,
          secure_url: result.secure_url,
        });
        await fs.unlink(image.tempFilePath);
      }
    }

    const update = await article.updateOne({ ID: id }, newArticle);
    if (imageUrl.length <= 4) {
      await article.updateOne({ ID: id }, { IMAGE_URL: imageUrl });
    } else {
      console.log("No se puede agregar mas de 4 imagenes");
    }

    if (update.matchedCount > 0 || update.modifiedCount > 0) {
      res
        .status(200)
        .send({ status: true, message: "Articulo editado", value: update });
    } else {
      res.status(404).send({
        status: false,
        message: "Articulo no editado o articulo invalido",
        value: update,
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

const eliminarImagen = async (req, res) => {
  const { public_id } = req.body;
  const { article_id } = req.params;

  const result = await deleteImageCloudinary(public_id);
  //buscarmos articulo para eliminar url de la imagen
  if (result.status) {
    const findResult = await article.find({ ID: article_id });

    if (Array.isArray(findResult) && findResult[0].IMAGE_URL.length > 0) {
      let articulo = findResult[0];

      const resultEditImage = await article.findOneAndUpdate(
        { ID: article_id },
        {
          IMAGE_URL: articulo?.IMAGE_URL?.filter(
            (item) => item.public_id != public_id
          ),
        },
        {
          new: true,
        }
      );

      res.status(200).send({
        status: true,
        message: "Imagen elimianda de cloudinary",
        value: resultEditImage,
      });
    } else {
      res.status(404).send({
        status: false,
        message: "Articulo no encontrado o No posee imagen en cloudinary",
        value: findResult,
      });
    }
  } else {
    res.status(404).send({
      status: false,
      message: "No se pudo eliminar la imagen de cloudinary",
      value: result,
    });
  }
};

const eliminarTodosLosArticulos = async (req, res) => {
  try {
    const result = await article.deleteMany();
    res.status(200).send({
      status: true,
      message: "Se eliminaron todos los articulos",
      value: result,
    });
  } catch (error) {
    res.status(404).send({
      status: false,
      message: "No se pudieron eliminar todos los articulos",
      value: error,
    });
  }
};

export {
  agregarArticulo,
  obtenerArticuloXId,
  obtenerArticulos,
  editarArticulo,
  eliminarArticulo,
  eliminarImagen,
  eliminarTodosLosArticulos,
};
