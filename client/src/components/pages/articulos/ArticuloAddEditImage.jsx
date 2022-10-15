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
        IMAGE_FILES: [...values.IMAGE_FILES, files[0]],
      });
      setHelperText("");
    } else {
      setHelperText(
        "Archivo de imagen invalido, formatos validos .jpeg, .jpg y .png"
      );
    }
  };

  const handleImageDelete = (image) => {
    if (image.secure_url) {
      setValues({
        ...values,
        IMAGE_URL: values.IMAGE_URL.filter((img) => img != image),
      });
    } else if (image.name) {
      setValues({
        ...values,
        IMAGE_FILES: values.IMAGE_FILES.filter((img) => img != image),
      });
    }
  };

  // ########################################################################
  const RenderImageURL = ({ image }) => {
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
  };

  // ########################################################################
  const RenderImageFiles = ({ image }) => {
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
  };

  // ########################################################################
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
            name="IMAGE_FILES"
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

  const RenderItems = () => {
    let imageUrl = values.IMAGE_URL;
    let imageFiles = values.IMAGE_FILES;
    let imageLength = imageFiles.length + imageUrl.length;
    let renderView = [];

    renderView.push(
      values.IMAGE_URL.map((image) => (
        <RenderImageURL key={image.public_id} image={image} />
      ))
    );

    renderView.push(
      values.IMAGE_FILES.map((image, index) => (
        <RenderImageFiles key={image.name + index} image={image} />
      ))
    );

    //renderizamos los AddImage
    for (let index = imageLength; index < 4; index++) {
      renderView.push(<RenderAddImage />);
    }
    return renderView;
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
          <RenderItems />
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
