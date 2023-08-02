const Image = require("../models/image");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const {
  GetObjectCommand,
  S3Client,
  paginateListObjectsV2,
} = require("@aws-sdk/client-s3");

const fs = require("fs");

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const accessKey = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
  },
  region: bucketRegion,
});

const createImage = async (req, res) => {
  const { file } = req;
  const { gallery } = req.body;

  const newImage = await Image.create({
    name: file.filename,
    originalName: file.originalName,
    gallery,
  });

  const uploadParams = {
    Bucket: bucketName,
    Key: file.filename,
  };

  const command = new GetObjectCommand(uploadParams);
  const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
  console.log(file.path);
  fs.unlinkSync(file.path);
  res.json({ ...newImage._doc, url });
};

const getImage = async (req, res, next) => {
  const { gallery } = req.query;

  try {
    const images = await Image.find({ gallery });

    const result = [];
    for (let i = 0; i < images.length; i++) {
      const uploadParams = {
        Bucket: bucketName,
        Key: images[i].name,
      };
      const command = new GetObjectCommand(uploadParams);
      const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
      result.push({
        originalName: images[i].originalName,
        name: images[i].name,
        url,
        ìd: images[i]._ìd,
      });
    }

    res.json(result);
  } catch (err) {
    console.log(err);
  }
};

const getThumbnail = async (req, res, next) => {
  const { gallery } = req.query;

  try {
    const image = await Image.findOne({ gallery });
    console.log(image);
    if (!image) return res.send("");

    const uploadParams = {
      Bucket: bucketName,
      Key: image.name,
    };
    const command = new GetObjectCommand(uploadParams);
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

    res.json(url);
  } catch (err) {
    console.log(err);
  }
};

const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPhotographer = await Photographer.findByIdAndDelete({ id });
    if (!deletePhotographer) {
      return res.status(500).json({ message: "Photographer not found" });
    }
    res.json(deletedPhotographer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createImage, getImage, deleteImage, getThumbnail };
