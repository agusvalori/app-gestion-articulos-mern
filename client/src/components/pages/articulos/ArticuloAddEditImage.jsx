import React, { useState } from "react";
import { IconButton, Input, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export const ArticuloAddEditImage = ({ values, setValues }) => {
  const [helperText, setHelperText] = useState("");

  const handleChange = (event, index) => {
    const { files } = event.target;
    if (files.length === 1 && /.(jpeg|jpg|png)$/i.test(files[0].name)) {                  
      setValues({
        ...values,
        IMAGE_URL: [...values.IMAGE_URL, files[0]],        
      });
      setHelperText("");
    } else {
      setHelperText(
        "Archivo de imagen invalido, formatos validos .jpeg, .jpg y .png"
      );
    }
  };

  const handleImageDelete = (image) => {
    setValues({
      ...values,
      IMAGE_URL: values.IMAGE_URL.filter((img) => img != image),
    });
  };

  const RenderImage = ({ image }) => {
    if (image?.secure_url) {
      return (
        <Box
          key={image?.public_id}
          sx={{
            width: "80px",
            height: "80px",
            backgroundImage: `url(${image.secure_url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box sx={{ position: "relative", top: "-20%", left: "80%" }}>
            <IconButton onClick={() => handleImageDelete(image)} size="small">
              <RemoveCircleIcon fontSize="small" color="error" />
            </IconButton>
          </Box>
        </Box>
      );
    } else {
      return (
        <Box
          key={image?.public_id}
          sx={{
            width: "80px",
            height: "80px",
            backgroundImage: `url(${URL.createObjectURL(image)})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box sx={{ position: "relative", top: "-20%", left: "80%" }}>
            <IconButton onClick={() => handleImageDelete(image)} size="small">
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
    return Array.isArray(values.IMAGE_URL) && values.IMAGE_URL[index] ? (
      <RenderImage image={values.IMAGE_URL[index]} />
    ) : (
      <RenderAddImage index={index} />
    );
  };

  return (
    <Box>
      <Paper>
        <Box
          sx={{
            display: "grid",
            columnGap: "5px",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
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
