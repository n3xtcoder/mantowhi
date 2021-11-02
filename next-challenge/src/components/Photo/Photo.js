import React, { useContext } from "react";

import { VariablesContext } from "../../context/VariablesContext";
import { Link, useParams } from "react-router-dom";
import "./Photo.css";

export default function Photo() {
  const { photoAlbum } = useContext(VariablesContext);

  let { id } = useParams();

  // Functions allow to switch between images
  let nextId = () => {
    return Number(id) + 1;
  };
  let prevId = () => {
    return Number(id) - 1;
  };

  return (
    <div>
      <div className="d-flex justify-content-center m-1  ">
        {photoAlbum &&
          photoAlbum.map((photo) => {
            if (photo.id === Number(id)) {
              return (
                <img
                  className="photoMobile"
                  src={photo.url}
                  alt={photo.title}
                />
              );
            }
          })}
      </div>
      <div className="buttonSwitch">
        <Link to={`${prevId()}`}>
          <button className="buttonLR" disabled={id === "1" ? true : false}>
            Prev
          </button>
        </Link>
        <Link to={`${nextId()}`}>
          <button className="buttonLR" disabled={id === "50" ? true : false}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
