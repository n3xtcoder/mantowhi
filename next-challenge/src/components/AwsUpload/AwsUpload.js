import React, { useState } from "react";

import ProgressBar from "react-bootstrap/ProgressBar";
import "./AwsUpload.css";
//import S3FileUpload from "react-s3";
require("dotenv").config();
const AWS = require("aws-sdk");

export default function AwsUpload() {
  const [photoUploaded, setPhotoUploaded] = useState([]);

  const [fileuploading, setFileUploading] = useState({});
  const [uploadConfirm, setUploadConfirm] = useState(false);

  const fileSize = photoUploaded.size / 1024 / 1024;

  // configure the keys for accessing AWS
  AWS.config.update({
    apiVersion: "latest",
    accessKeyId: "AKIA32AMNH4PBHGG566Q",
    secretAccessKey: "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",
  });

  // create S3 instance
  const s3 = new AWS.S3();

  const uploadFile = (buffer, name, type) => {
    const params = {
      ACL: "public-read",
      Body: buffer,
      Bucket: "nextcoderchallenge",
      ContentType: type.mime,
      Key: `${name}.${type}`,
    };
    return s3.upload(params, function (err, data) {
      if (err) {
        console.log("There was an error uploading your file: ", err);
        setUploadConfirm(false);
        return false;
      }
      console.log("Successfully uploaded file.", data);

      setUploadConfirm(true);
      return true;
    });
  };

  let uploadPic2 = () => {
    uploadFile(photoUploaded, photoUploaded.name, photoUploaded.type).on(
      "httpUploadProgress",
      (progress) => {
        let uploaded = parseInt((progress.loaded * 100) / progress.total);
        console.log(uploaded);
        setFileUploading({
          progress: uploaded,
          uploadText: "Uploading...",
          uploading: true,
        });
      }
    );
  };

  return (
    <div className="divInput">
      <div>
        <input
          className="chooseInput"
          type="file"
          onChange={(e) => {
            setPhotoUploaded(e.target.files[0]);
          }}
        />
      </div>
      '
      <img
        className="mb-2"
        src="data:image/png;base64,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"
        alt="logo"
        width="100px"
      />
      <button
        className="buttonSize"
        disabled={fileSize > 50 ? true : false}
        onClick={uploadPic2}
      >
        Add file
      </button>
      <ProgressBar
        className="progressBar"
        animated
        now={fileuploading.progress}
      />
      {fileuploading.progress && <p>{`${fileuploading.progress}%`}</p>}
      {fileSize > 50 && <p>The file must be smaller than 50 MB</p>}
      {uploadConfirm && fileuploading.progress === 100 ? (
        <p>Successfully upload file</p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
