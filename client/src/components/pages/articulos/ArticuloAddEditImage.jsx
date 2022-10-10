import React from "react";
import { IconButton, Input, Modal, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useEffect } from "react";
import { useState } from "react";

export const ArticuloAddEditImage = ({ values }) => {  
  const [imagenes, setImagenes] = useState(values?.IMAGE_URL)

  const handleChange = (event,index) => {
    console.log("handleChange: ",index)
    const { files } = event.target;
    if (files.length === 1 && /.(jpeg|jpg|png)$/i.test(files[0].name)) {
      imagenes[index] = files[0];
    } else {
      console.log(
        "Archivo de imagen invalido, formatos validos .jpeg, .jpg y .png"
      );
    }
  };

  const RenderImage = ({ image }) => {
    if (image?.secure_url) {
      return (
        <Box key={image?.public_id} sx={{ border: "1px solid" }}>
          <img width="75px" src={image.secure_url} />
        </Box>
      );
    } else {
      return (
        <Box key={image?.public_id} sx={{ border: "1px solid" }}>
          <img width="75px" src={URL.createObjectURL(image)} />
        </Box>
      );
    }
  };

  const RenderAddImage = ({index}) => {
    console.log("RenderAddImage: ",index)
    return (
      <Box
        sx={{
          width: "75px",
          display: "flex",
          justifyContent: "center",
          border: "solid 1px",
        }}
      >
        <label>
          <Input
            name="IMAGE_URL"
            type="file"
            //helperText={helperTextImage}
            onChange={(event) => handleChange(event, index)}
            sx={{ display: "none" }}
            multiple
          />
          <IconButton sx={{ backgroundColor: "#eeeeee" }} component="span">
            <AddPhotoAlternateIcon />
          </IconButton>
        </label>
      </Box>
    );
  };

  const RenderItems = ({ index }) => {
    console.log("RenderItems: ",imagenes[index])
    return Array.isArray(imagenes) && imagenes[index] ? (
      <RenderImage image={imagenes[index]} />
    ) : (
      <RenderAddImage index={index} />
    );
  };

  useEffect(() => {
    console.log(imagenes);
  }, [imagenes]);

  return (
    <Box>
      <Paper>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <RenderItems index={0} />
          <RenderItems index={1} />
          <RenderItems index={2} />
          <RenderItems index={3} />
        </Box>
      </Paper>
    </Box>
  );
};
