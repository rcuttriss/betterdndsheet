import "./InventoryPane.css"
import React, { useContext, useState } from "react";
import CharacterContext from "../../lib/context";
import { deleteInventoryDoc } from "../../lib/fetchCharData";
import AddItemButton from "./AddItemButton";
import ItemModal from "./ItemModal";

function InventoryPane() {
    const { inventory, setInventory } = useContext(CharacterContext);
    const [editDialogOn, setEditDialogOn] = useState(false);
    const [modalInfo, setModalInfo] = useState({});

    function toggleModal(name,desc,qty,category) {
        setEditDialogOn((prev) => !prev);
        setModalInfo({
            oldName: name,
            name: name,
            desc: desc,
            qty: qty,
            category: category
        })
    }

    function removeItem( name ) {
        deleteInventoryDoc(name)
        setInventory((prevInventory) => {
            const newInventory = {...prevInventory};
            delete newInventory[name];
            return newInventory;
        })
    }
    
    return (
        <div className="inv-pane">
            <div className="inv-row-header">
                <span>Name</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Category</span>
            </div>
            {Object.entries(inventory).map(([key, value], index) => (
                <div className="inv-row" key={key}>
                    <span>{key}</span>
                    <span>{value.desc}</span>
                    <span>{value.quantity}</span>
                    <span>{value.category}</span>
                    <span className="editButton" onClick={() => toggleModal(key,value.desc,value.quantity,value.category)}>Edit</span>
                    <span className="removeButton" onClick={() => removeItem(key)}>X</span>
                </div>
            ))}
            <AddItemButton></AddItemButton>
            {editDialogOn && <ItemModal modalInfo={modalInfo} toggleModal={toggleModal} />}
        </div>
    );
}

export default InventoryPane;
