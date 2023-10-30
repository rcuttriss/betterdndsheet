import React, { useState } from "react";
import FeatureModal from "./FeatureModal";

function AddFeatureButton() {
    const [featureDialogOn, setFeatureDialogOn] = useState(false);

    function toggleModal() {
        setFeatureDialogOn((prev) => !prev);
    }

    const modalInfo = {
        name: "",
        desc: "",
        category: ""
    }

    return(<>
        <div className="add-feature-button" onClick={toggleModal}>Add Feature</div>
        {featureDialogOn && <FeatureModal modalInfo={modalInfo} toggleModal={toggleModal}></FeatureModal>}
    </>
    ) 
}

export default AddFeatureButton;