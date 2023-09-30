import { useState } from "react";
import "./SpellsPane.css";

function SpellsCounters() {
    const [spellSlots, setSpellSlots] = useState(Array.from({ length: 9 }, () => 0));


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