import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import axios from 'axios';

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
      const response = await fetch('http://192.168.56.1:3000/upload', {
        method: 'POST',
        body: formData,
      }).then((response) => response.json())
        .then((response) => {

          const data = {
            imageUrl: 'https://example.com/image.jpg', // Replace with your image URL
            imageName: response,
          };

          // Make a POST request to the server
          axios.post('http://192.168.56.1:3000/process_capture', data)
            .then((response) => {
              // Handle the response here
              if (response.status === 200) {
                console.log(response.data);

                // You can update state or perform other actions with the response data here
              } else {
                console.error('Request failed with status code:', response.status);
              }
            })
            .catch((error) => {
              // Handle any errors that occurred during the request
              console.error('An error occurred while making the request:', error);
            });


          console.log(response);
        });


    } catch (error) {
      console.error('Error sending file to server:', error);
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