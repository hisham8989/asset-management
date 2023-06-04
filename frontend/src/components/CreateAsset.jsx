import Navbar from "./Navbar";
import AssetForm from "./AssetForm";
import { useState } from "react";

const CreateAsset = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="full-width">
      <Navbar />
      <div className="center-container">
        {loading ? (
          <div>loading...</div>
        ) : (
          <AssetForm setLoading={setLoading} />
        )}
      </div>
    </div>
  );
};

export default CreateAsset;
