import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
// @mui

import { Typography } from '@mui/material';

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

LightboxModal.propTypes = {
  images: PropTypes.array.isRequired,
  photoIndex: PropTypes.number,
  setPhotoIndex: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default function LightboxModal({ images, photoIndex, setPhotoIndex, isOpen, ...other }) {

  console.log('isOpen', isOpen)


  const showIndex = (
    <Typography variant="subtitle2">{`${photoIndex + 1} / ${images.length}`}</Typography>
  );

  const toolbarButtons = [showIndex];

  const customStyles = {
    overlay: {
      zIndex: 9999,
    },
  };

  return (
    <>
      {isOpen && (
        <Lightbox
          animationDuration={240}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          toolbarButtons={toolbarButtons}
          reactModalStyle={customStyles}
          {...other}
        />
      )}
    </>
  );
}
