import React, { useState } from "react";
import FileUploadProgress from "react-fileupload-progress";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./AwsUpload.css";
//import S3FileUpload from "react-s3";
require("dotenv").config();
const AWS = require("aws-sdk");

export default function AwsUpload() {
  const [photoUploaded, setPhotoUploaded] = useState([]);
  const [awsFile, setAwsFile] = useState({});
  const [fileuploading, setFileUploading] = useState({});
  const [uploadConfirm, setUploadConfirm] = useState(false);
  console.log(awsFile);
  console.log(photoUploaded);

  const fileSize = photoUploaded.size / 1024 / 1024;
  console.log("Size", fileSize);

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
      setAwsFile(data);
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
      {uploadConfirm && <p>Successfully upload file</p>}
    </div>
  );
}
