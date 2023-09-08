import "./InventorySlot.css";
import InventorySlotModal from "./InventorySlotModal.js";

const InventorySlot = ({ slot, openModalSlot, setOpenModalSlot, gearData }) => {
  const openWindow = () => {
    setOpenModalSlot(slot); // Notify the App component about the clicked slot
  };

  const closeWindow = (event) => {
    event.stopPropagation();
    setOpenModalSlot(null); // or setOpenModalSlot(null); both should work
  };

  return (
    <div className={"inv-slot"} onClick={openWindow}>
      {slot ? (
        <img src={slot.imageUrl} alt={slot.name} />
      ) : (
        <span>Empty Slot</span>
      )}
      {/* Render the window/modal conditionally */}
      {openModalSlot === slot && (
        <InventorySlotModal
          closeModal={closeWindow}
          gearData={gearData}
          openModalSlot={openModalSlot}
        ></InventorySlotModal>
      )}
    </div>
  );
};

export default InventorySlot;
