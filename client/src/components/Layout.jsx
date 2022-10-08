import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { TabPanelAdmin } from "./tab/TabPanelAdmin";
import { TabPanelSeller } from "./tab/TabPanelSeller";
import { useArticle } from "../context/ArticleContext";

export const Layout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const { obtenerArticulos } = useArticle();
  useEffect(() => {
    obtenerArticulos();
  }, []);

  return <Box>{isAuthenticated ? <TabPanelAdmin /> : <TabPanelSeller />}</Box>;
};
