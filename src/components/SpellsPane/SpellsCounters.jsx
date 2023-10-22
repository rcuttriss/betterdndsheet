import "./SpellsPane.css";
import { useState, useContext } from "react";
import CharacterContext from "../../lib/context";
import Loader from "../Loader/Loader";

function SpellsCounters() {
    const { spellSlots } = useContext(CharacterContext);
    
    if (spellSlots == null) {
        return <Loader></Loader>;
    }

    return(<div className="spells-counters">
        <div>Spell Slot Level</div>
        {spellSlots.map((counter, index) => {
            return (<div key={`header${index}`}>{index+1}</div>)
        })}
        <div>Slots Remaining</div>
        {spellSlots.map((counter, index) => {
            return (<div key={`slot${index}`}>{counter}</div>)
        })}
    </div>)
}

export default SpellsCounters;