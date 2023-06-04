import { deleteApi, getApi, postApiWithFiles, putApi } from "../utils/apiCall";
import { API_CONSTANTS } from "../utils/contants";

const getAssetInfo = async () => {
  const { user, token } = JSON.parse(localStorage.getItem("token"));
  const data = await getApi(
    `${API_CONSTANTS.getAssetByUser}/${user._id}`,
    token
  );
  return data;
};

const createAssetData = async (body) => {
  const { user, token } = JSON.parse(localStorage.getItem("token"));
  const data = await postApiWithFiles(
    `${API_CONSTANTS.createAsset}/${user._id}`,
    body,
    token
  );
  return data;
};

const getAssetById = async (assetId) => {
  const { token } = JSON.parse(localStorage.getItem("token"));
  const data = await getApi(`${API_CONSTANTS.getAsset}/${assetId}`, token);
  return data;
};

const deleteAssetById = async (assetId) => {
  const { token } = JSON.parse(localStorage.getItem("token"));
  const data = await deleteApi(
    `${API_CONSTANTS.deleteAssetById}/${assetId}`,
    token
  );
  return data;
};

const updateAssetById = async (assetId, body) => {
  const { token } = JSON.parse(localStorage.getItem("token"));
  const data = await putApi(
    `${API_CONSTANTS.updateAssetById}/${assetId}`,
    body,
    token
  );
  return data;
};

export default {
  getAssetInfo,
  createAssetData,
  getAssetById,
  deleteAssetById,
  updateAssetById,
};
