import React from 'react'
import { useRemovePhotoMutation } from '../store';
import { CircularProgress } from '@mui/material';
import { GoTrash } from 'react-icons/go';

const PhotoListItem = ({photo}) => {
    const [removePhoto, results] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };
  return (
    <div className='photo' style={{margin:"20px",cursor:'pointer',position:'relative'}} onClick={handleRemovePhoto}>
      <img src={photo.url} alt="photo" />
      <div style={{position:'absolute',top:'50%',left:'50%',color:'white',fontSize:'30px',transform:'translate(-50%,-50%)'}}>
      {results.isLoading ? (
          <CircularProgress style={{ width: "20px", height: "20px" }} />
        ) : (
          <GoTrash  />
        )}
      </div>
    </div>
  )
}

export default PhotoListItem
