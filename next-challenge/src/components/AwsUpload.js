import React, { useState } from "react";
//import S3FileUpload from "react-s3";
require("dotenv").config();
const AWS = require("aws-sdk");

export default function AwsUpload() {
  const [photoUploaded, setPhotoUploaded] = useState([]);
  console.log(photoUploaded);

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
        return false;
      }
      console.log("Successfully uploaded file.", data);
      return true;
    });
  };
  let uploadPic2 = () => {
    uploadFile(photoUploaded, photoUploaded.name, photoUploaded.type);
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setPhotoUploaded(e.target.files[0]);
        }}
      />
      <button onClick={uploadPic2}>Add file</button>
    </div>
  );
}
