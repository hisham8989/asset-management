import { Joi } from "express-validation";
import validationConstant from "./validationConstant.js";

export const fetchAssetById = {
  params: Joi.object({
    assetId: Joi.string().regex(validationConstant.OBJECTID_REGEX).required(),
  }),
};

export const fetchAssetByUserId = {
  params: Joi.object({
    userId: Joi.string().regex(validationConstant.OBJECTID_REGEX).required(),
  }),
};

export const createValidAsset = {
  params: Joi.object({
    userId: Joi.string().regex(validationConstant.OBJECTID_REGEX).required(),
  }),
};

export const updateValidAssetById = {
  params: Joi.object({
    assetId: Joi.string().regex(validationConstant.OBJECTID_REGEX).required(),
  }),
  body: Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).min(1).required(),
  }),
};

export const deleteValidAsset = {
  params: Joi.object({
    assetId: Joi.string().regex(validationConstant.OBJECTID_REGEX).required(),
  }),
};
