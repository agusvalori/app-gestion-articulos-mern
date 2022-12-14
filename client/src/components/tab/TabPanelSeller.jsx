import React, { useState } from "react";
import { AppBar, Tab, Tabs, useMediaQuery, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { HomePage } from "../pages/home/HomePage";
import { ArticulosPage } from "../pages/articulos/ArticulosPage";
import { NotFountPage } from "../pages/NotFountPage";

export const TabPanelSeller = () => {
  const [values, setValues] = useState(0);
  const useMediaQueryMax = useMediaQuery("(max-width:700px)");

  const SelectTabPanel = (values) => {
    switch (values) {
      case 0:
        return <HomePage />;
      case 1:
        return <ArticulosPage />;
      default:
        return <NotFountPage />;
    }
  };
  return (
    <Box>
      <AppBar
        sx={{ borderRadius: "15px" }}
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
          <Tab label="Articulos" />        
        </Tabs>
      </AppBar>
      <Paper
        elevation={3}
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
