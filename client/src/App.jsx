import React from "react";
import { Layout } from "./components/Layout";
import { ArticuloContextProvider } from "./context/ArticleContext";

export const App = () => {
  return (
    <div>
      <ArticuloContextProvider>
        <Layout />
      </ArticuloContextProvider>
    </div>
  );
};
