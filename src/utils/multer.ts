import multer from "multer";

const multerStorage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, "src/assets/");
  },

  filename: (request, file, callback) => {
    callback(null, file.originalname);
  },
});

export const multerUpload = multer({ storage: multerStorage });
