export const handleFileChange = (event, uploadedMedia, setUploadedMedia) => {
  const files = Array.from(event.target.files);
  const fileUrls = files.map((file) => file);
  setUploadedMedia((prevMedia) => [...prevMedia, ...fileUrls]);
  if (uploadedMedia.length >= 10) {
    uploadedMedia.pop();
  }
};

export const deleteMedia = (indexToDelete, uploadedMedia, setUploadedMedia) => {
  URL.revokeObjectURL(uploadedMedia[indexToDelete]);
  setUploadedMedia((prevMedia) =>
    prevMedia.filter((_, index) => index !== indexToDelete)
  );
};
