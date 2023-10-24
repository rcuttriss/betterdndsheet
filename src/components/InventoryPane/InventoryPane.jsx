import "./InventoryPane.css"
import React, { useContext } from "react";
import CharacterContext from "../../lib/context";
import { deleteInventoryDoc } from "../../lib/fetchCharData";
import AddItemButton from "./AddItemButton";

function InventoryPane() {
    const { inventory, setInventory } = useContext(CharacterContext);

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
                <>
                <div className="inv-row" key={key}>
                    <span>{key}</span>
                    <span>{value.desc}</span>
                    <span>{value.quantity}</span>
                    <span>{value.category}</span>
                    <span className="removeButton" onClick={() => removeItem(key)}>X</span>
                </div>
                </>
            ))}
            <AddItemButton></AddItemButton>
        </div>
    );
}

export default InventoryPane;
