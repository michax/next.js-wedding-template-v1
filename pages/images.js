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
import { Box } from "@mui/material";

//reference to the "images" folder in Firebase storage
const imagesListRef = ref(storage, "images/");

function Images({}) {
  const [imageUpload, setImageUpload] = useState(null);

  const [imageUrls, setImageUrls] = useState([]);

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
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, [imagesListRef]);

  return (
    <div className="imagesContainer">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      {imageUrls?.map((url, index) => {
        return (
          <Box key={index}>
            <img className="img" src={url} alt="text" />
            <button onClick={() => deleteImage(url)}>Delete</button>
          </Box>
        );
      })}
    </div>
  );
}

export default Images;
