import React, { useContext } from "react";
import { VariablesContext } from "../../context/VariablesContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./PhotoAlbum.css";

export default function PhotoAlbum() {
  const { photoAlbum } = useContext(VariablesContext);

  return (
    <div className="mt-4">
      <Container>
        <Row className="justify-content-center">
          {photoAlbum.length > 0 &&
            photoAlbum.map((photo) => {
              return (
                <Link key={photo.id} to={`details/${photo.id}`}>
                  <Col xs={6} md={4} lg={1} xl={1}>
                    <img
                      className="picSize"
                      src={photo.thumbnailUrl}
                      width="60px"
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
