import "./AddItemButton.css"
import React, {useState} from "react";
import ItemModal from "./ItemModal";

function AddItemButton() {
    const [dialogOn, setDialogOn] = useState(false);

    function toggleModal() {
        setDialogOn((prev) => !prev);
    }

    const modalInfo = {
        oldName: "",
        name: "",
        desc: "",
        qty: 1,
        category: ""
    }

    return(<>
        <div onClick={toggleModal} className="add-item-button">
            <span>Add Item</span>
        </div>
        {dialogOn && <ItemModal modalInfo={modalInfo} toggleModal={toggleModal} />}
    </>
    )
}

export default AddItemButton;