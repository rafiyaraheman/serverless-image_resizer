// import axios from "axios";
// // const cors = require('cors'); 
// // app.use(cors());
// const API_BASE_URL = "https://vx7hv4e461.execute-api.eu-north-1.amazonaws.com/dev/upload"; // Replace with actual API Gateway URL

// // Function to get the pre-signed URL for upload
// export async function getUploadUrl(filename) {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/generate-upload-url`, { filename });
//     return response.data.uploadUrl;
//   } catch (error) {
//     console.error("Error getting upload URL:", error);
//     return null;
//   }
// }

// // Function to get the download URL for resized image
// export async function getDownloadUrl(filename) {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/generate-download-url`, { filename });
    
//     return response.data.downloadUrl;
//   } catch (error) {
//     console.error("Error getting download URL:", error);
//     return null;
//   }
// }
import axios from "axios";

const API_BASE_URL = "https://4xfw30loze.execute-api.eu-north-1.amazonaws.com/dev";

/**
 * Get a pre-signed URL for uploading a file.
 * @param {string} filename - The name of the file.
 * @param {string} contentType - The MIME type of the file.
 * @returns {Promise<string|null>}
 */
export async function getUploadUrl(filename, contentType) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/upload`,
      { filename, contentType },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data.uploadUrl;
  } catch (error) {
    console.error("Error getting upload URL:", error);
    return null;
  }
}

/**
 * Get a pre-signed URL for downloading a file.
 * @param {string} filename - The name of the file.
 * @returns {Promise<string|null>}
 */
export async function getDownloadUrl(filename) {
  try {
    const cleanFilename = filename.trim();
    const response = await axios.get(
      `${API_BASE_URL}/download?filename=${encodeURIComponent(cleanFilename)}`
    );
    return response.data.downloadUrl;
  } catch (error) {
    console.error("Error getting download URL:", error);
    return null;
  }
}
