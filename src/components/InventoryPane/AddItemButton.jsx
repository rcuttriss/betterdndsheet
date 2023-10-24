import "./AddItemButton.css"
import React, {useState} from "react";

function AddItemButton() {
    const [dialogOn, setDialogOn] = useState(false);
    
    
    function closeModal() {
        setDialogOn(false);
    }
    function openModal() {
        setDialogOn(true);
    }
    function confirmNewItem() {

    }

    return(<>
        <div onClick={openModal} className="add-item-button">
            <span>Add Item</span>
        </div>
        <div className={`add-item-modal dialogOn-${dialogOn}`}>
            <button onClick={closeModal} class="close-btn">X</button>
            <h2>Add New Item</h2>
            <form id="productForm">
                <div class="form-group">
                    <label for="productName">Name:</label>
                    <input type="text" id="productName" required />
                </div>
                <div class="form-group">
                    <label for="productDesc">Description:</label>
                    <textarea id="productDesc" rows="4" required></textarea>
                </div>
                <div class="form-group">
                    <label for="productQty">Quantity:</label>
                    <input type="number" id="productQty" required />
                </div>
                <div class="form-group">
                    <label for="productCategory">Category:</label>
                    <select id="productCategory">
                        <option value="consumable">consumable</option>
                        <option value="armor">armor</option>
                        <option value="weapon">weapon</option>
                        <option value="off-hand">off-hand</option>
                        <option value="ammunition">ammunition</option>
                    </select>
                </div>
                <button className="confirm-button" onClick={confirmNewItem} type="submit">confirm</button>
            </form>
        </div>
    </>
    )
}

export default AddItemButton;