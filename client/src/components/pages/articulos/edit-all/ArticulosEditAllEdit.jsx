import React, { useState, useEffect } from "react";

import { useArticle } from "../../../../context/ArticleContext";
import { ArticulosEditAllEditPrecio } from "./ArticulosEditAllEditPrecio";
import { ArticulosEditAllEditAction } from "./ArticulosEditAllEditAction";
import { Box, Paper, Typography } from "@mui/material";
import { ArticulosEditAllEditCatYSubcat } from "./ArticulosEditAllEditCatYSubcat";

export const ArticulosEditAllEdit = ({
  articulosFiltrados,
  articulosAux,
  setArticulosAux,
  valuesSelect,
  handleClose,
}) => {
  const { editarArticulo } = useArticle();
  const [status, setStatus] = useState("mostrar");
  /*
  Estados validos
  mostrar
  aplicar
  error
  loading
  */
  const initialValues = {
    priceValue: 0,
    priceTipo: "monto",
    priceOperacion: "aumentar",
    subCategoriaNueva: valuesSelect.SUB_CATEGORIA,
    categoriaNueva: valuesSelect.CATEGORIA,
  };
  const [values, setValues] = useState(initialValues);

  const handleShowChange = () => {
    setArticulosAux([]);
    for (const articulo of articulosFiltrados) {
      setArticulosAux((aux) => [
        ...aux,
        {
          ...articulo,
          PRECIO: handleShowChangePrice(articulo),
          CATEGORIA:
            values?.categoriaNueva === "Todos"
              ? articulo.CATEGORIA
              : values?.categoriaNueva,
          SUB_CATEGORIA:
            values?.subCategoriaNueva === "Todos"
              ? articulo.SUB_CATEGORIA
              : values?.subCategoriaNueva,
        },
      ]);
    }
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

  const handleApplyChange = async () => {
    setStatus("loading");

    for (const [index, articulo] of articulosAux.entries()) {
      const result = await editarArticulo({ ...articulo });
      console.log("Editando articulo: ",index," de ",articulosAux.length)
      if (!result.status) {
        setStatus("error");
      }
    }
    setStatus("mostrar");
    handleClose();
  };

  const handleAbortChange = () => {
    setArticulosAux([]);
    setStatus("mostrar");
  };

  useEffect(() => {
    setValues({
      priceValue: 0,
      priceTipo: "monto",
      priceOperacion: "aumentar",
      subCategoriaNueva: valuesSelect.SUB_CATEGORIA,
      categoriaNueva: valuesSelect.CATEGORIA,
    });
  }, [valuesSelect]);

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
        <ArticulosEditAllEditCatYSubcat
          values={values}
          setValues={setValues}
          categoriasSelect={valuesSelect.CATEGORIA}
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
