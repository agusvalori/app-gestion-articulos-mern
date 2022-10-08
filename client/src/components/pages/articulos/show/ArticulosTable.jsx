import { Box } from "@mui/material";
import React, { } from "react";

import { FixedSizeList as List } from "react-window";

export const ArticulosTable = () => {

  const Row = ({ index, style }) => (
    <Box sx={{display:'flex',width:'100%'}} style={style}>
      Row{index}
    </Box>
  );

  const Table = () => (
    <List height={400} itemCount={100} itemSize={35} width={1000}>
      {Row}
    </List>
  );



  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Table />
    </Box>
  );
};
