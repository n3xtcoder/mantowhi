import React, { useState, useContext } from "react";

import { VariablesContext } from "../../context/VariablesContext";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import "./Photo.css";

export default function Photo() {
  let { id } = useParams();
  let nextId = () => {
    return Number(id) + 1;
  };
  let prevId = () => {
    return Number(id) - 1;
  };

  const { photoAlbum, setPhotoAlbum } = useContext(VariablesContext);

  return (
    <div>
      <div className="d-flex justify-content-center m-1  ">
        {photoAlbum.map((photo) => {
          if (photo.id == id) {
            return <img className="photoMobile" src={photo.url} />;
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
