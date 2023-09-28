import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import { saveAs } from 'file-saver';

const useStyles = makeStyles((theme) => ({
  
    root: {
    height: "100%",
    textAlign: 'center',
  },
  imgBox: {
    maxWidth: "30%",
    maxHeight: "30%",
    margin: "10px"
  },
  img: {
    height: "inherit",
    maxWidth: "inherit",
  },
  input: {
    display: "none"
  }
}));

const saveFileToLocalSystem = (file) => {
  try {
    saveAs(file, './captured_image.png'); // Specify the desired file name
    console.log('File saved successfully.');
  } catch (error) {
    console.error('Error saving file:', error);
  }
};


const Camera = () => {
  const classes = useStyles();
  const [source, setSource] = useState("");
  const handleCapture = async (target) => {
    if (target.files) {
      // console.log("Pic..")
      if (target.files.length !== 0) {
        const file = target.files[0];
        console.log(file)
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);

        await sendFileToServer(file);

      }
    }
  };

  const sendFileToServer = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('File uploaded successfully.');
      } else {
        console.error('Error uploading file.');
      }
    } catch (error) {
      console.error('Error sending file to server:', error);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          {source &&
            <Box display="flex" justifyContent="center" border={1} className={classes.imgBox}>
              <img src={source} alt={"snap"} className={classes.img}></img>
            </Box>}
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
            capture="environment"
            onChange={(e) => handleCapture(e.target)}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCameraRoundedIcon fontSize="large" color="primary" />
            </IconButton>
          </label>
        </Grid>
      </Grid>
    </div>
  );
}
export default Camera;