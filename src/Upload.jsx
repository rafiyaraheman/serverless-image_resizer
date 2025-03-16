
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { getUploadUrl, getDownloadUrl } from "./api";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      // Allow only JPG, JPEG, PNG (Block GIF, BMP, etc.)
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

      if (!allowedTypes.includes(file.type)) {
        alert("Invalid file type! Please select a JPG, JPEG, or PNG image.");
        return;
      }

      setSelectedFile(file);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/jpg": [],
      "image/png": [],
    }, // Only allow JPG, JPEG, PNG
  });

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please choose a file first!");
      return;
    }
    setUploading(true);
    try {
      const uploadUrl = await getUploadUrl(selectedFile.name, selectedFile.type);
      if (!uploadUrl) throw new Error("Failed to get upload URL.");

      await fetch(uploadUrl, {
        method: "PUT",
        body: selectedFile,
        headers: { "Content-Type": selectedFile.type },
      });

      alert("Upload successful! Fetching download URL...");

      setTimeout(async () => {
        try {
          const url = await getDownloadUrl(selectedFile.name);
          if (url) {
            setDownloadUrl(url);
          } else {
            alert("Failed to fetch download URL.");
          }
        } catch (error) {
          alert("Error fetching download URL.");
        } finally {
          setUploading(false);
        }
      }, 5000);
    } catch (error) {
      alert("Upload failed.");
      setUploading(false);
    }
  };

  return (
    <>
      <div className="upload-container">
        <h2>Upload & Resize Image</h2>

        {/* Drag & Drop Area */}
        <div {...getRootProps()} className="drop-zone">
          <input {...getInputProps()} />
          {selectedFile ? (
            <p>Selected File: {selectedFile.name}</p>
          ) : (
            <p>Drag & Drop or Click to Select an Image </p>
          )}
        </div>

        {/* Buttons in one line */}
        <div className="button-group">
          <button onClick={() => document.querySelector("input[type='file']").click()}>
            Select Image
          </button>
          <button onClick={handleUpload} disabled={uploading}>
            {uploading ? "Uploading..." : "Upload Image"}
          </button>
        </div>

        {/* Download button appears only after upload */}
        {downloadUrl && (
          <div className="download-button">
            <a href={downloadUrl} download>
              <button>Download Image</button>
            </a>
          </div>
        )}
      </div>
    </>
  );
}
