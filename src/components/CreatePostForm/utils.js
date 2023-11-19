export const getProgress = ({ bytesTransferred, totalBytes }) => (bytesTransferred / totalBytes) * 100;

export const getUploadedFileName = ({ name }) => new Date().getTime() + name;
