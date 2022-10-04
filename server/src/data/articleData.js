const agregarArticulo = (req, res) => {
  res.send("agregarArticulo");
};

const obtenerArticulos = (req, res) => {
  res.send("obtenerArticulos");
};

const obtenerArticuloXId = (req, res) => {
  res.send("obtenerArticuloXId");
};

const editarArticulo = (req, res) => {
  res.send("editarArticulo");
};

const eliminarArticulo = (req, res) => {
  res.send("eliminarArticulo");
};

export {
  agregarArticulo,
  obtenerArticuloXId,
  obtenerArticulos,
  editarArticulo,
  eliminarArticulo,
};
