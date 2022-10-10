import React from "react";
import { Fab, IconButton, Input, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useEffect } from "react";
import { useState } from "react";

export const ArticuloAddEditImage = ({ values }) => {
  const [imagenes, setImagenes] = useState(values?.IMAGE_URL);
  const [helperText, setHelperText] = useState("");

  const handleChange = (event, index) => {
    console.log("handleChange: ", index);
    const { files } = event.target;
    if (files.length === 1 && /.(jpeg|jpg|png)$/i.test(files[0].name)) {
      setImagenes([...imagenes, files[0]]);
      setHelperText("");
    } else {
      setHelperText(
        "Archivo de imagen invalido, formatos validos .jpeg, .jpg y .png"
      );
    }
  };

  const RenderImage = ({ image }) => {
    if (image?.secure_url) {
      return (
        
          <Box
            key={image?.public_id}
            sx={{
              width: "80px",
              height: "80px",
              display: "flex",
              justifyContent: "center",
              border: "solid 1px blue",
            }}
          >
            <img width="75px" height="75px" src={image.secure_url} />
            <Fab size="small" aria-label="remove">
              <RemoveCircleIcon fontSize="small" color="error" />
            </Fab>
          </Box>
        
      );
    } else {
      return (
        <Box
          key={image?.public_id}
          sx={{
            width: "80px",
            height: "80px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img width="75px" height="75px" src={URL.createObjectURL(image)} />
          <Box sx={{ position: "relative", top: "-20%", left: "-10px" }}>
            <IconButton size="small">
              <RemoveCircleIcon fontSize="small" color="error" />
            </IconButton>
          </Box>
        </Box>
      );
    }
  };

  const RenderAddImage = ({ index }) => {
    return (
      <Box
        sx={{
          width: "75px",
          height: "75px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label>
          <Input
            name="IMAGE_URL"
            type="file"
            onChange={(event) => handleChange(event, index)}
            sx={{ display: "none" }}
            multiple
          />
          <IconButton sx={{ backgroundColor: "#eeeeee" }} component="span">
            <AddPhotoAlternateIcon color="success" />
          </IconButton>
        </label>
      </Box>
    );
  };

  const RenderItems = ({ index }) => {
    return Array.isArray(imagenes) && imagenes[index] ? (
      <RenderImage image={imagenes[index]} />
    ) : (
      <RenderAddImage index={index} />
    );
  };

  useEffect(() => {}, [imagenes]);

  return (
    <Box>
      <Paper>
        <Box
          sx={{
            display: "grid",
            columnGap: "5px",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            border: "1px solid black",
          }}
        >
          <RenderItems index={0} />
          <RenderItems index={1} />
          <RenderItems index={2} />
          <RenderItems index={3} />
        </Box>
        <Box>
          <Typography color={"red"} fontSize={"small"}>
            {helperText && helperText}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
