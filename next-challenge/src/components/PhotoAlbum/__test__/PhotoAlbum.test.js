import React from "react";
import ReactDOM from "react-dom";
import PhotoAlbum from "./../PhotoAlbum";
import { render } from "@testing-library/react";

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PhotoAlbum></PhotoAlbum>, div);
});
