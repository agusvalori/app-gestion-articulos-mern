import React from "react";

import { AppBar, Paper, Tab, Tabs, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { HomePage } from "../pages/home/HomePage";
import { CajaPage } from "../pages/caja/CajaPage";
import { VentasPage } from "../pages/ventas/VentasPage";
import { ArticulosPage } from "../pages/articulos/ArticulosPage";
import { ClientesPage } from "../pages/clientes/ClientesPage";
import { ProveedoresPage } from "../pages/proveedores/ProveedoresPage";
import { NotFountPage } from "../pages/NotFountPage";

export const TabPanelAdmin = () => {
  const [values, setValues] = useState(0);
  const useMediaQueryMax = useMediaQuery("(max-width:700px)");

  const SelectTabPanel = (values) => {
    switch (values) {
      case 0:
        return <HomePage />;
      case 1:
        return <CajaPage />;
      case 2:
        return <VentasPage />;
      case 3:
        return <ArticulosPage />;
      case 4:
        return <ClientesPage />;
      case 5:
        return <ProveedoresPage />;

      default:
        return <NotFountPage />;
    }
  };
  return (
    <Box>
      <AppBar
        sx={{ borderRadius: "10px" }}
        position="static"
        color="transparent"
      >
        <Tabs
          value={values}
          indicatorColor="primary"
          variant={!useMediaQueryMax ? "standard" : "scrollable"}
          centered={!useMediaQueryMax}
          scrollButtons
          allowScrollButtonsMobile
          onChange={(event, valueSelect) => setValues(valueSelect)}
        >
          <Tab label="Inicio" />
          <Tab label="Caja" />
          <Tab label="Venta" />
          <Tab label="Articulos" />
          <Tab label="Clientes" />
          <Tab label="Proveedores" />
        </Tabs>
      </AppBar>
      <Paper
        elevation={4}
        sx={{
          marginTop: "10px",
          padding: "10px",
          borderRadius: "10px",
          height: "82vh",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "4px",
            display: "none" /* Ocultar scroll */,
          },
        }}
      >
        {SelectTabPanel(values)}
      </Paper>
    </Box>
  );
};
