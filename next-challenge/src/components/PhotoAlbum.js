import React, { useState, useContext } from "react";
import { VariablesContext } from "../context/VariablesContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

export default function PhotoAlbum() {
  const { photoAlbum, setPhotoAlbum } = useContext(VariablesContext);

  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          {photoAlbum.length > 0 &&
            photoAlbum.map((photo) => {
              return (
                <Link to={`details/${photo.id}`}>
                  <Col key={photo.id} xs={6} md={3} lg={1}>
                    <img
                      src={photo.thumbnailUrl}
                      width="150px"
                      alt={photo.title}
                    />
                  </Col>
                </Link>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}
