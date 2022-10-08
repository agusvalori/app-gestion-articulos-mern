import React, { useState } from "react";
import { Box } from "@mui/system";
import { TabPanelAdmin } from "./tab/TabPanelAdmin";
import { TabPanelSeller } from "./tab/TabPanelSeller";
import { ArticuloContextProvider } from "../context/ArticleContext";

export const Layout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <Box>
      <ArticuloContextProvider>
        {isAuthenticated ? <TabPanelAdmin /> : <TabPanelSeller />}
      </ArticuloContextProvider>
    </Box>
  );
};
