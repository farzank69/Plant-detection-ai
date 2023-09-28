import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import { Axios } from 'axios';
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

const API_KEY = "6d207e02198a847aa98d0a2a901485a5"

const Camera = () => {
  const classes = useStyles();
  const [source, setSource] = useState("");
  const handleCapture = (target) => {
    if (target.files) {
      // console.log("Pic..")
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
        
        const formData = new FormData();
 
        // Update the formData object
        formData.append(
            "myFile",
            file
        );
 
        // Details of the uploaded file
        console.log(formData);
 
        // Request made to the backend api
        // Send formData object
        axios.post("http://localhost:3000/upload", formData);
      }
    }
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
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