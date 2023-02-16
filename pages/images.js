import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
} from "firebase/storage";
import { storage } from "../src/firebase/clientApp";
import { v4 } from "uuid";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Image from "next/image";
import Masonry from "@mui/lab/Masonry";

//reference to the "images" folder in Firebase storage
const imagesListRef = ref(storage, "images/");

function Images({}) {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadFile = () => {
    if (imageUpload == null) return;
    //new reference to a unique image file in Firebase storage
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    //Upload the image file to Firebase storage and get a snapshot of it
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      // Get the download URL for the uploaded image
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  const deleteImage = (url) => {
    // Get a reference to the image in Firebase storage using its download URL
    const imageRef = ref(storage, url);
    deleteObject(imageRef).then(() => {
      // Delete the image file from Firebase storage
      setImageUrls((prev) => prev.filter((item) => item !== url));
    });
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    try {
      listAll(imagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrls((prev) => [url, ...prev]);
          });
        });
      });
    } catch (error) {
      console.log(error);
      setError("Error loading images.");
    } finally {
      setIsLoading(false);
    }
  }, [imagesListRef]);

  // Handle Dialog

  const handleImageClick = (url) => {
    setSelectedImage(url);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setDialogOpen(false);
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h4" color="error" gutterBottom>
        Error: {error.message}
      </Typography>
    );
  }

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Image Upload
        </Typography>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Grid container spacing={2} sx={{ mb: "20px" }}>
            <Grid item xs={12} sm={8}>
              <input
                type="file"
                onChange={(event) => {
                  setImageUpload(event.target.files[0]);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                variant="contained"
                startIcon={<CloudUploadIcon />}
                onClick={uploadFile}
                fullWidth
              >
                Upload
              </Button>
            </Grid>
          </Grid>
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
            {imageUrls?.map((url, index) => (
              <Box key={index} onClick={() => handleImageClick(url)}>
                <Paper elevation={3} sx={{ position: "relative", p: 1 }}>
                  <img src={url} alt="uploaded" width="100%" />
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteImage(url)}
                    sx={{ position: "absolute", top: 8, right: 8 }}
                  >
                    Delete
                  </Button>
                </Paper>
              </Box>
            ))}
          </Masonry>
        </Paper>
      </Container>
      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle>Selected Image</DialogTitle>
        <DialogContent>
          <Box sx={{ maxWidth: "100%" }}>
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="selected"
                width={1200}
                height={1200}
                objectFit="contain"
              />
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Images;
