import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import PhotoList from "./PhotoList";
import { GoTrash } from "react-icons/go";
import { useRemoveUserMutation,useRemoveAlbumMutation } from "../store";
import CircularProgress from "@mui/material/CircularProgress";

const AlbumListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleClick = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <button
        style={{ marginRight: "30px", border: "none", cursor: "pointer" }}
        onClick={handleClick}
      >
        {results.isLoading ? (
          <CircularProgress style={{ width: "20px", height: "20px" }} />
        ) : (
          <GoTrash />
        )}
      </button>
      {album.title}
    </>
  );

  return (
    <div>
      <ExpandablePanel header={header}>
        <PhotoList album={album} />
      </ExpandablePanel>
    </div>
  );
};

export default AlbumListItem;
