import axios from "axios";

const uploadVid = async (media) => {
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", "socialpulse"); // Replace socialpulse with your own cloudinary upload preset.
    form.append("cloud_name", "dgnigx1ez"); // Replace dgnigx1ez with your own cloudinary cloud name.
    form.append("resource_type", "video");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dgnigx1ez/video/upload", // Replace dgnigx1ez with your own cloudinary cloud name.
      form
    );

    return res.data.url;
  } catch (error) {
    console.error("Error uploading media:", error);
    return null;
  }
};

export default uploadVid;
