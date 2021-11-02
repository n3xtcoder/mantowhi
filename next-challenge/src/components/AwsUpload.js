import React, { useState } from "react";

export default function AwsUpload() {
  const [photoUploaded, setPhotoUploaded] = useState([]);

  return (
    <div>
      <input
        type="file"
        onChange={(e) => setPhotoUploaded(e.target.files[0])}
      />
    </div>
  );
}
