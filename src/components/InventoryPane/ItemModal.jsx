import React, { useContext, useState } from "react";
import CharacterContext from "../../lib/context";
import { updateInventory } from "../../lib/fetchCharData";

function ItemModal({ modalInfo, toggleModal }) {
  const { setInventory } = useContext(CharacterContext);
  const [localModalInfo, setLocalModalInfo] = useState(modalInfo);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLocalModalInfo({
      ...localModalInfo,
      [name]: value,
    });
  };

  const confirmItem = (event) => {
    event.preventDefault();

    const { oldName, name, desc, qty, category } = localModalInfo;

    try {
      updateInventory( oldName, name, desc, qty, category);
    } catch {
      return;
    }

    setInventory((prevInventory) => {
      const newInventory = { ...prevInventory };
      if (oldName !== name) {
        delete newInventory[oldName];
      }
      newInventory[name] = { desc, quantity: qty, category };
      return newInventory;
    });

    toggleModal();
  };

  return (
    <div className={`add-item-modal`}>
      <button onClick={toggleModal} className="close-btn">X</button>
      <h2>Add New Item</h2>
      <form id="productForm" onSubmit={confirmItem}>
        <div className="form-group">
          <label htmlFor="productName">Name:</label>
          <input type="text" id="productName" name="name" value={localModalInfo.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="productDesc">Description:</label>
          <textarea id="productDesc" name="desc" rows="4" value={localModalInfo.desc} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="productQty">Quantity:</label>
          <input type="number" id="productQty" name="qty" value={localModalInfo.qty} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="productCategory">Category:</label>
          <select id="productCategory" name="category" value={localModalInfo.category} onChange={handleChange}>
            <option value="consumable">consumable</option>
            <option value="armor">armor</option>
            <option value="weapon">weapon</option>
            <option value="off-hand">off-hand</option>
            <option value="ammunition">ammunition</option>
          </select>
        </div>
        <button type="submit" className="confirm-button">Confirm</button>
      </form>
    </div>
  );
}

export default ItemModal;
