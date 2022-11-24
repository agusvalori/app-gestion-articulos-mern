import React, { useState, useSyncExternalStore } from "react";

import { useArticle } from "../../../../context/ArticleContext";
import { ArticulosEditAllEditPrecio } from "./ArticulosEditAllEditPrecio";
import { ArticulosEditAllEditAction } from "./ArticulosEditAllEditAction";
import { Box, Paper, Typography } from "@mui/material";
import { ArticulosEditAllEditCat } from "./ArticulosEditAllEditCat";
import { ArticulosEditAllEditSubcat } from "./ArticulosEditAllEditSubcat";

export const ArticulosEditAllEdit = ({
  articulosFiltrados,
  articulosAux,
  setArticulosAux,
  valuesSelect,
  handleClose,
}) => {
  const { editarArticulo } = useArticle();
  const [status, setStatus] = useState("mostrar");
  const initialValues = {
    priceValue: 0,
    priceTipo: "monto",
    priceOperacion: "aumentar",
    subCategoriaNueva: "",
    categoriaNueva: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleShowChange = () => {
    setArticulosAux([]);

    articulosFiltrados.forEach((articulo) => {
      setArticulosAux((aux) => [
        ...aux,
        {
          ...articulo,
          PRECIO: handleShowChangePrice(articulo),
          CATEGORIA: handleShowChangeCat(articulo),
          SUB_CATEGORIA: handleShowChangeSubCat(articulo),
        },
      ]);
    });

    handleShowChangePrice();
    handleShowChangeCat();
    handleShowChangeSubCat();
    setStatus("aplicar");
  };

  const handleShowChangePrice = (articulo) => {
    const { priceTipo, priceOperacion } = values;
    if (articulo) {
      if (priceTipo === "monto" && priceOperacion === "aumentar") {
        return articulo.PRECIO + Number(values.priceValue);
      }

      if (priceTipo === "monto" && priceOperacion === "disminuir") {
        return articulo.PRECIO - Number(values.priceValue);
      }

      if (priceTipo === "porcentaje" && priceOperacion === "aumentar") {
        return (
          articulo.PRECIO + (articulo.PRECIO * Number(values.priceValue)) / 100
        );
      }

      if (priceTipo === "porcentaje" && priceOperacion === "disminuir") {
        return (
          articulo.PRECIO - (articulo.PRECIO * Number(values.priceValue)) / 100
        );
      }
    }
  };

  const handleShowChangeCat = (articulo) => {
    if (articulo) {
      return articulo.CATEGORIA;
    }
  };

  const handleShowChangeSubCat = (articulo) => {
    if (articulo) {
      return articulo.SUB_CATEGORIA;
    }
  };

  const handleApplyChange = async () => {
    console.log("handleApplyChange");
    /*
    setLoading(true);
    articulosAux.forEach(async (articulo, index) => {
      await editarArticulo({
        ...articulo,
      });
      setLoading(index === articulosAux.length - 1);
    });
    */
  };

  const handleAbortChange = () => {
    setArticulosAux([]);
    setStatus("mostrar");
  };

  return (
    <Paper sx={{ padding: "5px" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>Editar articulos Filtrados</Typography>
      </Box>
      <Box>
        <ArticulosEditAllEditPrecio
          status={status}
          values={values}
          setValues={setValues}
        />
        <ArticulosEditAllEditCat
          values={values}
          setValues={setValues}
          categoriasSelect={valuesSelect.CATEGORIA}
        />
        <ArticulosEditAllEditSubcat
          values={values}
          setValues={setValues}
          subCategoriasSelect={valuesSelect.SUB_CATEGORIA}
        />
      </Box>

      <Box sx={{ margin: "10px 0px" }}>
        <ArticulosEditAllEditAction
          status={status}
          handleShowChange={handleShowChange}
          handleApplyChange={handleApplyChange}
          handleAbortChange={handleAbortChange}
          handleClose={handleClose}
        />
      </Box>
    </Paper>
  );
};
