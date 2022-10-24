import React, { useEffect, useState } from "react";
import { FixedSizeList } from "react-window";
import { Box } from "@mui/system";
import {
    Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { ArticuloAddEdit } from "../ArticuloAddEdit";
import { ArticuloDelet } from "../ArticuloDelet";

export const ArticuloTableVir = ({ articulos }) => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  const Row = ({ index, style }) => {
    let color = "#CBD5DD";
    if (index % 2 === 0) {
      color = "#FAF8F6";
    }
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "15% 30% 30% 9% 8% 6%",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: color,
        }}
        style={style}
      >
        <Typography fontSize={"14px"}>{articulos[index]?.ID}</Typography>
        <Typography fontSize={"14px"}>{articulos[index]?.CATEGORIA}</Typography>
        <Typography fontSize={"14px"}>{articulos[index]?.ARTICULO}</Typography>
        <Typography fontSize={"14px"}>
          ${articulos[index]?.PRECIO ? articulos[index].PRECIO.toFixed(2) : 0}
        </Typography>
        <Typography fontSize={"14px"}>{articulos[index]?.STOCK}</Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ArticuloAddEdit articulo={articulos[index]} />
          <ArticuloDelet articulo={articulos[index]} />
        </Box>
      </Box>
    );
  };

  return (
    <Paper sx={{padding:'5px',}}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "15% 30% 30% 9% 8% 7%",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "orange",
          height: "40px",
          width: "98.5%",
        }}
      >
        <Typography fontSize={"14px"}>ID</Typography>
        <Typography fontSize={"14px"}>CATEGORIA</Typography>
        <Typography fontSize={"14px"}>ARTICULO</Typography>
        <Typography fontSize={"14px"}>PRECIO</Typography>
        <Typography fontSize={"14px"}>STOCK</Typography>
        <Typography fontSize={"14px"}></Typography>
      </Box>
      <Box>
        <FixedSizeList
          height={screenSize.dynamicHeight * 0.65}
          itemCount={articulos.length}
          itemSize={45}
          width={"100%"}
        >
          {Row}
        </FixedSizeList>
      </Box>
    </Paper>
  );
};
