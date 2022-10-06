import article from "../entity/articleEntity.js";

const agregarArticulo = async (req, res) => {
  const {
    ID,
    ARTICULO,
    DESCRIPCION,
    CANT_BULTO,
    CATEGORIA,
    SUB_CATEGORIA,
    IMAGE_URL,
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
      IMAGE_URL,
      PRECIO,
      STOCK,
    });
    const result = await newArticle.save();
    console.log(result)
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
      res.status(200).send({ status: true, message: "Articulo encontrado", value: result });
    } else {
      res.status(404).send({
        status: true,
        message: "Articulo No encontrado",
        value: result,
      });
    }
  } catch (error) {
    res.status(500).send({ status: true, message: "Articulo encontrado", value: result });
  }
};

const obtenerArticuloXId = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("req.params", req.params);
    const result = await article.find({ ID: id });
    if (result.length !== 0) {
      res.status(200).send({ status: true, message: "Articulo encontrado", value: result });
    } else {
      res.status(404).send({
        status: false,
        message: "Articulo no encontrado o articulo invalido",
        value: result,
      });
    }
  } catch (error) {
    res.status(500).send({ status: false, message: error.message, value: error });
  }
};

const editarArticulo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await article.findOneAndUpdate({ ID: id }, req.body, {
      new: true,
    });
    if (result) {
      res.status(200).send({ status: true, message: "Articulo editado", value: result });
    } else {
      res.status(404).send({
        status: false,
        message: "Articulo no editado o articulo invalido",
        value: result,
      });
    }
  } catch (error) {
    res.status(500).send({ status: false, message: error.message, value: error });
  }
};

const eliminarArticulo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await article.findOneAndDelete({ ID: id });    
    if (result) {
      res.status(200).send({ status: true, message: "Articulo eliminado", value: result });
    } else {
      res.status(400).send({
        status: false,
        message: "Articulo no eliminado o articulo invalido",
        value: result,
      });
    }
  } catch (error) {
    res.status(500).send({ status: false, message: error.message, value: error });
  }
};

export {
  agregarArticulo,
  obtenerArticuloXId,
  obtenerArticulos,
  editarArticulo,
  eliminarArticulo,
};
