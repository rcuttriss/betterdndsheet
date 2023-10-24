import "./InventoryPane.css"
import React, { useContext } from "react";
import CharacterContext from "../../lib/context";
import AddItemButton from "./AddItemButton";

function InventoryPane() {
    const { inventory } = useContext(CharacterContext);
    
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
                <div className="inv-row" key={index}>
                    <span>{key}</span>
                    <span>{value.desc}</span>
                    <span>{value.quantity}</span>
                    <span>{value.category}</span>
                </div>
                </>
            ))}
            <AddItemButton></AddItemButton>
        </div>
    );
}

export default InventoryPane;
