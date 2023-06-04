import express from "express";
import { validate } from "express-validation";
import { upload } from "../../config/aws-multer.js";
import {
  createAsset,
  getAssetById,
  getAssetByUserId,
  destroyAssetById,
  updateAssetById,
} from "../../controllers/assetController.js";
import {
  createValidAsset,
  deleteValidAsset,
  fetchAssetById,
  fetchAssetByUserId,
  updateValidAssetById,
} from "../../validations/asset.validation.js";
import { verifyToken } from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.get(
  "/user/:userId",
  validate(fetchAssetByUserId, {}, {}),
  verifyToken,
  getAssetByUserId
);

router.get(
  "/:assetId",
  validate(fetchAssetById, {}, {}),
  verifyToken,
  getAssetById
);

router.put(
  "/update/:assetId",
  validate(updateValidAssetById, {}, {}),
  verifyToken,
  updateAssetById
);

router.post(
  "/create/:userId",
  validate(createValidAsset, {}, {}),
  upload.single("folder"),
  verifyToken,
  createAsset
);

router.delete(
  "/delete/:assetId",
  validate(deleteValidAsset, {}, {}),
  verifyToken,
  destroyAssetById
);

export default router;
