import "./LoadoutSlotModal.css";

const LoadoutSlotModal = ({ closeModal, gearData, openModalSlot }) => {
  return (
    <div className={`inv-slot-modal ${openModalSlot ? "modal-pop-up" : ""}`}>
      <button className="close-modal-button" onClick={closeModal}>
        x
      </button>
      <div className="gear-list">
        {gearData.map((gear, index) => (
          <div key={index} className="gear-item">
            <h3>{gear.name}</h3>
            <p>Armor: {gear.armor}</p>
            <p>Strength: {gear.stats.strength}</p>
            <p>Agility: {gear.stats.agility}</p>
            <p>Stamina: {gear.stats.stamina}</p>
            {/* Display other gear stats as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadoutSlotModal;
